import type { Metadata } from "next";
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
      url: `https://www.verginasharley.in/case-studies/${study.slug}`,
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
        <p className="mt-3 text-sm font-medium text-slate-500">
          {study.location} · {study.period}
        </p>
        <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-7 text-slate-700">
          <span className="font-semibold text-slate-900">Primary focus:</span> {study.focus}
        </p>
      </header>

      <section className="pt-6">
        <Content />
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
