import PitStopCard from "@/components/ui/pit-stop-card";
import { scrollToElement } from "@/lib/utils";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Managed Service Desk",
      color: "primary",
      description: "Harness the power of Troubleshooter's complete managed service desk solution. This offering not only streamlines communication but also enhances IT services, supports user mobility, and reduces operational costs.",
      features: [
        {
          title: "Technical Resource Management",
          description: "Save time and costs associated with recruiting and retaining trained staff for IT service support."
        },
        {
          title: "Systems and Tools Integration",
          description: "Seamlessly integrates ticketing systems, secure remote connection tools, and patch update utilities."
        },
        {
          title: "Processes for Effective IT Support",
          description: "Our experienced team has developed processes ensuring high-quality IT service delivery."
        }
      ]
    },
    {
      id: 2,
      title: "IT Maintenance Services (AMCs)",
      color: "secondary",
      description: "Troubleshooter offers maintenance services covering remote and onsite technical support, warranty renewals, and troubleshooting. Our annual maintenance contracts span various technology areas, ensuring your networking, information security, servers, storage, backup and more are well-maintained.",
      link: {
        text: "Learn more about our AMCs →",
        action: () => scrollToElement('contact')
      }
    },
    {
      id: 3,
      title: "Islandwide Branch Office Maintenance Support",
      color: "primary",
      description: "Ensure smooth branch office operations with Troubleshooter's regional field engineers. Our support covers PCs/laptops, network devices, printers/scanners, CCTV, and access control devices. Periodic preventive maintenance minimizes breakdowns, while regional engineers expedite issue resolution."
    },
    {
      id: 4,
      title: "Business Appliances",
      color: "secondary",
      description: "Troubleshooter provides business technology appliances from leading global vendors. Our technical support goes beyond providing devices; it includes on-site assistance, spare devices during breakdowns, and overall support for purchased devices. From PCs/laptops to POS appliances, we've got you covered."
    },
    {
      id: 5,
      title: "Streamlined System Integration Solutions",
      color: "primary",
      description: "At Troubleshooter, we seamlessly integrate cutting-edge technologies from the world's leading vendors to elevate your IT experience. Our System Integration Solutions come with 24x7 technical support.",
      categories: [
        {
          title: "Microsoft Solutions",
          items: [
            "Modern Workplace: Office 365",
            "Microsoft Azure",
            "Windows Server Based Solutions",
            "Active Directory Implementations",
            "Microsoft Exchange"
          ]
        },
        {
          title: "Information Security Solutions",
          items: [
            "Network Firewall",
            "E-mail Security",
            "Web Application Firewall",
            "Next Generation Anti-Virus"
          ]
        },
        {
          title: "Infrastructure Solutions",
          items: [
            "Servers",
            "Storage and Backup",
            "Virtualization",
            "Uninterrupted Power Supply (UPS)"
          ]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-titillium font-bold text-3xl md:text-4xl text-secondary">Our Pit Stop Solutions</h2>
          <p className="mt-4 text-lg text-foreground max-w-3xl mx-auto">
            Just like a Formula 1 pit crew, we provide swift, efficient solutions to keep your IT infrastructure running at peak performance.
          </p>
        </div>
        
        {services.map((service, index) => (
          <PitStopCard 
            key={index}
            service={service}
            className={index < services.length - 1 ? "mb-10" : ""}
          />
        ))}
      </div>
      
      {/* Racing decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-24 bg-primary opacity-5 transform -skew-y-6"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-24 bg-primary opacity-5 transform skew-y-6"></div>
    </section>
  );
}
