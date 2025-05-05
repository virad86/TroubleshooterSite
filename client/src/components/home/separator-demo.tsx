import React from 'react';

export default function SeparatorDemo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Separator Design Options</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h3 className="font-titillium text-xl mb-2">Option 1: Gradient Fade with Racing Stripes</h3>
            <p className="mb-6 text-muted-foreground">A subtle gradient that fades at the edges with racing stripe overlay</p>
            <div className="racing-line"></div>
          </div>
          
          <div>
            <h3 className="font-titillium text-xl mb-2">Option 2: Double Line with Accent Color</h3>
            <p className="mb-6 text-muted-foreground">A bold primary color band with two subtle accent lines</p>
            <div className="racing-line-double"></div>
          </div>
          
          <div>
            <h3 className="font-titillium text-xl mb-2">Option 3: Checkered Finish Line Inspired</h3>
            <p className="mb-6 text-muted-foreground">Inspired by racing finish lines with checkered pattern overlay</p>
            <div className="racing-line-checkered"></div>
          </div>
          
          <div>
            <h3 className="font-titillium text-xl mb-2">Option 4: Modern Gradient Dash</h3>
            <p className="mb-6 text-muted-foreground">A two-tone gradient with dash pattern for a contemporary look</p>
            <div className="racing-line-dash"></div>
          </div>
        </div>
      </div>
    </section>
  );
}