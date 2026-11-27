import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Compass,
  LockKeyhole,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePreparation } from "@/components/preparation-provider";
import { completion, pageHead, services } from "@/lib/accessready-data";
import welcome from "@/assets/welcome.asset.json";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Your next step starts here",
      "Explore financial services, prepare with simple checklists, and learn the questions to ask with AccessReady.",
    ),
  component: HomePage,
});
function HomePage() {
  const { state, select, ready } = usePreparation();
  const current = services.find((service) => service.id === state.selected);
  const progress = current ? completion(current, state.checked[current.id] ?? []) : undefined;
  return (
    <div className="enter">
      <section className="welcome-band">
        <img
          src={welcome.url}
          alt="People preparing for their next financial step together"
          className="welcome-art"
          fetchPriority="high"
        />
        <div className="page-width welcome-content">
          <div className="eyebrow mb-4">
            <span className="size-1.5 rounded-full bg-primary" />
            Your next step starts here
          </div>
          <h1 className="welcome-title">
            Access financial services
            <br className="hidden sm:block" /> with{" "}
            <span className="text-primary">confidence.</span>
          </h1>
          <p className="welcome-copy mt-5 text-muted-foreground">
            A new system doesn’t have to feel unfamiliar. Understand your options, get prepared, and
            know what to ask.
          </p>
          <div className="mt-7 flex items-center gap-5">
            <Button variant="hero" size="lg" asChild>
              <Link to="/prepare">
                Get Started <ArrowRight size={17} />
              </Link>
            </Button>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <LockKeyhole size={13} />
              No sign-up needed
            </span>
          </div>
        </div>
      </section>
      <section className="steps-band" aria-label="Your path to preparation">
        <div className="page-width grid grid-cols-3 gap-6 sm:gap-12">
          {[
            { title: "Understand", detail: "Get to know your options.", icon: Compass },
            { title: "Prepare", detail: "Take it one step at a time.", icon: CheckCircle2 },
            { title: "Ask", detail: "Know the right questions.", icon: MessageCircle },
          ].map((step, index) => (
            <div className="step" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3 className="mb-1 font-semibold">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.detail}</p>
              </div>
              <step.icon
                className="ml-auto hidden text-primary/45 lg:block"
                size={24}
                strokeWidth={1.4}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="page-width py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-[24px] font-bold">
              What would you like to prepare for?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose a service. We’ll help you take the next step.
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ListIcon />
            At your pace, in your own time
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.id}
              to="/prepare"
              onClick={() => select(service.id)}
              className="service-card"
            >
              <span className={`service-icon ${service.tone}`}>
                <service.icon size={25} strokeWidth={1.6} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-action">
                Let’s prepare <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
        {ready && progress && progress.count > 0 && current && (
          <Link
            to="/prepare"
            className="mt-5 flex flex-wrap items-center gap-3 rounded-md border border-border bg-secondary px-5 py-4 text-sm"
          >
            <CheckCircle2 size={18} className="text-primary" />
            <span>
              <strong>Your preparation is saved.</strong> {current.short}: {progress.count} of{" "}
              {progress.total} steps complete.
            </span>
            <span className="ml-auto flex items-center gap-2 font-semibold text-primary">
              Continue
              <ArrowRight size={15} />
            </span>
          </Link>
        )}
      </section>
      <section className="support-band">
        <div className="page-width grid gap-7 md:grid-cols-2 md:gap-16">
          <Link to="/learn" className="support-link">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-info-soft text-info">
              <BookOpen size={22} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold">
                New words, made simple
                <ArrowRight size={14} />
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Interest? Balance? Repayment? Find clear explanations
                <br className="hidden lg:block" /> and everyday examples in our glossary.
              </p>
            </div>
          </Link>
          <Link to="/safety" className="support-link">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
              <ShieldCheck size={22} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold">
                Your safety comes first
                <ArrowRight size={14} />
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Know the warning signs, protect your information,
                <br className="hidden lg:block" /> and make informed decisions.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
function ListIcon() {
  return <CheckCircle2 size={14} className="text-primary" />;
}
