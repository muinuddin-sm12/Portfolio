"use client";
import Link from "next/link";
import { Button } from "./ui/button";
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
    image: "/projects/apexplace.jpg",
    name: "ApexPlace",
    description: "Industrial Real Estate",
    link: "https://assignment-9-294ac.web.app/",
    github: "https://github.com/muinuddin-sm12/ApexPlace",
  },
  {
    image: "/projects/bookverse.jpg",
    name: "BookVerse",
    description: "Online Books Review Website",
    link: "https://b9a8-bookverse.netlify.app/",
    github: "https://github.com/muinuddin-sm12/BookVerse",
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
    <section className="relative mb-12 xl:mb-48">
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
