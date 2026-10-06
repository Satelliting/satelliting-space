import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { Faq } from "@/components/contact/Faq";
import { SignalGraphic } from "@/components/contact/SignalGraphic";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { contactHero, faq } from "@/content/contact";
import { absoluteUrl, breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";

const seo = {
  title: "Contact Us to Start Your Website Project",
  description:
    "Tell Satelliting LLC about your website goals. We reply within one business day with questions, a suggested approach, and a clear quote.",
  path: "/contact",
};

export const metadata: Metadata = buildMetadata(seo);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl(seo.path)}#faq`,
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("ContactPage", seo),
          breadcrumbSchema([{ name: "Contact", path: seo.path }]),
          faqSchema,
        ]}
      />
      <PageHero {...contactHero} compact visual={<SignalGraphic />} />
      <ContactSection />
      <Faq />
    </>
  );
}
