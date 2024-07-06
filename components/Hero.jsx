"use client";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import HeroImg from "./HeroImg";

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Resume Of Muin.pdf';
    link.download = 'Resume of Muin.pdf';
    link.click();
  };
  return (
    <section className="py-12 lg:py-16 lg:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="hidden lg:flex relative">
            <div className="rounded-3xl w-[450px] h-[450px] overflow-hidden">
                <HeroImg containerStyles='w-[450px] h-[450px] bg-no-repeat relative bg-bottom' imgSrc='/hero/profile.jpeg'/>
            </div>
          </div>
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Muin</h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
            Hi there, I'm Muin! a Junior Front End Web Developer passionate about Software Engineering.
            </p>
            <div>
              <Button className="gap-x-2" onClick={downloadResume}>
                Resume <Download size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
