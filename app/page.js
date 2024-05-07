import ItemsSection from "../components/Home/ItemsSection";
import Landing from "../components/Home/Landing";
import SectionTimer from "../components/Home/SectionTimer";
import Status from "../components/Home/Status";
import Line from "../components/layout/Line";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Landing />
      <Line text="All  ITEMS IN HIGHEST QUALITY 🤍" />
      <ItemsSection />
      <Line text="WE HAVE A BIG DESCOUNT COMMING SOON !" />
      <SectionTimer />
      <Line text="LOOK AT OUR ACHEVMENTS !" />
      <Status />
    </div>
  );
}
