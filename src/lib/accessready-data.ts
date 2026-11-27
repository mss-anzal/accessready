import { Landmark, Smartphone, PiggyBank, HandCoins, HeartHandshake } from "lucide-react";

export type PreparationItem = { id: string; title: string; detail: string };
export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: typeof Landmark;
  tone: string;
  items: PreparationItem[];
  questions: string[];
};
export const services: Service[] = [
  {
    id: "bank",
    title: "Opening a bank account",
    short: "Bank account",
    description: "A place to receive, keep, and manage your money.",
    icon: Landmark,
    tone: "bg-info-soft text-info",
    items: [
      {
        id: "provider",
        title: "Find a provider you can verify",
        detail:
          "Check the bank’s official contact details and ask a trusted local support organisation about it.",
      },
      {
        id: "eligibility",
        title: "Confirm who can open an account",
        detail:
          "Ask about eligibility for your situation, residency status, and location. Do not assume approval is guaranteed.",
      },
      {
        id: "identity",
        title: "Ask which identity documents are accepted",
        detail:
          "Confirm whether your available documents, including refugee or alternative identity documents, can be accepted.",
      },
      {
        id: "address",
        title: "Confirm any address or contact information needed",
        detail:
          "Ask whether proof of address is requested and what alternatives may be accepted if you do not have it.",
      },
      {
        id: "fees",
        title: "Understand the fees and minimum balance",
        detail:
          "Ask about opening, monthly, withdrawal, transfer, and inactivity fees, and any minimum balance.",
      },
      {
        id: "access",
        title: "Ask how to use and protect your account",
        detail:
          "Confirm how to deposit and withdraw money, get help in your language, and report a lost card or suspicious transaction.",
      },
    ],
    questions: [
      "Which identity documents can you accept for my situation?",
      "What can I use if I do not have proof of address?",
      "Are there any opening, monthly, or withdrawal fees?",
      "Is there a minimum balance I need to keep?",
      "How can I get help in a language I understand?",
    ],
  },
  {
    id: "mobile",
    title: "Mobile money services",
    short: "Mobile money",
    description: "Send and receive money using your phone.",
    icon: Smartphone,
    tone: "bg-secondary text-primary",
    items: [
      {
        id: "provider",
        title: "Verify the service and its agents",
        detail:
          "Use official provider information to confirm that the service and the agent are legitimate.",
      },
      {
        id: "registration",
        title: "Confirm registration requirements",
        detail:
          "Ask which documents, phone number, or SIM registration details are accepted in your situation.",
      },
      {
        id: "fees",
        title: "Check fees and transaction limits",
        detail:
          "Confirm charges for sending, receiving, withdrawing, and exchanging money, plus daily limits.",
      },
      {
        id: "cash",
        title: "Find out how to add and withdraw money",
        detail:
          "Ask where official agents are located, when they operate, and what happens if cash is unavailable.",
      },
      {
        id: "pin",
        title: "Set up a private PIN",
        detail:
          "Choose a PIN you do not use elsewhere. Never share it, even with someone claiming to be an agent.",
      },
      {
        id: "mistake",
        title: "Ask what to do if something goes wrong",
        detail:
          "Confirm the official support number and the process for a wrong transfer, lost phone, or suspected fraud.",
      },
    ],
    questions: [
      "Which documents are accepted for registration?",
      "What does it cost to send or withdraw money?",
      "What are the transaction and daily limits?",
      "How do I report a lost phone or a transfer to the wrong number?",
      "How can I check whether an agent is official?",
    ],
  },
  {
    id: "saving",
    title: "Saving money",
    short: "Saving money",
    description: "Build a small cushion for the things that matter.",
    icon: PiggyBank,
    tone: "bg-warm-soft text-warm",
    items: [
      {
        id: "goal",
        title: "Choose a savings goal",
        detail:
          "Think about what you are saving for and an amount you can set aside without missing essentials.",
      },
      {
        id: "provider",
        title: "Check how your savings are protected",
        detail:
          "Verify the provider and ask whether any local protection scheme applies to this specific product.",
      },
      {
        id: "eligibility",
        title: "Confirm account and document requirements",
        detail: "Ask which savings options and accepted documents fit your situation.",
      },
      {
        id: "fees",
        title: "Compare fees and any interest",
        detail:
          "Ask whether fees could reduce your savings and whether interest is paid, at what rate, and how often.",
      },
      {
        id: "withdraw",
        title: "Find out when you can access your money",
        detail: "Check withdrawal restrictions, notice periods, and any early withdrawal charges.",
      },
      {
        id: "plan",
        title: "Make a realistic saving plan",
        detail:
          "Choose a manageable amount and timing. You can adjust your plan if your circumstances change.",
      },
    ],
    questions: [
      "Are there fees or a minimum deposit?",
      "Can I withdraw my money when I need it?",
      "Is interest paid, and how is it calculated?",
      "What protection applies to my savings?",
      "What happens if I cannot save every month?",
    ],
  },
  {
    id: "loan",
    title: "Understanding a loan",
    short: "A loan",
    description: "Know the costs before you borrow money.",
    icon: HandCoins,
    tone: "bg-lilac-soft text-lilac",
    items: [
      {
        id: "provider",
        title: "Verify the lender",
        detail:
          "Check official details and seek independent guidance. Be cautious of guaranteed approval in exchange for payment.",
      },
      {
        id: "total",
        title: "Find the total amount you will repay",
        detail:
          "Ask for the full cost in writing, including interest, administration charges, and other fees.",
      },
      {
        id: "schedule",
        title: "Understand the repayment schedule",
        detail:
          "Confirm each payment amount, due dates, the loan term, and which payment methods are accepted.",
      },
      {
        id: "budget",
        title: "Check whether repayments are affordable",
        detail:
          "Allow for rent, food, other essentials, and unexpected costs before deciding to borrow.",
      },
      {
        id: "risk",
        title: "Ask about missed payments and collateral",
        detail:
          "Confirm late charges, what help is available, and whether an asset or guarantor is requested and at risk.",
      },
      {
        id: "contract",
        title: "Understand the agreement before signing",
        detail:
          "Ask for an explanation in a language you understand and time to seek independent advice. Do not sign unclear terms.",
      },
    ],
    questions: [
      "What is the total amount I will repay, including every fee?",
      "How much is each repayment and when is it due?",
      "What happens if I miss a payment?",
      "Is collateral or a guarantor requested?",
      "Can I take the agreement away and get independent advice?",
    ],
  },
  {
    id: "support",
    title: "Finding financial support",
    short: "Financial support",
    description: "Explore trusted help for your circumstances.",
    icon: HeartHandshake,
    tone: "bg-secondary text-primary",
    items: [
      {
        id: "need",
        title: "Identify the support you need",
        detail:
          "Consider whether you need help with essentials, an emergency, education, or starting a livelihood.",
      },
      {
        id: "organisation",
        title: "Find a trusted support organisation",
        detail:
          "Start with established local community groups, refugee support organisations, or official assistance offices.",
      },
      {
        id: "eligibility",
        title: "Ask about eligibility and availability",
        detail:
          "Requirements and funding vary. Ask which programmes are open and whether your situation may qualify.",
      },
      {
        id: "documents",
        title: "Confirm what information to prepare",
        detail:
          "Ask which documents are accepted and whether alternatives or help completing the application are available.",
      },
      {
        id: "cost",
        title: "Check for application costs and scams",
        detail:
          "Confirm any fees through official channels. Be cautious of anyone demanding payment to guarantee assistance.",
      },
      {
        id: "followup",
        title: "Find out how to follow up safely",
        detail:
          "Ask about timelines, official contact details, how your information is used, and whether there is a review process.",
      },
    ],
    questions: [
      "Which support programmes are currently available?",
      "What are the eligibility criteria for my situation?",
      "What documents are accepted, and are there alternatives?",
      "Is the application free, and how long might it take?",
      "How will you protect my personal information?",
    ],
  },
];
export const glossary = [
  {
    term: "Interest",
    definition:
      "Money you pay to borrow money, or money a provider may pay you for keeping savings with them.",
    example: "If you borrow 100 and pay 10 in interest, you repay 110 before any other fees.",
  },
  {
    term: "Transaction fee",
    definition:
      "A charge for a money activity, such as sending money, withdrawing cash, or making a payment.",
    example:
      "If sending 20 costs a fee of 1, you may need 21 in your account to make the transfer.",
  },
  {
    term: "Balance",
    definition:
      "The amount of money in an account at a particular moment. Some money may not yet be available to spend.",
    example: "You deposit 50 and spend 15. Your balance is 35 if there are no other charges.",
  },
  {
    term: "Savings",
    definition: "Money you set aside instead of spending now, for future needs or an emergency.",
    example:
      "Putting aside 5 each week gives you 20 after four weeks, before any interest or fees.",
  },
  {
    term: "Loan",
    definition: "Money you borrow and agree to pay back, usually with interest or fees.",
    example: "You borrow 200 to buy equipment and agree to repay it over several months.",
  },
  {
    term: "Repayment",
    definition:
      "Money you pay back toward a loan. A payment can include part of the amount borrowed, interest, and fees.",
    example: "Your loan agreement may ask for a repayment of 25 on the same date each month.",
  },
  {
    term: "Exchange rate",
    definition:
      "The value of one currency compared with another. Rates can change, and providers may also charge fees.",
    example:
      "At a rate of 2 units of currency B for 1 unit of currency A, 10 A becomes 20 B before fees.",
  },
  {
    term: "Account statement",
    definition: "A record of money going into and out of your account over a period of time.",
    example: "A monthly statement might show your deposits, purchases, fees, and ending balance.",
  },
  {
    term: "Collateral",
    definition:
      "An asset a lender may ask you to pledge for a loan. You could lose it if you cannot repay under the agreement.",
    example:
      "If equipment is used as collateral, the lender may be able to take it if the loan is not repaid.",
  },
  {
    term: "Minimum balance",
    definition:
      "An amount a provider may ask you to keep in an account. Going below it may result in a fee.",
    example: "An account may require a balance of 10. Ask what happens if your balance drops to 8.",
  },
  {
    term: "PIN",
    definition:
      "A personal identification number used to protect access to your account or mobile money. Keep it private.",
    example:
      "You enter your PIN yourself to confirm a withdrawal. An agent should not need to know it.",
  },
  {
    term: "Guarantor",
    definition:
      "Someone who agrees to repay a loan if the borrower cannot. This can create a serious financial responsibility.",
    example:
      "Before agreeing to be a guarantor, ask exactly what you would owe if the borrower misses payments.",
  },
];
export function searchGlossary(query: string) {
  const text = query.trim().toLowerCase();
  return glossary.filter((entry) =>
    `${entry.term} ${entry.definition} ${entry.example}`.toLowerCase().includes(text),
  );
}
export type SavedProgress = { selected: string; checked: Record<string, string[]> };
export function restoreProgress(raw: string | null): SavedProgress {
  const fallback: SavedProgress = { selected: "bank", checked: {} };
  if (!raw) return fallback;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return fallback;
    const source = value as Record<string, unknown>;
    const selected = services.some((s) => s.id === source["selected"])
      ? String(source["selected"])
      : "bank";
    const checked: Record<string, string[]> = {};
    const stored = source["checked"];
    if (stored && typeof stored === "object") {
      for (const service of services) {
        const ids: unknown = (stored as Record<string, unknown>)[service.id];
        if (Array.isArray(ids))
          checked[service.id] = service.items
            .filter((item) => ids.includes(item.id))
            .map((item) => item.id);
      }
    }
    return { selected, checked };
  } catch {
    return fallback;
  }
}
export function completion(service: Service, checked: string[]) {
  const count = service.items.filter((item) => checked.includes(item.id)).length;
  return {
    count,
    total: service.items.length,
    percent: Math.round((count / service.items.length) * 100),
  };
}
export function preparationSummary(service: Service, checked: string[]) {
  const progress = completion(service, checked);
  return `AccessReady — ${service.title}\nPrepared: ${progress.count}/${progress.total}\n\nItems to confirm with your provider:\n${service.items.map((item) => `${checked.includes(item.id) ? "[x]" : "[ ]"} ${item.title}\n    ${item.detail}`).join("\n")}\n\nQuestions to ask:\n${service.questions.map((q) => `• ${q}`).join("\n")}\n\nRequirements vary by provider and location. Educational guidance, not professional financial advice.`;
}
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | AccessReady` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | AccessReady` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
