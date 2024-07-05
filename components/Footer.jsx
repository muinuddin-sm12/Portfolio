"use client";

import Link from "next/link";

import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
const icons = [
    {
        path: 'https://www.facebook.com/muinuddin.sm12',
        name: <RiFacebookFill/>
    },
    {
        path: 'https://www.linkedin.com/in/muin-uddin/',
        name: <RiLinkedinFill/>
    },
    {
        path: 'https://github.com/muinuddin-sm12',
        name: <RiGithubFill/>
    }
]
const Footer = () => {
  return (
    <footer className="bg-secondary flex justify-center items-center py-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-between ">
          <div className="text-muted-foreground text-center md:text-left">
            Copyright &copy; Muin.dev All rights reserved.
          </div>
          <div className="flex gap-x-4 mx-auto xl:mx-0 mb-4 text-zinc-800 text-[20px]">
            {
              icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target="blank">
                        <div>{icon.name}</div>
                    </Link>
                )
              })  
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
