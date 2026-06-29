import Card from "@/components/shared/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeXmlIcon,
  Location09Icon,
  Mortarboard02Icon,
} from "@hugeicons/core-free-icons";

type HugeIcon = typeof CodeXmlIcon;

type TInfoCardData = {
  icon: HugeIcon;
  title: string;
  description?: string;
  className: string;
};

const infoCardsData: TInfoCardData[] = [
  {
    icon: CodeXmlIcon,
    title: "Full-Stack Developer",
    className:
      "translate-x-75 -translate-y-20 [transform:rotateY(-22deg)] hover:[transform:rotateY(0deg)] shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]",
  },
  {
    icon: Location09Icon,
    title: "Lalitpur, Nepal",
    className: "-translate-x-50 -translate-y-50 [transform:rotateY(15deg)] hover:[transform:rotateY(0deg)] shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]",
  },
  {
    icon: Mortarboard02Icon,
    title: "Bsc. (Hons) in Computer Science",
    description: "@Herald College Kathmandu",
    className: "-translate-x-80 translate-y-5 [transform:rotateY(20deg)] hover:[transform:rotateY(0deg)] shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]",
  },
];

const InfoCards = () => {
  return (
    <>
      {infoCardsData.map((card, index) => (
        <Card
          key={index}
          parentClassName={`absolute transition-all
      duration-500
      ease-out ${card.className}`}
          className="flex gap-2"
        >
          <HugeiconsIcon
            icon={card.icon}
            className="text-theme"
            strokeWidth={2}
          />
          <div>
            <h3 className="text-primary  ">{card.title}</h3>
            {card.description && (
              <p className="text-text text-sm ">{card.description}</p>
            )}
          </div>
        </Card>
      ))}
    </>
  );
};

export default InfoCards;
