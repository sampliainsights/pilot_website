import type { ComponentType, SVGProps } from "react";
import {
  SolutionInnovation,
  SolutionSwitch,
  SolutionShop,
  SolutionSurvey,
} from "@/components/icons";

type Solution = {
  Graphic: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const SOLUTIONS: Solution[] = [
  {
    Graphic: SolutionInnovation,
    title: "The Innovation",
    description: "Get the fastest insights about what works and what doesn't",
  },
  {
    Graphic: SolutionSwitch,
    title: "The Switch",
    description: "Increase your distribution by helping retailers grow",
  },
  {
    Graphic: SolutionShop,
    title: "The Shop",
    description: "Access in detail all baskets in your category",
  },
  {
    Graphic: SolutionSurvey,
    title: "The Survey",
    description: "Connect shoppers opinions to real purchase behavior",
  },
];

export function SolutionsSection() {
  return (
    <section
      data-theme="light"
      className="flex flex-col items-center bg-algori-gray py-12 text-black xl:pt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-7 xl:px-0">
        {/* Part A — Solutions cards */}
        <p className="my-4 text-base font-sans md:text-xl xl:mb-10 xl:text-2xl">
          Most popular solutions
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map(({ Graphic, title, description }) => (
            <div key={title} className="flex flex-col">
              <div className="flex items-center justify-center bg-white py-14">
                <div className="h-[148px] w-[148px]">
                  <Graphic />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="font-heading text-2xl font-normal text-black">
                  {title}
                </h3>
                <p className="mt-3 text-base font-sans text-black/80">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part B — Final CTA */}
        <div className="mt-16 pt-16">
          <h2 className="font-heading text-4xl font-normal leading-tight text-black md:text-5xl">
            Know your consumers
            <br />
            better than everyone else
          </h2>
          <a
            href="#"
            className="mt-8 inline-block text-lg text-black underline underline-offset-4"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Part C — Footer */}
      <div className="mt-24 flex w-full flex-col items-center pt-24">
        <p className="text-base font-sans text-black">© 2026 All Rights Reserved</p>
      </div>
    </section>
  );
}
