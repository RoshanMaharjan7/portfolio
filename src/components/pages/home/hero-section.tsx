import Image from "next/image";
import InfoCards from "./info-cards";


const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="h-screen perspective-[1000px] relative px-6 border-b flex flex-col items-center justify-center"
    >
      <Image
        src="/roshanProfile.png"
        alt="Roshan Maharjan"
        width={350}
        height={350}
      />
      <div className="bg-linear-to-b from-transparent to-background pt-10 -mt-30">
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
