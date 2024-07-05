import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";
import image from '../../public/contact/contact.png'
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto max-w-[980px]">
        <div className="flex items-center justify-between">
          <div className="flex w-1/2 flex-col justify-center">
            <div className="mb-4">
              <div>Say Hello 👋</div>
            </div>
            <h1 className="text-4xl max-w-[200px] font-bold mb-6">
              Let's Work Together.
            </h1>
            <p className="text-zinc-700 max-w-[280px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              reprehenderit.
            </p>
          </div>
          <div className="w-1/2 md:flex hidden items-center justify-center">
          <Image width={350} src={image} alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
