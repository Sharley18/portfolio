import type { MDXComponents } from "mdx/types";

const defaults: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl" {...props} />,
  h2: (props) => <h2 className="mt-10 text-2xl font-semibold tracking-tight text-slate-900" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl font-semibold text-slate-800" {...props} />,
  p: (props) => <p className="mt-4 text-base leading-8 text-slate-700" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700" {...props} />,
  li: (props) => <li className="pl-1 leading-7" {...props} />,
  strong: (props) => <strong className="font-semibold text-slate-900" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-4 border-sky-500/60 bg-sky-50/70 px-4 py-3 text-slate-700"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-8 border-slate-300" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-sky-700 underline decoration-sky-400/70 underline-offset-4 transition hover:text-sky-900"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-slate-900/90 px-1.5 py-0.5 font-mono text-sm text-slate-100"
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaults,
    ...components,
  };
}
