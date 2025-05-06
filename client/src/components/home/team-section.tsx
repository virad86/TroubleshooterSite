import TeamCard from "@/components/ui/team-card";
import RacingLine from "@/components/ui/racing-line";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Virad Fernando",
      role: "Co-founder / CTO",
      description: "A seasoned application engineer and senior vice president at the Bank of New York, USA, Virad brings wealth of experience from Fortune 500 companies and provides technical leadership at Troubleshooter.",
      image: "https://api.dicebear.com/7.x/bottts/svg?seed=Virad&backgroundColor=0D8ABC",
      badge: "PRINCIPAL TEAM",
      position: "TECHNICAL DIRECTOR"
    },
    {
      name: "Michael Buventura",
      role: "Co-founder / Chief Technology Advocate",
      description: "With a two-decade career working for companies like Bank of America and American Express, Michael plays a crucial role in educating customers about enterprise-scale systems and technology trends.",
      image: "https://api.dicebear.com/7.x/bottts/svg?seed=Michael&backgroundColor=1D4ED8",
      badge: "PRINCIPAL TEAM",
      position: "STRATEGIST"
    },
    {
      name: "Ryan Fernando",
      role: "Co-founder / CEO",
      description: "With over a decade of experience in the IT industry and a background working with leading technology brands, Ryan provides overall leadership, overseeing customer relationships, marketing, and finance.",
      image: "https://api.dicebear.com/7.x/bottts/svg?seed=Ryan&backgroundColor=991B1B",
      badge: "PRINCIPAL TEAM",
      position: "RACE ENGINEER"
    },
    {
      name: "Navinda Yatawara",
      role: "Director - Solutions",
      description: "With over 12 years of experience in IT, Navinda leads solutions and technical support teams at Troubleshooter, providing them with technical supervision and guidance for local and overseas customers.",
      image: "https://api.dicebear.com/7.x/bottts/svg?seed=Navinda&backgroundColor=065F46",
      badge: "PRINCIPAL TEAM",
      position: "RACE ENGINEER"
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
