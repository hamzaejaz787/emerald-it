import Image from "next/image";
import CtaButton from "@/components/CtaButton";

export function HeroSection() {
  return (
    <section className="relative h-full md:h-screen md:max-h-[1000px] w-full bg-dark-radial  content-center pt-20">
      <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap md:flex-nowrap justify-center md:justify-between gap-4">
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl text-center md:text-left text-primary-foreground">
            <span className="text-custom-emerald font-medium">
              Cyber Security
            </span>{" "}
            Streamlining Processes for Business Efficiency
          </h1>

          <p className="font-lexend text-lg md:text-xl text-center md:text-left text-secondary">
            Enabling Businesses Smart Decision-Making by Integrating Endless
            Automation Possibilities Powered by Our responsible AI
          </p>
          <CtaButton href="/" title="Discover More" />
        </div>

        <div className="">
          <Image src={"/intro-image.png"} alt="" width={800} height={720} />
        </div>
      </div>
    </section>
  );
}
