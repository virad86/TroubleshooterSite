import SpeedGauge from "@/components/ui/speed-gauge";

export default function StatsSection() {
  const stats = [
    {
      value: "100+",
      title: "Partners in the Race",
      description: "Trusted by over 100 customers across Sri Lanka, Australia, the United States, Spain, and Austria."
    },
    {
      value: "20+",
      title: "Engineers in Our Pit Crew",
      description: "Our team of skilled support engineers forms the core of our pit crew, fine-tuning your IT engines."
    },
    {
      value: "5,000+",
      title: "Successful Pit Stops",
      description: "Each resolution represents a successful pit stop, ensuring minimal downtime for your IT vehicles."
    },
    {
      value: "30+",
      title: "Tech Allies in the Pit Lane",
      description: "Collaborating with over 30 technology vendors to orchestrate strategic pit stops for your IT."
    }
  ];

  const trackStats = [
    { value: "80+", label: "M365 Environments" },
    { value: "50+", label: "Firewalls" },
    { value: "50+", label: "Azure Environments" },
    { value: "80+", label: "Active Directory Environments" }
  ];

  return (
    <section id="about" className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-titillium font-bold text-3xl md:text-4xl text-secondary">Our Pit Crew Dynamics</h2>
          <p className="mt-4 text-lg text-foreground max-w-3xl mx-auto">
            In the complex race of IT solutions, Troubleshooter stands out as the team that not only crosses the finish line but sets new records.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition duration-300"
            >
              <SpeedGauge />
              <h3 className="font-titillium font-bold text-4xl text-center text-primary mt-4">{stat.value}</h3>
              <p className="font-titillium font-semibold text-xl text-center text-secondary mt-2">{stat.title}</p>
              <p className="text-center text-sm mt-3">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-secondary p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="font-titillium font-bold text-2xl md:text-3xl text-white">Global Track Management</h3>
              <p className="text-white opacity-80 mt-3">
                Troubleshooter is not confined to a single track. We manage complex IT environments globally, ensuring winning performance everywhere.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {trackStats.map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded text-center">
                  <h4 className="text-primary font-titillium font-bold text-3xl">{item.value}</h4>
                  <p className="text-white text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
