export default function Testimonials() {
  const testimonials = [
    {
      text: "Aimen has an incredible knack for solving complex problems. Their ability to automate tedious workflows using tools like n8n saved our team countless hours. A true asset to any software engineering team.",
      name: "Dr. Sarah Ahmed",
      role: "Professor of Computer Science",
      image: "SA"
    },
    {
      text: "We collaborated on an AI integration project, and Aimen consistently delivered beyond expectations. Their deep understanding of prompt engineering and REST APIs translated our ideas into a beautiful, functional reality.",
      name: "Ali Khan",
      role: "Hackathon Teammate",
      image: "AK"
    },
    {
      text: "A highly dedicated student who takes initiative. Whether it's organizing university events as a lead volunteer or mastering new web technologies, Aimen consistently impresses us with their skills.",
      name: "Usman Tariq",
      role: "Event Coordinator",
      image: "UT"
    }
  ];

  const StarRow = () => (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-topographic relative border-t border-gray-100">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column (Heading) */}
        <div className="lg:col-span-4 flex flex-col items-start pt-4">
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight relative z-10">
              Hear what they say about us?
            </h2>
            <svg className="absolute -top-4 right-10 w-8 h-8 z-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 L25 5 M15 25 L35 15" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <p className="text-gray-500 mb-10 text-[15px]">
            We love our clients and our clients love us. See all feedback.
          </p>
          
          <button className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-md shadow-primary/30">
            SEE ALL FEEDBACK
          </button>
        </div>

        {/* Right Column — even 3-column grid, all cards same level */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-[#FEF3C7] p-6 rounded-xl shadow-sm flex flex-col">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-white font-serif text-xl font-bold leading-none mt-2">"</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-[14px] mb-6 flex-1">
                  {t.text}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xs overflow-hidden flex-shrink-0">
                      {t.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <StarRow />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
