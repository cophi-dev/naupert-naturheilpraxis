import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Directions } from "@/components/home/Directions";
import { Hero } from "@/components/home/Hero";
import { Offers } from "@/components/home/Offers";
import { Welcome } from "@/components/home/Welcome";
import { medicalBusinessJsonLd, pageMetadata, serializeJsonLd } from "@/lib/seo";
import { homeDescription, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${site.name} – ${site.profession} ${site.owner} in Hamburg-${site.district}`,
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(medicalBusinessJsonLd()) }}
      />
      <Hero />
      <Welcome />
      <Offers />
      <About />
      <Directions />
      <Contact />
    </>
  );
}
