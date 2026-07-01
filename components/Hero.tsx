import Image from "next/image";
import { Play, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-0 overflow-hidden bg-[#FDFBF7]">
      <div className="container-custom relative grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <h1 className="text-[3.5rem] lg:text-[4.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-[70%]">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 C 10 10, 50 10, 50 15 L 45 10 M 50 15 L 55 10" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
              </svg>
            </div>
            Hello, I'm <br />
            Aimen an AI & <br />
            Automation <br />
            Enthusiast
          </h1>
          
          <p className="text-gray-500 text-base md:text-lg max-w-[450px] mb-10 leading-relaxed font-medium">
            A dedicated Software Engineering Student with a passion for creating digital experiences that not only look beautiful but also function seamlessly using AI automation.
          </p>
          
          <div className="flex items-center gap-6 mb-16">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-white fill-white" />
            </button>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-900 transition-colors">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <ArrowDown className="w-4 h-4" />
            </div>
            Scroll Down
          </div>
        </div>

        {/* Right Content - Image and Stats */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          {/* Circular Scribble Graphic Background */}
          <div className="absolute inset-0 bg-primary/90 rounded-full scale-90 -z-10 translate-x-12 translate-y-4"></div>
          <svg className="absolute inset-0 w-full h-full scale-105 -z-10 text-primary opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M10,40 Q20,20 40,30 T80,30 T90,50 T70,70 T30,80 T10,60" stroke="currentColor" strokeWidth="1" fill="none" />
             <path d="M15,50 Q25,30 45,40 T85,40 T95,60 T75,80 T35,90 T15,70" stroke="currentColor" strokeWidth="1" fill="none" />
             <path d="M20,60 Q30,40 50,50 T90,50 T100,70 T80,90 T40,100 T20,80" stroke="currentColor" strokeWidth="1" fill="none" />
             <path d="M5,45 Q15,25 35,35 T75,35 T85,55 T65,75 T25,85 T5,65" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          
          <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white bg-gray-200 z-10 shadow-xl relative">
            <Image
              src="/profile.jpg"
              alt="Aimen Urooj"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Stats — plain floating text, evenly distributed along right edge */}
          <div className="absolute top-[8%] left-[calc(100%+24px)] lg:left-[calc(100%+32px)] text-left z-20 whitespace-nowrap">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">4+</h3>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">AI Projects<br/>Completed</p>
          </div>
          
          <div className="absolute top-[46%] left-[calc(100%+24px)] lg:left-[calc(100%+32px)] -translate-y-1/2 text-left z-20 whitespace-nowrap">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">100%</h3>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Dedication<br/>&amp; Passion</p>
          </div>

          <div className="absolute top-[82%] left-[calc(100%+24px)] lg:left-[calc(100%+32px)] text-left flex flex-col items-start z-20 whitespace-nowrap">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">A+</h3>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1 mb-1">Grade Average</p>
            <div className="flex gap-1">
               {[1,2,3,4,5].map(i => (
                 <svg key={i} className="w-3 h-3 text-primary fill-primary" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               ))}
            </div>
          </div>
          
          {/* Black scribble bottom left of image */}
          <div className="absolute bottom-10 left-10 z-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 Q20 10 30 50 T50 20" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
              <path d="M20 50 Q30 20 40 60" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Logos Banner */}
      <div className="w-full bg-primary py-8 mt-20">
        <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-90">
          {/* Tech Logos (Replacing the client logos) */}
          <h2 className="text-white text-2xl font-bold tracking-wider">n8n</h2>
          <h2 className="text-white text-2xl font-bold tracking-wider">Make.com</h2>
          <h2 className="text-white text-2xl font-bold tracking-wider">Python</h2>
          <h2 className="text-white text-2xl font-bold tracking-wider">C++</h2>
          <h2 className="text-white text-2xl font-bold tracking-wider">React.js</h2>
        </div>
      </div>
    </section>
  );
}
