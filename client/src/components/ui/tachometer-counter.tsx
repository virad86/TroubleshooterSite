import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TachometerCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function TachometerCounter({ 
  value, 
  className,
  duration = 2000
}: TachometerCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  // Parse the numeric part from strings like "100+", "5,000+"
  const parseNumericValue = (val: string): number => {
    const numericPart = val.replace(/[^0-9]/g, '');
    return parseInt(numericPart, 10);
  };
  
  const numericValue = parseNumericValue(value);
  const suffix = value.replace(/[0-9,]/g, '');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Apply easing for more realistic tachometer movement
      // Starts fast, slows down at the end
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOutQuart * numericValue));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateCount);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, numericValue, duration]);
  
  return (
    <div ref={counterRef} className={cn("relative", className)}>
      {/* Tachometer base */}
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Digital display effect */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="font-titillium font-bold text-4xl text-primary tabular-nums">
              {count.toLocaleString()}{suffix}
            </span>
          </div>
          
          {/* Tachometer light effect */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-red-700 rounded"
            style={{ 
              width: `${Math.min((count / numericValue) * 100, 100)}%`,
              opacity: 0.7
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}