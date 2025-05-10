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
    <div 
      className={cn("pit-stop-card bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-1 transition duration-300", className)}
      itemProp="item"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content={title} />
      <meta itemProp="provider" content="Troubleshooter" />
      
      <div className="flex flex-col md:flex-row">
        <div className={`md:w-1/3 bg-${color} p-6 flex items-center justify-center relative`}>
          <h3 className="font-titillium font-bold text-2xl text-white text-center" itemProp="name">{title}</h3>
        </div>
        <div className="md:w-2/3 p-6">
          <p className="mb-4" itemProp="description">{description}</p>
          
          {features && features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="border-l-4 border-primary pl-3" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                  <meta itemProp="name" content={feature.title} />
                  <h4 className="font-titillium font-semibold">{feature.title}</h4>
                  <p className="text-sm mt-1" itemProp="description">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {categories && categories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4 mt-6">
              {categories.map((category, index) => (
                <div key={index} itemProp="serviceOutput" itemScope itemType="https://schema.org/ItemList">
                  <meta itemProp="name" content={category.title} />
                  <h4 className="font-titillium font-semibold text-secondary">{category.title}</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <meta itemProp="position" content={`${itemIndex + 1}`} />
                        <span itemProp="name">• {item}</span>
                      </li>
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
              itemProp="url"
            >
              {link.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
