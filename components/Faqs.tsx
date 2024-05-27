import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export interface faqItemsProps {
  value: string;
  question: string;
  answer: string;
}

const Faqs = ({ faqItems }: { faqItems: faqItemsProps[] }) => {
  return (
    <section className="pb-8 md:py-8 lg:p-8 w-full lg:max-w-[700px]">
      <h2 className="font-tommy text-white text-4xl uppercase">
        Frequently Asked <br /> <span className="font-bold">Questions</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue={faqItems[0].value}
        className="w-full space-y-4 pt-4"
      >
        {faqItems.map((faq) => (
          <div key={faq.value}>
            <AccordionItem value={faq.value} className="px-4 border-none">
              <AccordionTrigger className="text-lg text-left font-bold text-white hover:text-custom-emerald">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-100 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            <Separator className="bg-custom-emerald h-[1.5px]" />
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default Faqs;
