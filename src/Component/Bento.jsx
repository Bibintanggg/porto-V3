import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
  } from "@radix-ui/react-icons";
  import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
  import OneIcon from "../assets/Icon/one.svg"
  
  const features = [
    {
      Icon: () => <img src={OneIcon} className="w-10"/>,
      name: "Website Competition With A Sleep Health Theme",
      description: "Organize by Sagasitas Foundation",
      href: "/",
      cta: "2023 | September",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 w-96 h-56",
    },
  ];
  
  export function BentoDemo() {
    return (
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  