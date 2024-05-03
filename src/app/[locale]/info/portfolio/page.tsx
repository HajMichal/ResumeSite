"use client";
import TimeLineComponent from "@/components/Timeline";
import { useState } from "react";
import AllProjects from "@/components/AllProjects";

function Portfolio() {
  const [active, setActive] = useState(0);
  return (
    <div className="tablet:flex px-3 ">
      <TimeLineComponent active={active} setActive={setActive} />
      <AllProjects active={active} />
    </div>
  );
}
export default Portfolio;
