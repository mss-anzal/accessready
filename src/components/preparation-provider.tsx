import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { restoreProgress, services, type SavedProgress } from "@/lib/accessready-data";
const STORAGE_KEY = "accessready-progress-v1";
type PreparationContext = {
  state: SavedProgress;
  ready: boolean;
  saved: boolean;
  select: (id: string) => void;
  toggle: (serviceId: string, itemId: string) => void;
  reset: (serviceId: string) => void;
};
const Context = createContext<PreparationContext | null>(null);
export function PreparationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SavedProgress>({ selected: "bank", checked: {} });
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(true);
  useEffect(() => {
    try {
      setState(restoreProgress(localStorage.getItem(STORAGE_KEY)));
    } catch {
      setSaved(false);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }, [state, ready]);
  function select(id: string) {
    if (services.some((service) => service.id === id))
      setState((current) => ({ ...current, selected: id }));
  }
  function toggle(serviceId: string, itemId: string) {
    if (
      !services
        .find((service) => service.id === serviceId)
        ?.items.some((item) => item.id === itemId)
    )
      return;
    setState((current) => {
      const items = current.checked[serviceId] ?? [];
      return {
        ...current,
        checked: {
          ...current.checked,
          [serviceId]: items.includes(itemId)
            ? items.filter((id) => id !== itemId)
            : [...items, itemId],
        },
      };
    });
  }
  function reset(serviceId: string) {
    setState((current) => ({ ...current, checked: { ...current.checked, [serviceId]: [] } }));
    toast.success("This checklist has been reset.");
  }
  return (
    <Context.Provider value={{ state, ready, saved, select, toggle, reset }}>
      {children}
    </Context.Provider>
  );
}
export function usePreparation() {
  const value = useContext(Context);
  if (!value) throw new Error("PreparationProvider is required");
  return value;
}
export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard.");
  } catch {
    toast.error("Could not copy. Please select the text and copy it manually.");
  }
}
