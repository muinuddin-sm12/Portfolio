import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Md Muin Uddin Ahmad",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+971 056 808 8426",
  },
  {
    icon: <MailIcon size={20} />,
    text: "muinuddin.sm12@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Ajman, United Arab Emirates",
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="py-10 lg:py-16">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
          About me
        </h2>
        <div>
          <Tabs defaultValue="personal">
            <TabsList className="flex max-w-[500px] flex-col md:flex-row gap-x-4 mx-auto gap-y-2">
              <TabsTrigger
                className="w-[150px] mx-auto bg-zinc-200 border rounded-lg py-2 font-medium px-4"
                value="personal"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger
                className="w-[150px] mx-auto bg-zinc-200 border rounded-lg py-2 font-medium px-4"
                value="skills"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                className="w-[150px] mx-auto bg-zinc-200 border rounded-lg py-2 font-medium px-4"
                value="education"
              >
                Education
              </TabsTrigger>
            </TabsList>

            <div className="text-lg mt-12 xl:mt-8">
              <TabsContent value="personal">
                <div className="max-w-[600px] min-h-[350px] mx-auto">
                  <h3 className="text-xl font-semibold mb-1">
                    Personal Informations
                  </h3>
                  <p className="text-gray-700">
                    Hi there, I'm Muin! a Junior Front End Web Developer
                    passionate about Software Engineering. I began my journey in
                    the exciting world of web development. Even though I'm new
                    to this field, I'm very passionate and dedicated. Currently,
                    I am pursuing a BSc in Computing at Britts Imperial
                    University College.
                  </p>
                  <div className="mt-3">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div>{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="max-w-[600px] min-h-[350px] mx-auto">
                  <h3 className="text-xl font-semibold mb-1">Skills</h3>
                  <p className="font-semibold text-base ">
                    Front-End:{" "}
                    <span className="text-gray-700 font-medium">
                      HTML5, CSS3, Tailwind, JavaScript, React.js
                    </span>
                  </p>
                  <p className="font-semibold text-base ">
                    Back-End:{" "}
                    <span className="text-gray-700 font-medium">
                      Node.js, Express.js, MongoDB, Firebase
                    </span>
                  </p>
                  <p className="font-semibold text-base ">
                    Tools:{" "}
                    <span className="text-gray-700 font-medium">
                      Git, GitHub, Vercel, Netlify
                    </span>
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="education">
                <div className="max-w-[600px] min-h-[350px] mx-auto">
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-gray-700 font-medium">
                    Currently, I am pursuing a BSc in Computing at Britts
                    Imperial University College, Sharjah
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
