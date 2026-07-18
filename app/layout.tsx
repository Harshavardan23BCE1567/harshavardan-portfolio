import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshavardan N — AI/ML Engineer | Federated Learning & Edge AI",
  description: "AI/ML Engineer specializing in federated learning, edge AI, and serverless cloud systems. Published patent in neuroinformatics. 10+ end-to-end projects across healthcare, cybersecurity, and finance.",
  keywords: ["AI/ML Engineer", "Machine Learning", "Federated Learning", "Edge AI", "Serverless", "Neuroinformatics", "Python", "AWS", "React"],
  authors: [{ name: "Harshavardan N" }],
  openGraph: {
    title: "Harshavardan N — AI/ML Engineer",
    description: "Building intelligent systems at the intersection of research and engineering.",
    type: "website",
    url: "https://harshavardan23bce1567.github.io/harshavardan-portfolio",
    images: [{ url: "/harshavardan-portfolio/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshavardan N — AI/ML Engineer",
    description: "Published patent | Federated Learning | Edge AI | Serverless Cloud",
    images: ["/harshavardan-portfolio/images/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/harshavardan-portfolio/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/harshavardan-portfolio/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/harshavardan-portfolio/favicon/manifest.json" />
        <meta name="theme-color" content="#05070F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harshavardan N",
              jobTitle: "AI/ML Engineer",
              url: "https://harshavardan23bce1567.github.io/harshavardan-portfolio",
              email: "harshavardan.n2023@vitstudent.ac.in",
              telephone: "+91-80727-01565",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Vellore Institute of Technology",
              },
              knowsAbout: [
                "Machine Learning",
                "Federated Learning",
                "Edge AI",
                "Serverless Computing",
                "Cybersecurity",
                "Neuroinformatics",
              ],
              sameAs: [
                "https://linkedin.com/in/harshavardan-n-429a0b28b",
                "https://github.com/harshavardan23bce1567",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-void text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
