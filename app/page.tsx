import Hero from "./sections/Hero";
import CredibilityBar from "./sections/CredibilityBar";
import About from "./sections/About";
import FeaturedProject from "./sections/FeaturedProject";
import ProjectShowcase from "./sections/ProjectShowcase";
import TechStack from "./sections/TechStack";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import Publications from "./sections/Publications";
import GitHubActivity from "./sections/GitHubActivity";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <CredibilityBar />
      <About />
      <FeaturedProject />
      <ProjectShowcase />
      <TechStack />
      <ExperienceTimeline />
      <Publications />
      <GitHubActivity />
      <Contact />

      <footer className="py-8 border-t border-border-subtle/30">
        <div className="content-max-width flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2026 Harshavardan N. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/harshavardan-n-429a0b28b" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-signal-blue transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/harshavardan23bce1567" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-signal-blue transition-colors">
              GitHub
            </a>
            <a href="mailto:harshavardan.n2023@vitstudent.ac.in" className="text-sm text-text-muted hover:text-signal-blue transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
