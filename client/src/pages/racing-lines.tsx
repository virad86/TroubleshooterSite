import { cn } from "@/lib/utils";

export default function RacingLinesSamples() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Racing Line Design Samples</h1>
      
      <div className="space-y-12">
        {/* Original Design */}
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Original Racing Line</h2>
          <div className="racing-line-dash w-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The current racing line design with dashed pattern.
          </p>
        </div>

        {/* Design 1: Gradient Dash with Pulse Animation */}
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-medium mb-4">1. Gradient Dash with Pulse Animation</h2>
          <div className="w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] animate-pulse-gradient"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A flowing gradient that pulses across the line, mimicking the dynamic movement of racing.
          </p>
        </div>

        {/* Design 2: Modern Gradient Dash */}
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-medium mb-4">2. Modern Gradient Dash</h2>
          <div className="w-full flex">
            <div className="h-1 w-1/3 bg-gradient-to-r from-primary to-blue-600"></div>
            <div className="h-1 w-1/3 bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <div className="h-1 w-1/3 bg-gradient-to-r from-blue-800 to-slate-900"></div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A three-segment gradient bar with different color transitions that feels modern and sleek.
          </p>
        </div>

        {/* Design 3: Neon Racing Stripe */}
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-medium mb-4">3. Neon Racing Stripe</h2>
          <div className="w-full relative overflow-hidden">
            <div className="h-[2px] w-full bg-gray-800"></div>
            <div className="h-[2px] absolute top-0 w-full bg-primary opacity-75 blur-[2px]"></div>
            <div className="h-[1px] absolute top-0 w-full bg-primary"></div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A neon effect with a glow that resembles modern racing aesthetics and night races with their dramatic lighting.
          </p>
        </div>

        {/* Design 4: F1-Inspired Checkered Pattern */}
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-medium mb-4">4. F1-Inspired Checkered Pattern</h2>
          <div className="w-full h-2 flex flex-row">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className={`h-full flex-1 ${i % 2 === 0 ? 'bg-primary' : 'bg-blue-800'}`}
              ></div>
            ))}
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A checkered pattern similar to racing flags, with alternating primary and blue segments.
          </p>
        </div>

        {/* Design 5: Dynamic Data Dash */}
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <h2 className="text-xl font-medium mb-4">5. Dynamic Data Dash</h2>
          <div className="w-full h-2 flex items-center justify-center space-x-[1px]">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="h-full w-[4px] bg-primary" 
                style={{ 
                  height: `${Math.max(30, Math.floor(Math.random() * 100))}%`,
                  opacity: Math.random() * 0.5 + 0.5
                }}
              ></div>
            ))}
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A data visualization style line that mimics telemetry data from racing cars, with varying heights and opacities.
          </p>
        </div>
      </div>
    </div>
  );
}