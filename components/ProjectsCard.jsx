import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github } from "lucide-react";
const ProjectsCard = ({ project }) => {
  return (
    <Card className=''>
      <CardHeader className="p-6">
        <div className="relative w-full h-[220px] overflow-hidden flex items-center justify-center">
          <Image
            className="absolute top-0 bg-black shadow-2xl"
            width={247}
            height={250}
            src={project.image}
            alt=""
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div>
        <h4 className="mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
        <div className="flex items-center gap-3 mt-2 ">
            <Link href={project.link} target="blank"><span className="px-6 py-2 bg-black text-white hover:text-black hover:bg-white border rounded-lg">Live</span></Link>
            <Link href={project.github} target="blank"><Github/></Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectsCard;
