import { cn } from "@/lib/utils";

interface RacingLineProps {
  className?: string;
}

export default function RacingLine({ className }: RacingLineProps) {
  return (
    <div className={cn("racing-line w-full", className)}></div>
  );
}
