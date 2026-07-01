import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-6 border-none bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-900 tracking-tight">
          <div className="w-7 h-7 bg-primary rounded-full grid grid-cols-2 gap-[2px] p-[4px]">
            <div className="bg-white rounded-full"></div>
            <div className="bg-white rounded-full"></div>
            <div className="bg-white rounded-full"></div>
            <div className="bg-white rounded-full"></div>
          </div>
          Aimen
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-gray-700">
          <Link href="#home" className="text-primary">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Contact Button */}
        <Link href="#contact" className="hidden lg:flex items-center justify-center px-8 py-3 rounded-full border-[1.5px] border-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
