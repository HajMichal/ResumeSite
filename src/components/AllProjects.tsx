import {
  Befama,
  Chatapp,
  ElearningPlatform,
  IdeaRem,
  Revan,
  Selleo,
} from "./projects";

interface AllProjectsProps {
  active: number;
}

//
// [TODO]: dynamic imports each project
//         add suspense to slider in project
//         change icons
//         fill json message files

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
