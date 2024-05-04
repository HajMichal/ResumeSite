import dynamic from "next/dynamic";
import { Befama } from "./projects";

interface AllProjectsProps {
  active: number;
}

//
// [TODO]:
//         add suspense to slider in project
//         fill json message files
//         translate to eng

const Chatapp = dynamic(() => import("./projects/Chatapp"));
const ElearningPlatform = dynamic(() => import("./projects/ElearningPlatform"));
const IdeaRem = dynamic(() => import("./projects/IdeaRem"));
const Revan = dynamic(() => import("./projects/Revan"));
const Selleo = dynamic(() => import("./projects/Selleo"));

function AllProjects({ active }: AllProjectsProps) {
  return (
    <div className="flex flex-wrap justify-evenly h-full w-full mt-20 p-5">
      {active === 0 && <Befama />}
      {active === 1 && <Chatapp />}
      {active === 2 && <Selleo />}
      {active === 3 && <IdeaRem />}
      {active === 4 && <Revan />}
      {active === 5 && <ElearningPlatform />}
    </div>
  );
}
export default AllProjects;
