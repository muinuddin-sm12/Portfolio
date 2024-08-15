"use client";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectsCard";

const projectData = [
  {
    image: "/projects/tripforge.jpg",
    name: "TripForge",
    description: "Tourism Management website",
    link: "https://tripforge-b9a10.web.app/",
    github: "https://github.com/muinuddin-sm12/TripForge-client",
  },
  {
    image: "/projects/life-parner.jpg",
    name: "Life Partner",
    description: "An online marriage platform",
    link: "https://life-partner-client.vercel.app/",
    github: "https://github.com/muinuddin-sm12/lifePartner-client",
  },
  {
    image: "/public/projects/mobile-banking.png",
    name: "Mobile Banking",
    description: "An online mobile banking platform",
    link: "https://mobile-banking-client.vercel.app/",
    github: "https://github.com/muinuddin-sm12/Mobile-Banking-client",
  },
  {
    image: "/projects/bookverse.jpg",
    name: "BookVerse",
    description: "Online Books Review Website",
    link: "https://b9a8-bookverse.netlify.app/",
    github: "https://github.com/muinuddin-sm12/BookVerse",
  },
  {
    image: "/projects/apexplace.jpg",
    name: "ApexPlace",
    description: "Industrial Real Estate",
    link: "https://assignment-9-294ac.web.app/",
    github: "https://github.com/muinuddin-sm12/ApexPlace",
  },
  {
    image: "",
    name: "Website 4",
    description: "...........",
    link: "/",
    github: "/",
  },
];
const Projects = () => {
  return (
    <section className="py-10 lg:py-16">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
      <div className="container mx-auto">
        <div className="xl:max-w-[1000px] mx-auto">
          <Swiper
            className="h-[450px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectsCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
