import Card from '@/components/shared/card'
import {
  Github01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { HugeiconsIcon } from '@hugeicons/react';

const infoLinksdata = [
  {
    name: "Github",
    icon: Github01Icon,
    url: "https://github.com/RoshanMaharjan7",
  },
  {
    name: "Linkedin",
    icon: Linkedin01Icon,
    url: "https://www.linkedin.com/in/roshan-maharjan-76a92b27b/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/maharjan_roshan7/",
  },
  {
    name: "roshanmaharjan678@gmailcom",
    icon: Mail01Icon,
    url: "mailto:roshanmaharjan678@gmail.com",
  },
];

const SocialLinks = () => {
  return (
     <Card
        parentClassName={`absolute flex items-center gap-1 transition-all duration-500 ease-out translate-x-75 translate-y-15 [transform:rotateY(-22deg)] hover:[transform:rotateY(0deg)] shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]`}
        className="flex gap-2"
      >
        <TooltipProvider>
          {infoLinksdata.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link href={link.url} target="_blank" className="p-1 hover:bg-theme group w-fit h-fit rounded-lg transition-colors duration-200 ease-in-out">
                  <HugeiconsIcon
                    icon={link.icon}
                    className="text-theme group-hover:text-background transition-colors duration-200"
                    strokeWidth={2}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </Card>
  )
}

export default SocialLinks