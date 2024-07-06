'use client'
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";
// import contactImage from "/contact/contact.png";
import Image from "next/image";
import Form from "@/components/Form";
import FormComponent from "@/components/Form";
const Contact = () => {
    return (
        <section className="py-14">
      <div className="container mx-auto max-w-[980px]">
        <div className="flex items-center justify-between mb-16">
          <div className="flex w-1/2 flex-col justify-center">
            <div className="mb-4">
              <div>Say Hello 👋</div>
            </div>
            <h1 className="text-4xl max-w-[200px] font-bold mb-6">
              Let's Work Together.
            </h1>
            <p className="text-zinc-700 max-w-[280px]">
            We believe in the power of collaboration to achieve great things. By combining our expertise and passion, we can create innovative solutions and make a lasting impact.
            </p>
          </div>
          <div className="w-1/2 md:flex hidden items-center justify-center">
            <Image width={350} height={300} src='/contact/contact.png' alt="Contact" priority/>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 mb-24 xl:mb-32 items-center">
            <div className="flex flex-col gap-y-2 mb-12 lg:mb-24 text-base lg:text-lg">
              <div className="flex items-center gap-x-4">
                <MailIcon size={18} className="" />
                <div>muinuddin.sm12@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-4">
                <HomeIcon size={18} className="" />
                <div>Ajman, United Arab Emirates</div>
              </div>
              <div className="flex items-center gap-x-4">
                <PhoneIcon size={18} className="" />
                <div>+971 056 808 8426</div>
              </div>
            </div>
            <div>
            <FormComponent/>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Contact;