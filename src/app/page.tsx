import Image from "next/image";
import Banner from "./Project/Banner";
import Section1 from "./Project/First-Section";
import Section2 from "./Project/Second-Second";
import Section3 from "./Project/Third-Section";
import Section4 from "./Project/Fourth-Section";
import Section5 from "./Project/Fifth-Section";
import Section6 from "./Project/Sixth-Section";
import Section7 from "./Project/Seven-Section";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </div>
  )
}
