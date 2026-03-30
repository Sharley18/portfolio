import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CASE_STUDIES, getCaseStudyBySlug } from "../caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | Vergina Sharley MS`,
      description: study.summary,
      url: `https://verginasharley.me/case-studies/${study.slug}`,
      images: [study.coverImage.url],
      type: "article",
      locale: "en_IN",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const Content = study.content;
  const index = CASE_STUDIES.findIndex((item) => item.slug === study.slug);
  const prev = index > 0 ? CASE_STUDIES[index - 1] : null;
  const next = index < CASE_STUDIES.length - 1 ? CASE_STUDIES[index + 1] : null;

  return (
    <article className="case-article-shell rounded-3xl p-6 sm:p-8">
      <header className="border-b border-slate-200 pb-6">
        <p className="case-kicker">{study.industry}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{study.title}</h1>
        <p className="mt-3 text-sm font-medium text-slate-500 sm:text-base">
          {study.location} · {study.period}
        </p>
        <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-7 text-slate-700">
          <span className="font-semibold text-slate-900">Primary focus:</span> {study.focus}
        </p>
        <figure className="case-hero-image mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <Image
            src={study.coverImage.url}
            alt={study.coverImage.alt}
            width={1600}
            height={900}
            className="h-[220px] w-full object-cover sm:h-[300px]"
            priority
          />
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-white/90 px-4 py-3 text-xs text-slate-600 sm:text-sm">
            <span>{study.coverImage.caption}</span>
            <a
              href={study.coverImage.creditUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-700 underline underline-offset-2"
            >
              {study.coverImage.creditLabel}
            </a>
          </figcaption>
        </figure>
      </header>

      <section className="pt-6">
        <Content />
      </section>

      <section className="mt-10 border-t border-slate-200 pt-6">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Visual Context</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          Reference visuals aligned to the campaign environment and communication style discussed in this case study.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {study.galleryImages.map((image, idx) => (
            <figure key={`${study.slug}-gallery-${idx}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src={image.url}
                alt={image.alt}
                width={1200}
                height={800}
                className="h-52 w-full object-cover sm:h-60"
                loading="lazy"
              />
              <figcaption className="space-y-1 border-t border-slate-200 px-4 py-3 text-xs text-slate-600 sm:text-sm">
                <p>{image.caption}</p>
                <a
                  href={image.creditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-slate-700 underline underline-offset-2"
                >
                  {image.creditLabel}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
        >
          All case studies
        </Link>
        {prev ? (
          <Link
            href={`/case-studies/${prev.slug}`}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
          >
            Previous: {prev.title}
          </Link>
        ) : null}
        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
          >
            Next: {next.title}
          </Link>
        ) : null}
      </footer>
    </article>
  );
}
