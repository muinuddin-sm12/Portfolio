"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false)
    const pathName = usePathname()
    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY >50 ? setHeader(true):setHeader(false);
        });
        return() => window.removeEventListener('scroll', scrollYPos);
    })
  return (
    <header className={`${header? 'py-4 bg-white shadow-lg' : 'py-6'} sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-[#fef9f5]'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <Navbar containerStyle='hidden lg:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
