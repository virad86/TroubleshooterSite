import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpeedGaugeProps {
  className?: string;
  value?: number;
  maxValue?: number;
}

export default function SpeedGauge({ className, value = 85, maxValue = 100 }: SpeedGaugeProps) {
  const gaugeRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Calculate rotation based on value (0 to maxValue) mapping to 0 to 180 degrees
  const rotationDegree = (value / maxValue) * 180;

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
      className={cn("w-28 h-[85px] mx-auto mb-2 relative", className)}
    >
      {/* Semi-circular gauge background */}
      <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-full overflow-hidden border-2 border-slate-700 shadow-inner flex flex-col">
        {/* Gauge screen with ticks and numbers */}
        <div className="flex-1 relative overflow-hidden">
          {/* Gauge markings */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Speed markers */}
            <div className="absolute bottom-0 left-0 w-full h-[70%] flex justify-around">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                <div key={i} className="h-full flex flex-col items-center justify-end">
                  <div className="w-[1px] h-3 bg-white/70"></div>
                </div>
              ))}
            </div>
            
            {/* Label numbers */}
            <div className="absolute bottom-2 left-0 w-full flex justify-between px-4 text-[8px] text-white/80">
              <span>0</span>
              <span className="translate-x-1.5">{maxValue/2}</span>
              <span>{maxValue}</span>
            </div>
            
            {/* Colored speed zones */}
            <div className="absolute bottom-6 left-0 w-full h-1.5 px-4">
              <div className="w-full h-full rounded-full flex overflow-hidden">
                <div className="flex-1 bg-green-500"></div>
                <div className="flex-1 bg-yellow-500"></div>
                <div className="flex-1 bg-red-500"></div>
              </div>
            </div>
          </div>
          
          {/* Speed needle */}
          <div 
            ref={needleRef}
            className={`absolute w-1 h-[60%] bg-red-500 bottom-0 left-1/2 -translate-x-1/2 origin-bottom transform 
            ${isVisible ? `rotate-[${rotationDegree}deg]` : "rotate-0"}
            transition-transform duration-1500 ease-out`}
            style={{
              transform: isVisible ? `rotate(${rotationDegree}deg)` : 'rotate(0deg)'
            }}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-slate-300 rounded-full shadow-md border border-slate-400"></div>
          </div>
        </div>
        
        {/* Gauge base */}
        <div className="h-4 bg-slate-700 border-t border-slate-600 flex items-center justify-center">
          <div className="text-[8px] font-bold text-slate-300 font-titillium">TROUBLESHOOTER</div>
        </div>
      </div>
    </div>
  );
}
