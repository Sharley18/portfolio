import Link from "next/link";
import { CASE_STUDIES } from "./caseStudies";

export default function CaseStudiesPage() {
  return (
    <section className="grid gap-5 sm:grid-cols-2">
      {CASE_STUDIES.map((study) => (
        <article
          key={study.slug}
          className="case-article-shell rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <p className="case-kicker">{study.industry}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{study.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            {study.location} · {study.period}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">{study.summary}</p>
          <p className="mt-4 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Focus:</span> {study.focus}
          </p>
          <Link
            href={`/case-studies/${study.slug}`}
            className="mt-5 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
          >
            Read case study
          </Link>
        </article>
      ))}
    </section>
  );
}
