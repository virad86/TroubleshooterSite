import { cn } from "@/lib/utils";

interface RacingLineProps {
  className?: string;
}

export default function RacingLine({ className }: RacingLineProps) {
  return (
    <div className={cn("w-full relative overflow-hidden", className)}>
      <div className="h-[2px] w-full bg-gray-800"></div>
      <div className="h-[2px] absolute top-0 w-full bg-primary opacity-75 blur-[2px]"></div>
      <div className="h-[1px] absolute top-0 w-full bg-primary"></div>
    </div>
  );
}
