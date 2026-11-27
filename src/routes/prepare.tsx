import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Copy,
  Info,
  ListChecks,
  RotateCcw,
  ShieldCheck,
  ArrowRight,
  Check,
  LoaderCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { copyText, usePreparation } from "@/components/preparation-provider";
import { completion, pageHead, preparationSummary, services } from "@/lib/accessready-data";
export const Route = createFileRoute("/prepare")({
  head: () =>
    pageHead(
      "Prepare for a financial service",
      "Choose a service, complete your preparation checklist, and save useful questions for your provider.",
    ),
  component: PreparePage,
});
function PreparePage() {
  const { state, ready, saved, select, toggle, reset } = usePreparation();
  const service = services.find((item) => item.id === state.selected) ?? services[0];
  if (!service) return null;
  const checked = state.checked[service.id] ?? [];
  const progress = completion(service, checked);
  return (
    <div className="page-width enter">
      <div className="page-intro">
        <span className="eyebrow">
          <ListChecks size={14} />
          One step at a time
        </span>
        <h1>A little preparation goes a long way.</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Choose your service, get your questions ready, and feel more confident before your visit.
        </p>
      </div>
      <div aria-label="Choose a service" className="mb-7 flex flex-wrap gap-2">
        {services.map((item) => (
          <Button
            key={item.id}
            variant="service"
            className="h-11 px-4"
            data-selected={item.id === service.id}
            aria-pressed={item.id === service.id}
            onClick={() => select(item.id)}
          >
            <item.icon size={17} />
            {item.short}
          </Button>
        ))}
      </div>
      <div className="mb-7 flex items-start gap-3 rounded-md border border-border bg-info-soft px-5 py-4 text-info">
        <Info className="mt-0.5 shrink-0" size={18} />
        <p className="text-xs leading-relaxed">
          <strong>Items to confirm, not universal requirements.</strong> Each provider and location
          is different. Use this checklist to find out what applies to your circumstances.
        </p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
        <section className="panel overflow-hidden" aria-label="Preparation checklist">
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="mb-1 text-xs font-medium text-primary">
                  YOUR PREPARATION CHECKLIST
                </div>
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                title="Reset this checklist"
                aria-label="Reset this checklist"
                disabled={!ready || progress.count === 0}
                onClick={() => reset(service.id)}
              >
                <RotateCcw size={16} />
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs">
              <span className="font-medium">
                {ready
                  ? `${progress.count} of ${progress.total} steps complete`
                  : "Loading your saved progress…"}
              </span>
              <span className="font-bold text-primary">{progress.percent}%</span>
            </div>
            <progress
              className="checklist-progress mt-3 w-full"
              max={progress.total}
              value={progress.count}
              aria-label="Checklist completion"
            />
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              {!ready ? (
                <LoaderCircle size={12} className="animate-spin" />
              ) : (
                <Check size={12} className="text-primary" />
              )}
              {!ready
                ? "Getting things ready"
                : saved
                  ? "Progress saved on this device"
                  : "Storage unavailable. Progress lasts for this visit only."}
            </div>
          </div>
          {service.items.map((item) => (
            <label
              key={`${service.id}-${item.id}`}
              className="checklist-row"
              data-complete={checked.includes(item.id)}
            >
              <Checkbox
                className="mt-0.5 size-5"
                checked={checked.includes(item.id)}
                onCheckedChange={() => toggle(service.id, item.id)}
                disabled={!ready}
                aria-label={item.title}
              />
              <div>
                <strong className="block text-sm font-semibold leading-relaxed">
                  {item.title}
                </strong>
                <p className="mt-1 text-xs leading-[1.8] text-muted-foreground">{item.detail}</p>
              </div>
            </label>
          ))}
          {progress.percent === 100 && (
            <div
              role="status"
              className="flex items-start gap-3 border-t border-border bg-secondary p-5 text-primary"
            >
              <CheckCircle2 className="shrink-0" size={21} />
              <div>
                <strong className="text-sm">You’ve completed your preparation!</strong>
                <p className="mt-1 text-xs leading-relaxed">
                  Keep your questions handy. Your provider can confirm the next steps for your
                  situation.
                </p>
              </div>
            </div>
          )}
        </section>
        <aside className="space-y-5">
          <section className="panel">
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold">Questions to ask</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Copy all questions"
                  title="Copy all questions"
                  onClick={() => copyText(service.questions.join("\n"))}
                >
                  <Copy size={16} />
                </Button>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                You have the right to ask, understand, and take your time.
              </p>
            </div>
            {service.questions.map((question, index) => (
              <div className="question-row" key={question}>
                <span className="mt-0.5 text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 text-sm leading-relaxed">{question}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7"
                  aria-label={`Copy question ${index + 1}`}
                  title="Copy question"
                  onClick={() => copyText(question)}
                >
                  <Copy size={13} />
                </Button>
              </div>
            ))}
            <div className="border-t border-border p-5">
              <Button
                className="w-full"
                size="lg"
                onClick={() => copyText(preparationSummary(service, checked))}
              >
                <Copy size={16} />
                Copy my preparation summary
              </Button>
              <p className="mt-2.5 text-center text-[11px] text-muted-foreground">
                Your checklist and questions, all in one place.
              </p>
            </div>
          </section>
          <Link to="/safety" className="flex items-start gap-3 rounded-md bg-secondary p-5">
            <ShieldCheck size={23} className="shrink-0 text-primary" />
            <div>
              <h3 className="text-sm font-bold">Stay safe along the way</h3>
              <p className="mb-3 mt-1 text-xs leading-relaxed text-muted-foreground">
                Never share your PIN. Ask about all fees before agreeing.
              </p>
              <span className="flex items-center gap-2 text-xs font-semibold text-primary">
                Read safety tips
                <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        </aside>
      </div>
    </div>
  );
}
