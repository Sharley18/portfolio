import type { ComponentType } from "react";

import BridalStudioRebranding from "./content/bridal-studio-rebranding.mdx";
import ClinicLocalSeo from "./content/clinic-local-seo.mdx";
import CoimbatoreServiceSeo from "./content/coimbatore-service-seo.mdx";
import EcommerceFestiveGrowth from "./content/ecommerce-festive-growth.mdx";
import EducationContentEngine from "./content/education-content-engine.mdx";
import HospitalityCreatorCollab from "./content/hospitality-creator-collab.mdx";
import RealEstateLeadFunnel from "./content/real-estate-lead-funnel.mdx";
import WomenLedBrandPositioning from "./content/women-led-brand-positioning.mdx";

interface CaseStudyImage {
  url: string;
  alt: string;
  caption: string;
  creditLabel: string;
  creditUrl: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  location: string;
  period: string;
  focus: string;
  summary: string;
  coverImage: CaseStudyImage;
  galleryImages: CaseStudyImage[];
  content: ComponentType<Record<string, unknown>>;
}

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const pexelsCreditUrl = "https://www.pexels.com";
const pexelsCreditLabel = "Photo via Pexels";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bridal-studio-rebranding",
    title: "Bridal Studio Rebranding",
    industry: "Fashion and Bridal Services",
    location: "Coimbatore",
    period: "Q3 2025",
    focus: "Brand narrative, local discovery, and visual consistency",
    summary:
      "A foundational brand and discovery sprint for a bridal studio that needed stronger positioning before scaling paid campaigns.",
    coverImage: {
      url: pexels(265722),
      alt: "Bridal styling accessories on a preparation table",
      caption: "Visual consistency and premium presentation were central to the rebranding direction.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(3183150),
        alt: "Marketing team planning in a strategy meeting",
        caption: "Creative and SEO planning sessions were mapped before execution.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(590020),
        alt: "Digital analytics dashboard in low light",
        caption: "Weekly reporting focused on inquiry quality and conversion readiness.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: BridalStudioRebranding,
  },
  {
    slug: "real-estate-lead-funnel",
    title: "Real Estate Lead Funnel",
    industry: "Real Estate",
    location: "Coimbatore",
    period: "Q3 2025",
    focus: "Intent-led ad journeys and lead quality filtering",
    summary:
      "An acquisition workflow focused on reducing low-intent responses and improving sales-team follow-up quality.",
    coverImage: {
      url: pexels(106399),
      alt: "Modern residential property exterior",
      caption: "Campaign messaging was aligned to high-intent property discovery journeys.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(3183197),
        alt: "Professionals reviewing marketing reports",
        caption: "Audience segmentation and lead qualification were revised with sales feedback.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(669619),
        alt: "Laptop with chart visualizations",
        caption: "Funnel-stage performance was monitored at campaign and landing-page level.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: RealEstateLeadFunnel,
  },
  {
    slug: "clinic-local-seo",
    title: "Clinic Local SEO Sprint",
    industry: "Healthcare",
    location: "Coimbatore",
    period: "Q3 2025",
    focus: "Google Business Profile and location SEO hygiene",
    summary:
      "A local SEO cleanup and structure sprint to make a clinic easier to discover for city-level treatment searches.",
    coverImage: {
      url: pexels(40568),
      alt: "Medical consultation setup with doctor and patient",
      caption: "Healthcare discovery content was aligned to practical patient search intent.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(1170979),
        alt: "Doctor reviewing notes on a tablet",
        caption: "Service-page updates improved clarity around treatment fit and booking steps.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(7579831),
        alt: "Woman typing on laptop with SEO workflow",
        caption: "Citation and profile consistency was tracked as part of local visibility hygiene.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: ClinicLocalSeo,
  },
  {
    slug: "ecommerce-festive-growth",
    title: "Ecommerce Festive Growth Plan",
    industry: "Consumer Ecommerce",
    location: "Tamil Nadu",
    period: "Q4 2025",
    focus: "Campaign sequencing across festive buying windows",
    summary:
      "A planning framework connecting storytelling, offer timing, and audience segmentation for high-pressure festive periods.",
    coverImage: {
      url: pexels(5632402),
      alt: "Ecommerce parcel handling and logistics",
      caption: "Festive planning integrated offer timing, narrative sequencing, and operational readiness.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(7679720),
        alt: "Woman shopping on mobile phone",
        caption: "Creative formats were aligned to decision stages and checkout confidence.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(5717614),
        alt: "Campaign planning board with sticky notes",
        caption: "Campaign calendar structure reduced reactive changes during peak weeks.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: EcommerceFestiveGrowth,
  },
  {
    slug: "education-content-engine",
    title: "Education Brand Content Engine",
    industry: "Education",
    location: "Coimbatore",
    period: "Q4 2025",
    focus: "Content operations and enrollment-intent messaging",
    summary:
      "A repeatable editorial model that aligned blog, short-form, and webinar assets with admissions priorities.",
    coverImage: {
      url: pexels(4145190),
      alt: "Student engaging with learning content on laptop",
      caption: "Education content systems were built around enrollment-intent communication.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(1184572),
        alt: "Notebook and laptop for content planning",
        caption: "Editorial workflows helped convert strategy into repeatable execution.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(3184338),
        alt: "Team discussing ideas around a table",
        caption: "Cross-team review loops improved topic relevance and publication quality.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: EducationContentEngine,
  },
  {
    slug: "hospitality-creator-collab",
    title: "Hospitality Creator Collaboration",
    industry: "Hospitality",
    location: "Coimbatore",
    period: "Q4 2025",
    focus: "Creator fit, briefing quality, and UGC reuse",
    summary:
      "A creator collaboration process designed to improve campaign relevance and produce reusable content assets.",
    coverImage: {
      url: pexels(262978),
      alt: "Hospitality setting with prepared dining space",
      caption: "Creator partnerships were aligned to hospitality storytelling and reusable visual assets.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(3184405),
        alt: "Content creator preparing media setup",
        caption: "Briefing discipline improved quality and reduced post-production revisions.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(3760259),
        alt: "Team reviewing social content strategy",
        caption: "UGC repurposing workflows extended value beyond single campaign drops.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: HospitalityCreatorCollab,
  },
  {
    slug: "women-led-brand-positioning",
    title: "Women-Led Brand Positioning",
    industry: "Lifestyle",
    location: "Coimbatore",
    period: "Q1 2026",
    focus: "Positioning, tone architecture, and launch messaging",
    summary:
      "A communication strategy for a women-led brand that needed clarity, authority, and consistency in public-facing content.",
    coverImage: {
      url: pexels(1181690),
      alt: "Women discussing brand strategy over a workspace table",
      caption: "The positioning process centered on voice consistency and practical value communication.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(3182812),
        alt: "Woman entrepreneur planning campaign with notebook",
        caption: "Messaging frameworks were designed for real publishing workflows, not just deck-level strategy.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(4348404),
        alt: "Brand moodboard and creative references",
        caption: "Launch communication was grounded in repeatable narrative architecture.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: WomenLedBrandPositioning,
  },
  {
    slug: "coimbatore-service-seo",
    title: "Coimbatore Service SEO Playbook",
    industry: "Multi-service Local Businesses",
    location: "Coimbatore",
    period: "Q1 2026",
    focus: "City-intent SEO structure and conversion flow",
    summary:
      "A standardized local SEO playbook built for service brands that rely on discovery from nearby high-intent searches.",
    coverImage: {
      url: pexels(265087),
      alt: "Urban traffic and storefront context for local business search intent",
      caption: "Local discovery strategy was designed for city-level service search behavior.",
      creditLabel: pexelsCreditLabel,
      creditUrl: pexelsCreditUrl,
    },
    galleryImages: [
      {
        url: pexels(313690),
        alt: "Person reviewing search analytics on a laptop",
        caption: "SEO page structure and conversion flow were tested as one system.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
      {
        url: pexels(95916),
        alt: "Street-level city signage and business visibility context",
        caption: "Location-intent architecture improved relevance for nearby service discovery.",
        creditLabel: pexelsCreditLabel,
        creditUrl: pexelsCreditUrl,
      },
    ],
    content: CoimbatoreServiceSeo,
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);
