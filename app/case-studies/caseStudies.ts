import type { ComponentType } from "react";

import BridalStudioRebranding from "./content/bridal-studio-rebranding.mdx";
import ClinicLocalSeo from "./content/clinic-local-seo.mdx";
import CoimbatoreServiceSeo from "./content/coimbatore-service-seo.mdx";
import EcommerceFestiveGrowth from "./content/ecommerce-festive-growth.mdx";
import EducationContentEngine from "./content/education-content-engine.mdx";
import HospitalityCreatorCollab from "./content/hospitality-creator-collab.mdx";
import RealEstateLeadFunnel from "./content/real-estate-lead-funnel.mdx";
import WomenLedBrandPositioning from "./content/women-led-brand-positioning.mdx";

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  location: string;
  period: string;
  focus: string;
  summary: string;
  content: ComponentType<Record<string, unknown>>;
}

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
    content: CoimbatoreServiceSeo,
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);
