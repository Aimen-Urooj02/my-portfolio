import { FaInstagram, FaPaperPlane, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <footer id="contact" className="pt-32 pb-8 bg-[#FDFBF7]">
      <div className="container-custom">
        
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 relative">
          <div className="relative mb-8 md:mb-0 w-full text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-tight relative z-10 inline-block md:block">
              LET'S WORK TOGETHER
            </h2>
            {/* Orange Accents */}
            <svg className="absolute -top-10 -right-4 md:right-auto md:left-auto md:top-auto md:-translate-y-10 w-12 h-12 z-0 hidden sm:block" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{left: '60%'}}>
              <path d="M10 25 L15 10 M20 30 L35 25" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute top-0 right-10 hidden lg:block" style={{right: '-10%'}}>
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5 L23 17 L35 20 L23 23 L20 35 L17 23 L5 20 L17 17 Z" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
               </svg>
            </div>
          </div>
          
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-primary/30 text-lg shrink-0">
            Let's Talk
          </button>
        </div>

        {/* Middle Links & Contact Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-8">
          
          <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm font-bold text-gray-600">
            <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm font-semibold text-gray-500">
             <span>Phone: +92 325 0863148</span>
             <span className="hidden sm:block w-[1px] h-4 bg-gray-300"></span>
             <span>Mail: aimenurooj.dev@gmail.com</span>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

        {/* Bottom Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-gray-900 font-bold text-sm">Aimen Urooj</span>
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            Copyright © 2026 Aimen Urooj. All rights reserved
          </p>
          <div className="flex items-center gap-4">
             <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-4 h-4" />
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <FaPaperPlane className="w-4 h-4" />
             </a>
             <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <FaTwitter className="w-4 h-4" />
             </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
