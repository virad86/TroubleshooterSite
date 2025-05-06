import TeamCard from "@/components/ui/team-card";
import RacingLine from "@/components/ui/racing-line";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Virad Fernando",
      role: "Co-founder / CTO",
      description: "A seasoned application engineer and senior vice president at the Bank of New York, USA, Virad brings wealth of experience from Fortune 500 companies and provides technical leadership at Troubleshooter.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      badge: "PRINCIPAL TEAM",
      position: "RACE DIRECTOR"
    },
    {
      name: "Michael Buventura",
      role: "Co-founder / Chief Technology Advocate",
      description: "With a two-decade career working for companies like Bank of America and American Express, Michael plays a crucial role in educating customers about enterprise-scale systems and technology trends.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      badge: "PRINCIPAL TEAM",
      position: "STRATEGIST"
    },
    {
      name: "Ryan Fernando",
      role: "Co-founder / CEO",
      description: "With over a decade of experience in the IT industry and a background working with leading technology brands, Ryan provides overall leadership, overseeing customer relationships, marketing, and finance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      badge: "PRINCIPAL TEAM",
      position: "RACE ENGINEER"
    },
    {
      name: "Navinda Yatawara",
      role: "Director - Solutions",
      description: "With over 12 years of experience in IT, Navinda leads solutions and technical support teams at Troubleshooter, providing them with technical supervision and guidance for local and overseas customers.",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
      badge: "PRINCIPAL TEAM",
      position: "RACE COMMERCIAL DIRECTOR"
    }
  ];

  return (
    <section id="team" className="py-16 bg-slate-100 relative overflow-hidden">
      <RacingLine className="absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-titillium font-bold text-3xl md:text-4xl text-secondary">Our Core Team</h2>
          <p className="mt-4 text-lg text-foreground max-w-3xl mx-auto">
            Meet the pit crew principals who lead Troubleshooter to victory lane, bringing decades of experience from global technology leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
      
      <RacingLine className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
