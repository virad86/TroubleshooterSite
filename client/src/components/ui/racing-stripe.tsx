import { cn } from "@/lib/utils";

interface RacingStripeProps {
  className?: string;
}

export default function RacingStripe({ className }: RacingStripeProps) {
  return (
    <div className={cn("racing-stripe", className)}></div>
  );
}
