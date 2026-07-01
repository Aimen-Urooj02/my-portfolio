import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-topographic">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image & Badge */}
        <div className="relative flex justify-center mt-10 lg:mt-0">
          <svg className="absolute inset-0 w-full h-full scale-110 -z-10 text-primary opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none">
             {/* Yellow horizontal scribbles from screenshot */}
             <path d="M10,20 Q50,15 90,25 M15,35 Q50,30 85,40 M5,50 Q50,45 95,55 M20,65 Q50,60 80,70 M10,80 Q50,75 90,85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>

          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white bg-gray-200 z-10 shadow-xl relative">
            <Image
              src="/about-profile.jpg"
              alt="Aimen Urooj"
              fill
              className="object-cover object-top"
            />
          </div>
          
          {/* Badge */}
          <div className="absolute top-10 right-0 lg:-right-4 bg-primary text-white p-6 rounded-[2rem] rounded-tr-md rounded-bl-md shadow-lg rotate-12 z-20 flex flex-col items-center justify-center transform hover:rotate-0 transition-transform duration-300 w-32 h-32">
            <span className="font-bold text-center text-[13px] leading-tight">Software<br/>Engineering<br/>Student</span>
          </div>

          {/* Black scribble bottom left */}
          <div className="absolute -bottom-4 left-4 lg:-left-4 z-20">
            <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50 Q10 10 30 10 T40 40 M30 50 Q40 10 50 20" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
            </svg>
          </div>
        </div>

        {/* Right: Text & Details */}
        <div className="flex flex-col items-start lg:pl-10">
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
            <svg className="absolute -top-4 -right-8 w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30 L30 10 M25 35 L35 15 M5 20 L20 5" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
            Hello, I'm Aimen Urooj, an aspiring Software Engineer based in Islamabad, Pakistan. I am deeply passionate about creating digital experiences that not only look beautiful but also function seamlessly through intelligent automation.
          </p>
          <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
            My journey in the world of technology revolves around front-end development, UI engineering, and AI automation. I love working with tools like n8n and Make.com to streamline processes, such as my automated CV screener project.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed text-[15px]">
            My work is driven by the belief that exceptional problem solving and logical design can have a profound impact on the way people interact with technology. Outside of coding, I'm an active volunteer, reader, and a Twin City Inter Championship Silver Medalist in Karate.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40">
              Hire Me
            </button>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-gray-300"></div>
              <span className="text-gray-500 font-medium mr-2">Follow Me</span>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><FaGithub className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><FaTwitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
