import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
  } from "@radix-ui/react-icons";
  import OneIcon from "../assets/Icon/one.svg"
  import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
  
  const features = [
    {
      Icon: {OneIcon},
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 w-96 h-96",
    },
  ];
  
  export function BentoDemo() {
    return (
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} Icon={feature.Icon} />
        ))}
      </BentoGrid>
    );
  }
  