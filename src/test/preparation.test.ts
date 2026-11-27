import { describe, expect, it } from "vitest";
import { completion, restoreProgress, searchGlossary, services } from "@/lib/accessready-data";
describe("AccessReady preparation", () => {
  it("offers the five requested service choices", () => {
    expect(services.map((service) => service.id)).toEqual([
      "bank",
      "mobile",
      "saving",
      "loan",
      "support",
    ]);
  });
  it("calculates progress from valid checked items, not unrelated IDs", () => {
    const bank = services.find((service) => service.id === "bank");
    if (!bank) throw new Error("Bank service missing");
    expect(completion(bank, ["identity", "invalid"])).toEqual({ count: 1, total: 6, percent: 17 });
    expect(
      completion(
        bank,
        bank.items.map((item) => item.id),
      ).percent,
    ).toBe(100);
  });
  it("restores separate progress for each service and removes duplicates and invalid values", () => {
    expect(
      restoreProgress(
        JSON.stringify({
          selected: "mobile",
          checked: { bank: ["identity", "identity", "wrong"], mobile: ["pin"], unknown: ["x"] },
        }),
      ),
    ).toEqual({ selected: "mobile", checked: { bank: ["identity"], mobile: ["pin"] } });
  });
  it("safely handles corrupted browser storage and unknown selections", () => {
    expect(restoreProgress("{bad")).toEqual({ selected: "bank", checked: {} });
    expect(restoreProgress('{"selected":"unknown","checked":null}')).toEqual({
      selected: "bank",
      checked: {},
    });
  });
  it("searches instantly without case or whitespace sensitivity and handles empty results", () => {
    expect(searchGlossary("  COLLATERAL  ").map((entry) => entry.term)).toEqual(["Collateral"]);
    expect(searchGlossary("zzzzzz")).toEqual([]);
    expect(searchGlossary("").length).toBe(12);
  });
});
