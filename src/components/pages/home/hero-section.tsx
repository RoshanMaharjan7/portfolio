import Image from "next/image";
import InfoCards from "./info-cards";
import { GridOverlay } from "@/components/shared/grid-overlay";


//  bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
//       bg-size-[58px_58px]
const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-screen perspective-[1000px] relative px-6 border-b flex flex-col items-center justify-center 
     "
    >
      {/* Background gradients */}
      <GridOverlay />
      <div className="absolute mx-1 inset-x-0 top-0 h-48 -z-10 bg-linear-to-b from-background to-transparent pointer-events-none " />
      <div className="absolute mx-1 inset-x-0 bottom-0 h-48 -z-10 bg-linear-to-t from-background to-transparent pointer-events-none " />

      <Image
        src="/roshanProfile.png"
        alt="Roshan Maharjan"
        width={350}
        height={350}
        
      />
      <div className="bg-linear-to-b from-transparent via-background to-transparent pt-10 pb-2 -mt-30">
        <h1 className="font-syne text-theme text-7xl font-bold flex flex-col leading-11.5">
          <span>Roshan</span>
          <span className="text-primary ml-[4.24ch]">Maharjan</span>
        </h1>
      </div>

      <InfoCards />
    </section>
  );
};

export default HeroSection;
