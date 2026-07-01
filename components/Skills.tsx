export default function Skills() {
  const experiences = [
    {
      date: "2021 — Present",
      title: "BS Software Engineering",
      subtitle: "Air University",
      description: "Currently pursuing my degree, focusing on core software engineering principles, algorithms, and practical software development methodologies."
    },
    {
      date: "2019 — 2021",
      title: "Intermediate (Pre-Engineering)",
      subtitle: "Higher Secondary Education",
      description: "Completed pre-engineering studies with a strong foundation in mathematics, physics, and analytical problem-solving."
    },
    {
      date: "2017 — 2019",
      title: "Matriculation",
      subtitle: "Secondary Education",
      description: "Graduated with excellent grades, building the early stepping stones for a career in science and technology."
    },
    {
      date: "Ongoing",
      title: "Volunteer & Usher",
      subtitle: "University Events",
      description: "Active leadership role managing logistics, assisting attendees, and ensuring the smooth execution of multiple large-scale university events."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Heading and Arrow */}
        <div className="flex flex-col items-start relative">
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight z-10">My Journey</h2>
            <svg className="absolute -top-6 -right-10 w-12 h-12 -z-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 25 L20 5 M20 25 L35 15" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <p className="text-gray-500 mb-10 leading-relaxed text-[15px] max-w-md">
            I have had the pleasure to build a strong foundation through my education and active involvement in university leadership roles. I'm always interested in new, exciting and challenging adventures in the tech space.
          </p>
          
          <button className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 mb-16 lg:mb-0">
            Download CV
          </button>

          {/* Yellow Curly Arrow pointing to timeline */}
          <div className="hidden lg:block absolute bottom-0 left-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 80 Q90 10, 140 80 T110 160 Q130 180, 160 170 M150 150 L160 170 L140 175" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
            </svg>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="relative pl-0 md:pl-8 lg:pl-16">
          {/* Vertical Line */}
          <div className="absolute left-[11px] md:left-[163px] top-2 bottom-0 w-[2px] bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group">
                
                {/* Date */}
                <div className="md:w-36 flex-shrink-0 text-left md:text-right pr-2">
                  <span className="font-bold text-gray-900 text-sm md:text-base whitespace-nowrap">{exp.date}</span>
                </div>
                
                {/* Orange Dot Indicator */}
                <div className="hidden md:flex absolute left-0 md:left-[152px] w-6 h-6 bg-primary rounded-full border-4 border-white shadow-sm flex-shrink-0 z-10 transform group-hover:scale-125 transition-transform"></div>
                
                {/* Content */}
                <div className="flex-1 border-l-2 md:border-l-0 border-gray-200 pl-6 md:pl-0">
                  <div className="block md:hidden w-3 h-3 bg-primary rounded-full absolute -left-[5px] top-1"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                  <span className="text-sm font-semibold text-gray-400 block mb-3">{exp.subtitle}</span>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
