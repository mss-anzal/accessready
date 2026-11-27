import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Search, X, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { glossary, pageHead, searchGlossary } from "@/lib/accessready-data";
export const Route = createFileRoute("/learn")({
  head: () =>
    pageHead(
      "Financial words, made simple",
      "Learn about interest, loans, savings, fees, and other financial terms with plain-language definitions and everyday examples.",
    ),
  component: LearnPage,
});
function LearnPage() {
  const [query, setQuery] = useState("");
  const entries = searchGlossary(query);
  return (
    <div className="page-width enter">
      <div className="page-intro">
        <span className="eyebrow">
          <BookOpen size={14} />A little clarity helps
        </span>
        <h1>New words, made simple.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Clear explanations. Everyday examples. No complicated language.
        </p>
      </div>
      <div className="relative mb-4 max-w-2xl">
        <Search className="absolute left-4 top-4 text-muted-foreground" size={19} />
        <input
          type="search"
          aria-label="Search financial terms"
          placeholder="Search a word, like interest or loan…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-[52px] w-full rounded-md border border-input bg-card pl-12 pr-14 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            <X size={16} />
          </Button>
        )}
      </div>
      <p role="status" className="mb-6 text-xs text-muted-foreground">
        {query
          ? `${entries.length} ${entries.length === 1 ? "term" : "terms"} found`
          : `${glossary.length} everyday financial terms`}
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <article key={entry.term} className="glossary-card">
            <h2 className="text-lg font-bold">{entry.term}</h2>
            <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{entry.definition}</p>
            <div className="example">
              <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <Lightbulb size={13} />
                FOR EXAMPLE
              </span>
              {entry.example}
            </div>
          </article>
        ))}
      </div>
      {entries.length === 0 && (
        <div className="py-16 text-center">
          <Search size={32} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-lg font-bold">No terms found</h2>
          <p className="mb-5 mt-2 text-sm text-muted-foreground">
            Try a different word or a shorter search.
          </p>
          <Button variant="outline" onClick={() => setQuery("")}>
            Show all terms
          </Button>
        </div>
      )}
      <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Lightbulb className="shrink-0 text-primary" size={16} />
        Examples use illustrative amounts, not actual provider rates. Always ask your provider about
        their specific terms.
      </p>
    </div>
  );
}
