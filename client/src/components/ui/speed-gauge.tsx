import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpeedGaugeProps {
  className?: string;
}

export default function SpeedGauge({ className }: SpeedGaugeProps) {
  const gaugeRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current);
    }

    return () => {
      if (gaugeRef.current) {
        observer.unobserve(gaugeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={gaugeRef}
      className={cn("w-20 h-20 mx-auto mb-4 border-4 border-primary rounded-full relative", className)}
    >
      <div
        ref={needleRef}
        className={`absolute w-[45%] h-1 bg-primary top-1/2 left-[5%] origin-right transform ${
          isVisible ? "rotate-[170deg]" : "rotate-0"
        } transition-transform duration-1000 ease-in-out`}
      ></div>
    </div>
  );
}
