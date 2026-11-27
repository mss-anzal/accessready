import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  LockKeyhole,
  BadgeCheck,
  Receipt,
  FileText,
  Hand,
  Phone,
  ArrowRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/accessready-data";
export const Route = createFileRoute("/safety")({
  head: () =>
    pageHead(
      "Stay safe with your money",
      "Practical ways to protect your PIN, verify providers, understand fees, and recognise financial scams.",
    ),
  component: SafetyPage,
});
const tips = [
  {
    icon: LockKeyhole,
    title: "Keep your PIN and password private",
    text: "Never share your PIN, password, or one-time security code. Enter it yourself, out of sight of others. A provider or agent should not need to know it.",
    tone: "bg-secondary text-primary",
  },
  {
    icon: BadgeCheck,
    title: "Verify before you send money",
    text: "Check the provider and agent through official channels. Double-check the recipient’s name and number before confirming a transfer. Be wary of unexpected messages and links.",
    tone: "bg-info-soft text-info",
  },
  {
    icon: Receipt,
    title: "Ask about every fee",
    text: "Before agreeing, ask about all charges, including transfer, withdrawal, monthly, and late fees. Ask for the total cost in a form you can keep and compare.",
    tone: "bg-warm-soft text-warm",
  },
  {
    icon: FileText,
    title: "Only sign what you understand",
    text: "Take your time. Ask for plain-language explanations or language support. Do not sign blank forms or terms you do not understand. Keep a copy of any agreement.",
    tone: "bg-info-soft text-info",
  },
  {
    icon: Hand,
    title: "Be cautious of “guaranteed access”",
    text: "Be wary of anyone demanding payment to guarantee an account, loan, or support. Confirm any requested fees directly with the official organisation before paying.",
    tone: "bg-warm-soft text-warm",
  },
  {
    icon: Phone,
    title: "Know where to get help",
    text: "Save the provider’s official support number. If you suspect fraud, stop the transaction and contact the provider using verified details. A trusted local support organisation may help you find next steps.",
    tone: "bg-secondary text-primary",
  },
];
function SafetyPage() {
  return (
    <div className="page-width enter">
      <div className="page-intro">
        <span className="eyebrow">
          <ShieldCheck size={14} />
          Your safety comes first
        </span>
        <h1>Protect your money. Trust your instincts.</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          You deserve clear information and time to decide. A little caution can make a big
          difference.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <article key={tip.title} className="safety-card">
            <span className={`service-icon ${tip.tone}`}>
              <tip.icon size={24} strokeWidth={1.7} />
            </span>
            <h2 className="text-base font-bold leading-relaxed">{tip.title}</h2>
            <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{tip.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-5 border-y border-border py-7 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Info size={21} className="mt-0.5 shrink-0 text-primary" />
          <div>
            <h2 className="text-sm font-bold">It’s okay to pause and ask.</h2>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
              If something feels wrong, don’t let anyone rush you. Seek independent help from a
              trusted local organisation.
            </p>
          </div>
        </div>
        <Button variant="outline" asChild>
          <Link to="/prepare">
            Prepare your questions
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
