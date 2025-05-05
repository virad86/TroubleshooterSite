import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
}

interface Category {
  title: string;
  items: string[];
}

interface Link {
  text: string;
  action: () => void;
}

interface ServiceProps {
  id: number;
  title: string;
  color: "primary" | "secondary";
  description: string;
  features?: Feature[];
  categories?: Category[];
  link?: Link;
}

interface PitStopCardProps {
  service: ServiceProps;
  className?: string;
}

export default function PitStopCard({ service, className }: PitStopCardProps) {
  const { id, title, color, description, features, categories, link } = service;
  
  return (
    <div className={cn("pit-stop-card bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-1 transition duration-300", className)}>
      <div className="flex flex-col md:flex-row">
        <div className={`md:w-1/3 bg-${color} p-6 flex items-center justify-center relative`}>
          <span className="absolute top-3 left-3 bg-white text-primary font-titillium font-bold text-2xl rounded-full w-8 h-8 flex items-center justify-center">#{id}</span>
          <h3 className="font-titillium font-bold text-2xl text-white text-center">{title}</h3>
        </div>
        <div className="md:w-2/3 p-6">
          <p className="mb-4">{description}</p>
          
          {features && features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="border-l-4 border-primary pl-3">
                  <h4 className="font-titillium font-semibold">{feature.title}</h4>
                  <p className="text-sm mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {categories && categories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 mt-6">
              {categories.map((category, index) => (
                <div key={index}>
                  <h4 className="font-titillium font-semibold text-secondary">{category.title}</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {link && (
            <button 
              onClick={link.action}
              className="inline-block mt-4 text-primary font-medium hover:underline"
            >
              {link.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
