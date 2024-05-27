import Image from "next/image";
import { HeroSection } from "@/app/_components/HeroSection";
import ServiceLinks from "@/components/ServiceLinks";
import WhyUsSection from "./_components/WhyUsSection";
import CtaButton from "@/components/CtaButton";
import TestimonailSlider from "@/components/TestimonailSlider";

const Home = async () => {
  return (
    <main className="h-full">
      <HeroSection />
      <ServiceLinks />

      <section className="container px-8">
        <div className="flex items-center flex-col-reverse lg:flex-row justify-between gap-8 py-8">
          <div className="flex-1 min-w-min">
            <Image
              src={"/tab-image.png"}
              alt=""
              width={720}
              height={550}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-6 flex-1 min-w-min">
            <h2 className="font-jakarta text-4xl font-bold">
              Delivering IT solutions that enable you to work smarter.
            </h2>
            <p className="font-lexend text-gray-100">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </section>
      <WhyUsSection />

      <section className="container px-8 py-12 content-center relative after:content-[''] after:w-1/2 after:mx-auto after:border-2 after:border-white after:border-dashed after:absolute after:bottom-0 after:left-0 after:right-0">
        <Image
          src="/cta-pattern.png"
          fill={true}
          alt=""
          className="object-contain !w-max rotate-180 hidden xl:block my-4"
        />
        <div className="space-y-4 text-center z-20 relative">
          <h2 className="text-white text-4xl max-w-3xl font-semibold text-center mx-auto">
            Experience Smooth Technical Event Operation With One World Staff
          </h2>
          <p className="text-gray-50 font-lexend text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
          </p>
          <CtaButton href="/" title="Learn More" />
        </div>
        <Image
          src="/cta-pattern.png"
          fill={true}
          alt=""
          className="object-contain !w-max !left-[unset] hidden xl:block my-4"
        />
      </section>

      <section className="container px-8 py-10 content-center space-y-8">
        <h2 className="text-center text-white text-4xl">Our Trusted Clients</h2>

        <TestimonailSlider />
      </section>
    </main>
  );
};

export default Home;
