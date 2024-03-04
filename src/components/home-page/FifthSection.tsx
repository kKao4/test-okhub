import ContainedButton from "../button/ContainedButton";
import ContentContainer from "../container/ContentContainer";
import RootContainer from "../container/RootContainer";
import Heading1 from "../typography/heading/Heading1";
import Heading3 from "../typography/heading/Heading3";
import Heading4 from "../typography/heading/Heading4";
import Paragraph from "../typography/paragraph/Paragraph";
import Accordion from "../accordion/Accordion";
import AccordionContainer from "../accordion/AccordionContainer";
import { useState } from "react";
import BorderBottomButton from "../fifth-section/BorderBottomButton";
import { cn } from "../../utils/cn";

interface IAccordion {
  title: string,
  content: string
}

const natureAccordion: IAccordion[] = [
  {
    title: "What is included or excluded?",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    title: "How do I book and confirm my trip?",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    title: "What should I bring?",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    title: "Travel insurance",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
]

const journeyAccordion: IAccordion[] = [
  {
    title: "Cancellation",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    title: "How much luggage can I take?",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    title: "Can I drive my own?",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
  {
    title: "Where I meet the trip?",
    content: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mutations and was all hassle free. Our guide was absolutely amazing too. Have re-booked."
  },
]

export default function FifthSection() {
  const [activeTab, setActiveTab] = useState<"nature" | "journey">("nature")

  return (
    <>
      <RootContainer className="mb-28 lg:mb-20">
        <div className="flex-col gap-24 lg:flex lg:flex-row">
          {/* ---- first col ---- */}
          <div className="lg:basis-1/3">
            {/* ---- slogan ---- */}
            <ContentContainer>
              <Heading4>Faq About</Heading4>
              <Heading1 className="text-root-orange">The Trip</Heading1>
            </ContentContainer>

            {/* ---- book now btn ---- */}
            <div className="hidden lg:block">
              <ContainedButton size="md" fancyBackground className="w-fit">
                <span className="uppercase">Book Now</span>
              </ContainedButton>
            </div>
          </div>

          {/* ---- mobile ver tab ---- */}
          <div className="block lg:hidden">
            <ContentContainer>
              <div className="flex flex-row gap-3">
                <BorderBottomButton active={activeTab === "nature"} onClick={() => setActiveTab("nature")}>
                  Nature
                </BorderBottomButton>
                <BorderBottomButton active={activeTab === "journey"} onClick={() => setActiveTab("journey")}>
                  Journey
                </BorderBottomButton>
              </div>
            </ContentContainer>
          </div>

          {/* ---- nature col ---- */}
          <div className={cn("lg:mr-4 lg:-ml-8 lg:basis-1/3 hidden lg:block", { "block": activeTab === "nature" })}>
            {/* ---- desktop ver tab ---- */}
            <div className="hidden lg:block">
              <ContentContainer marginBottom="sm">
                <Heading3 className="font-bold text-root-orange">Nature</Heading3>
              </ContentContainer>
            </div>
            <ContentContainer>
              <Paragraph className="w-[325px] text-start">
                Browse our full service agency services and prices or contact us for custom quotes.
              </Paragraph>
            </ContentContainer>

            {/* ---- accordion ---- */}
            <AccordionContainer>
              {natureAccordion.map(item => {
                return (
                  <Accordion {...item} />
                )
              })}
            </AccordionContainer>
          </div>

          {/* ---- journey col ---- */}
          <div className={cn("lg:-ml-8 lg:basis-1/3 hidden lg:block", { "block": activeTab === "journey" })}>
            {/* ---- desktop ver tab ---- */}
            <div className="hidden lg:block">
              <ContentContainer marginBottom="sm">
                <Heading3 className="font-bold">JOURNEY</Heading3>
              </ContentContainer>
            </div>
            <ContentContainer>
              <Paragraph className="w-[325px] text-start">
                Find inspiration and discover amazing knowledge for successful site building.
              </Paragraph>
            </ContentContainer>

            {/* ---- accordion ---- */}
            <AccordionContainer>
              {journeyAccordion.map(item => {
                return (
                  <Accordion {...item} />
                )
              })}
            </AccordionContainer>
          </div>
        </div>
      </RootContainer >
    </>
  )
}