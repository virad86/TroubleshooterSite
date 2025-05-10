import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  badge: string;
  position: string;
}

interface TeamCardProps {
  member: TeamMemberProps;
  className?: string;
}

export default function TeamCard({ member, className }: TeamCardProps) {
  const { name, role, description, image, badge, position } = member;
  
  return (
    <article 
      className={cn("bg-white rounded-lg shadow-lg overflow-hidden group", className)}
      itemScope 
      itemType="https://schema.org/Person"
    >
      <div className="h-56 bg-gray-200 relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${role} at Troubleshooter`} 
          className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105" 
          loading="lazy"
          itemProp="image"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent p-4">
          <h3 className="font-titillium font-bold text-xl text-white" itemProp="name">{name}</h3>
          <p className="text-white text-sm opacity-90" itemProp="jobTitle">{role}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-foreground" itemProp="description">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="bg-primary text-white text-xs py-1 px-3 rounded-sm">{badge}</span>
          <span className="text-foreground text-sm text-right" itemProp="roleName">{name === "Ryan Fernando" ? "RACE DIRECTOR" : position}</span>
        </div>
      </div>
      <meta itemProp="worksFor" content="Troubleshooter" />
    </article>
  );
}
