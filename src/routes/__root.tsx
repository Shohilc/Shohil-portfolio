import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  useBlocker,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shohil C — Full Stack Developer" },
      { name: "description", content: "Personal site of Shohil C, a Java full stack developer building web apps with Spring Boot, React, and MySQL." },
      { name: "author", content: "Shohil C" },
      { property: "og:title", content: "Shohil C — Full Stack Developer" },
      { property: "og:description", content: "Personal site of Shohil C, a Java full stack developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  const [transitionState, setTransitionState] = useState<"idle" | "exiting" | "entering">("idle");
  const [pendingBlocker, setPendingBlocker] = useState<any>(null);

  const blocker = useBlocker({
    shouldBlockFn: ({ current, next }) => {
      // Only block when routing to a new pathname
      return current.pathname !== next.pathname;
    },
    withResolver: true,
  });

  useEffect(() => {
    if (blocker.status === "blocked") {
      setPendingBlocker(blocker);
      setTransitionState("exiting");
    }
  }, [blocker.status]);

  const handleExitComplete = () => {
    if (transitionState === "exiting" && pendingBlocker) {
      pendingBlocker.proceed();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
      setTransitionState("entering");
    }
  };

  const handleEntryComplete = () => {
    if (transitionState === "entering") {
      setTransitionState("idle");
      setPendingBlocker(null);
    }
  };

  const duration = 0.4; // 400ms per phase (800ms total)
  const ease = [0.76, 0, 0.24, 1]; // Premium cubic-bezier curve

  const overlayVariants = {
    initial: { y: "100%" },
    exiting: { y: "0%" },
    entering: { y: "-100%" },
    idle: { y: "100%" },
  };

  const showOverlay = transitionState !== "idle";

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Content Fade / Slide */}
      <motion.div
        animate={{
          opacity: transitionState === "exiting" ? 0 : 1,
          y: transitionState === "exiting" ? -15 : 0,
        }}
        transition={{ duration, ease }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>

      {/* Transition Overlay */}
      {showOverlay && (
        <motion.div
          initial="initial"
          animate={transitionState}
          variants={overlayVariants}
          transition={{ duration, ease }}
          onAnimationComplete={() => {
            if (transitionState === "exiting") {
              handleExitComplete();
            } else if (transitionState === "entering") {
              handleEntryComplete();
            }
          }}
          className="fixed inset-0 z-[9999] w-full h-full bg-[#121212] flex flex-col items-center justify-center pointer-events-none"
          style={{ willChange: "transform" }}
        >
          {/* High-end minimalist label */}
          <motion.div
            animate={{
              opacity: transitionState === "exiting" ? 1 : 0,
              scale: transitionState === "exiting" ? 1 : 0.95,
            }}
            transition={{
              duration: 0.25,
              delay: transitionState === "exiting" ? 0.12 : 0,
            }}
            className="text-white font-serif-italic text-3xl md:text-4xl tracking-wider select-none"
          >
            Shohil C
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isMounted ? (
        <PageTransition>
          <Outlet />
        </PageTransition>
      ) : (
        <Outlet />
      )}
    </QueryClientProvider>
  );
}

