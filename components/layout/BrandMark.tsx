import { cn } from "@/lib/utils";

interface BrandMarkProps {
  /** "dark" sits on the navy sidebar, "light" on a white surface. */
  tone?: "dark" | "light";
  size?: "sm" | "lg";
  className?: string;
}

// Text wordmark in the Planeta Sport style: heavy italic caps, "SPORT" in the
// brand's highlight colour. Stands in until the official logo file is added.
export function BrandMark({ tone = "dark", size = "sm", className }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 font-extrabold italic uppercase leading-none tracking-tight",
        size === "lg" ? "text-3xl" : "text-lg",
        className
      )}
    >
      <span className={tone === "dark" ? "text-white" : "text-zinc-900"}>Planeta</span>
      <span className={tone === "dark" ? "text-sport-yellow" : "text-brand-600"}>Sport</span>
    </span>
  );
}
