import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { Dots } from "@/components/Dots";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shohil C — Full Stack Developer" },
      { name: "description", content: "Java full stack developer building web apps with Spring Boot, React, and MySQL." },
    ],
  }),
  component: Index,
});

const experience = [
  {
    role: "Java Full Stack Intern",
    org: "KodNest, Bengaluru",
    period: "Feb 2026 — Present",
    bullets: [
      "Developing enterprise-grade web applications using Core Java, Spring Boot, and Spring MVC — implementing RESTful APIs with request validation and exception handling.",
      "Building dynamic frontend interfaces in React.js, Tailwind CSS, and modern JavaScript with reusable components and responsive layouts.",
      "Designing and managing MySQL relational databases — complex joins, stored procedures, and data access layers via Spring Data JPA and Hibernate ORM.",
      "Using Git for collaborative version control, Maven for dependency management, and Postman for end-to-end API testing and documentation.",
    ],
  },
];

const projects = [
  {
    name: "Hospital Management System",
    stack: "React · Node.js · MySQL · Tailwind CSS",
    year: "2026",
    color: "oklch(0.7 0.16 25)",
    bullets: [
      "Full-stack platform with React frontend and Node/Express backend exposing REST APIs for patient registration, doctor scheduling, and appointment workflows.",
      "Fully normalized MySQL schema covering patients, doctors, appointments, wards, and billing with role-based access control for admin, doctor, and patient roles.",
      "Pixel-perfect responsive UI in Tailwind CSS with reusable components, form validation, toast notifications, and per-role dashboard views.",
    ],
  },
  {
    name: "Examination Room Guide — RFID & Fingerprint",
    stack: "Arduino · C++ · RFID · Fingerprint Module",
    year: "2025",
    color: "oklch(0.65 0.18 260)",
    bullets: [
      "IoT-based embedded system combining RFID card scanning and fingerprint authentication to securely guide students to their assigned examination halls in real time.",
      "Programmed Arduino Uno in C++ to cross-validate RFID and biometric data against stored student-room mappings, with directional output on a 16×2 LCD and buzzer feedback.",
      "Achieved multi-factor authentication at the hardware level — both credentials required before access, significantly reducing impersonation risk.",
    ],
  },
  {
    name: "Smart Trip Planner",
    stack: "HTML5 · CSS3 · JavaScript · REST APIs",
    year: "2024",
    color: "oklch(0.72 0.16 145)",
    bullets: [
      "Responsive web-based trip planning tool consuming Google Maps, OpenWeather, and Places APIs to help users discover destinations and plan itineraries.",
      "Interactive UI in vanilla JavaScript — live location search, multi-stop route builder, and weather forecast cards with dynamic DOM manipulation.",
      "Robust async/await API handling with error fallbacks, JSON parsing, and local state management for smooth real-time rendering across screen sizes.",
    ],
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Java Full Stack Development",
  "Generative AI",
  "Data Governance",
  "Requirement Gathering",
];

const skills = [
  { label: "Core", value: "Core Java, Advanced Java, Spring MVC, Spring Data JPA" },
  { label: "Languages", value: "C, C++, Java, JavaScript (ES6+), SQL, HTML5, CSS3" },
  { label: "Frontend", value: "React.js, Tailwind CSS, Bootstrap, DOM APIs, Responsive Design" },
  { label: "Backend", value: "Spring Boot, Node.js, Express.js, Hibernate ORM, RESTful APIs" },
  { label: "Data & Tools", value: "MySQL, MongoDB, Git, GitHub, Maven, Postman, Arduino IDE" },
];

const education = [
  {
    school: "Government Engineering College, Talakal",
    detail: "B.E. in Computer Science & Engineering — CGPA 8.2",
    place: "Koppal, Karnataka",
    period: "Dec 2022 — May 2026",
  },
  {
    school: "Sri Gavisiddeshwara P.U. College",
    detail: "PUC / Intermediate — 96%",
    place: "Koppal, Karnataka",
    period: "Jun 2022",
  },
  {
    school: "Minority Morarji Desai Residential School",
    detail: "SSLC / High School — 94%",
    place: "Tanakankal, Koppal",
    period: "Apr 2020",
  },
];

const certifications = [
  "React.js — The Complete React.js Course for Beginners",
  "CSS Crash Course for Beginners",
  "Git, GitHub & Markdown Crash Course",
  "Java Core Guide — Key Features, OOP, Collections & more",
  "Microsoft Office Complete Course",
];

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return [dark, setDark] as const;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs tracking-[0.2em] text-muted-foreground">{children}</h2>
  );
}

function Index() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-background text-foreground animate-route">
      <main className="mx-auto w-full max-w-[640px] px-6 pt-16 pb-24">
        {/* Header Name & Avatar */}
        <div className="animate-in">
          <CardContainer className="py-0 flex justify-start relative w-14 h-14" containerClassName="py-0 block justify-start">
            <CardBody className="h-14 w-14 relative">
              <CardItem translateZ={40} className="w-14 h-14">
                <Link to="/" className="inline-block w-14 h-14">
                  <img
                    src={avatar}
                    alt="Shohil C"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border border-border object-cover"
                  />
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>

          <h1 className="mt-6 text-[20px] leading-tight font-semibold tracking-tight">
            Shohil C
          </h1>
        </div>

        {/* Navigation Bar */}
        <nav className="mt-5 flex items-center justify-between animate-in animate-delay-1">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
            <li><a href="#home" className="font-medium text-foreground">Home</a></li>
            <li><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
            <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
            <li><a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
          </ul>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>

        {/* Intro / Profile Summary */}
        <section id="home" className="mt-10 space-y-5 text-[14px] leading-[1.7] text-foreground/90 animate-in animate-delay-2">
          <p>
            I'm a B.E. Computer Science graduate (CGPA 8.2) from Government Engineering College
            Talakal, currently interning as a{" "}
            <span className="font-serif-italic">Java Full Stack Developer</span> at{" "}
            <a className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground" href="#experience">KodNest</a>{" "}
            in Bengaluru.
          </p>
          <p>
            I build RESTful APIs with Spring Boot and responsive frontends in React, Tailwind CSS,
            and modern JavaScript. On the data side I work with MySQL — schema design, query
            optimization, and ORM-based integration through Node.js, Express, and Hibernate.
          </p>
          <p>
            Outside of web work I tinker with IoT and embedded systems on Arduino and C++. Always
            collaborating in agile teams with Git, GitHub, Postman, and Maven.
          </p>
          <p>
            Say hello on{" "}
            <a className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground" href="mailto:Cshohil300@gmail.com">email</a>,{" "}
            <a className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground" href="https://linkedin.com/in/shohil-c" target="_blank" rel="noreferrer">LinkedIn</a>, or{" "}
            <a className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground" href="https://github.com/Shohilc" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </section>

        {/* Experience Section */}
        <div className="animate-in animate-delay-3">
          <Dots />
          <section id="experience">
            <SectionLabel>EXPERIENCE</SectionLabel>
            <ul className="mt-5 space-y-6">
              {experience.map((e) => (
                <li key={e.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-[14px] font-semibold">
                      {e.role} <span className="text-muted-foreground font-normal">· {e.org}</span>
                    </span>
                    <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
                      {e.period.toUpperCase()}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[14px] leading-[1.65] text-foreground/90">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="pl-4 relative">
                        <span className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-muted-foreground/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Projects Section */}
        <div className="animate-in animate-delay-4">
          <Dots />
          <section id="projects">
            <SectionLabel>PROJECTS</SectionLabel>
            <ul className="mt-5 space-y-7">
              {projects.map((p) => (
                <li key={p.name}>
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-4 w-4 shrink-0 rounded-[5px]"
                      style={{ backgroundColor: p.color }}
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <span className="text-[14px] font-semibold">{p.name}</span>
                        <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
                          {p.year}
                        </span>
                      </div>
                      <p className="mt-1 font-serif-italic text-[13px] text-muted-foreground">
                        {p.stack}
                      </p>
                      <ul className="mt-3 space-y-2 text-[14px] leading-[1.65] text-foreground/90">
                        {p.bullets.map((b, i) => (
                          <li key={i} className="pl-4 relative">
                            <span className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-muted-foreground/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Stack & Coursework Sections */}
        <div className="animate-in animate-delay-5">
          <Dots />
          <section id="stack">
            <SectionLabel>STACK</SectionLabel>
            <dl className="mt-5 space-y-3">
              {skills.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-28 shrink-0 text-[12px] text-muted-foreground">{s.label}</dt>
                  <dd className="text-[14px] text-foreground/90">{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Dots />
          <section id="coursework">
            <SectionLabel>COURSEWORK</SectionLabel>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
              {coursework.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-[12px] text-foreground/85"
                >
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Education, Certifications & Contact Sections */}
        <div className="animate-in animate-delay-6">
          <Dots />
          <section id="education">
            <SectionLabel>EDUCATION</SectionLabel>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-[14px] font-semibold">{e.school}</span>
                    <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
                      {e.period.toUpperCase()}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    <span className="font-serif-italic">{e.detail}</span> · {e.place}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <Dots />
          <section id="certifications">
            <SectionLabel>CERTIFICATIONS</SectionLabel>
            <ul className="mt-5 divide-y divide-border/60">
              {certifications.map((c) => (
                <li key={c} className="py-2.5 text-[13px] text-foreground/85">
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <Dots />
          <section id="contact" className="text-[14px] leading-[1.7] text-foreground/90">
            <p>
              Building something interesting, or just want to say hi?{" "}
              <a href="mailto:Cshohil300@gmail.com" className="font-serif-italic underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">
                Drop me a line
              </a>
              . I read everything and reply to most.
            </p>
            <p className="mt-8 font-mono text-[11px] tracking-wider text-muted-foreground">
              © {new Date().getFullYear()} SHOHIL C · KOPPAL, KARNATAKA
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
