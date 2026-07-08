import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { FaGithub } from "react-icons/fa6"

type Props = {
  title: string
  description: string
  image: string
  techStack: string[]
  demoUrl ?: string
  githubUrl ?: string
}

const ProjectCard = ({ title, description, image, techStack, demoUrl, githubUrl }: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
        {/* Image container */}

        <div className="relative h-48 overflow-hidden">
            <Image src={image} alt={title} width={400} height={400} className="size-full object-cover" />
        </div>

        {/* Main content */}

        <div className="p-6">
          <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 inline-clamp-2">{description}</p>

          {/* Tech stacks */}
          <div className="flex flex-wrap gap-2 mb-6">
            {
              techStack.map((tech,index)=>(
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white font-medium" key={index}>{tech}</span>
              ))
            }
          </div>

          {/* Button */}

          <div className="flex gap-3">
            {
              demoUrl && (
                <Button asChild size={"sm"} className="flex-1 py-4">
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )
            }

               {
              githubUrl && (
                <Button asChild variant={"outline"} size={"sm"} className="flex-1 py-4">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="size-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default ProjectCard
