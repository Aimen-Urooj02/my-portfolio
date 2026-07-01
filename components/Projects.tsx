import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      category: "AI Automation",
      title: "AI CV Screener",
      description: "An automated workflow built with n8n to screen curriculum vitae documents seamlessly.",
      bgColor: "bg-blue-500",
      image: "/cv-screener.png",
      imageText: "CV Screener Mockup"
    },
    {
      category: "AI Integration",
      title: "Contact Form to AI",
      description: "A Make.com automation that connects a contact form directly to an instant AI-generated response system.",
      bgColor: "bg-black",
      image: "/ai-reply.png",
      imageText: "AI Reply Mockup"
    },
    {
      category: "Machine Learning",
      title: "Smart Feedback Classifier",
      description: "A system designed to intelligently classify user feedback to streamline product improvements.",
      bgColor: "bg-emerald-500",
      image: "/feedback-classifier.png",
      imageText: "Feedback Classifier"
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#FDFBF7]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 inline-block relative">
            Projects
            <svg className="absolute -top-6 -right-10 w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 25 L30 15 M20 30 L35 20 M5 15 L25 5" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Here you will find some of the personal and practical projects that I created with each project highlighting my automation and development skills.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Text Content (Always Left in the screenshot grid) */}
              <div className="flex flex-col items-start order-2 lg:order-1 lg:pr-10">
                <span className="text-gray-500 font-medium mb-3">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{project.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-[15px] max-w-md">
                  {project.description}
                </p>
                <a href="#" className="flex items-center gap-2 font-semibold text-gray-900 hover:text-primary transition-colors group">
                  View Case Study
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Image Content (Always Right) */}
              <div className="order-1 lg:order-2 w-full">
                <div className={`w-full aspect-[4/3] rounded-3xl ${project.bgColor} bg-opacity-10 p-8 md:p-12 shadow-xl shadow-gray-200/50 flex items-center justify-center relative overflow-hidden group`}>
                  {/* Decorative background shape based on project */}
                  <div className={`absolute inset-0 opacity-80 ${project.bgColor}`}></div>
                  
                  {/* The actual mockup container */}
                  <div className="w-full h-full bg-white rounded-xl shadow-2xl relative z-10 border border-gray-100 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                     <Image
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover"
                     />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
