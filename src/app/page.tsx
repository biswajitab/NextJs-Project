import Image from "next/image";

import Test from "./textproject/test";
import Card from "./textproject/card";

export default function Home() {
  return (
    <div className="bg-white">
      
      <Test/>
      <Card/>
    </div>
  )
}
