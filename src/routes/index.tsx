import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Infrastructure } from "@/components/Infrastructure";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { GitHubSection } from "@/components/GitHubSection";
import { Learning, Services } from "@/components/Growth";
import { Contact, Footer } from "@/components/Contact";

const TITLE = "Ishita Gupta | Cloud & DevOps Engineer";
const DESCRIPTION =
  "Portfolio of Ishita Gupta — Cloud & DevOps Engineer focused on cloud infrastructure, automation, CI/CD, containers and continuous learning.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Infrastructure />
      <Projects />
      <Experience />
      <Certifications />
      <GitHubSection />
      <Learning />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}