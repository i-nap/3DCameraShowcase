import { FocusCards } from "../ui/focus-card";

export function OptionCards() {
  const cards = [
    {
      title: "More than an upgrade",
      src: "/camera1.webp",
    },
    {
      title: "Perfect all around",
      src: "/camera2.jpg",
    },
   
  ];

  return <FocusCards cards={cards} />;
}
