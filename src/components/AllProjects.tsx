import dynamic from "next/dynamic";
import { Befama } from "./projects";
import Loading from "./Loading";

interface AllProjectsProps {
  active: number;
}

const Chatapp = dynamic(() => import("./projects/Chatapp"), {
  loading: () => <Loading />,
});
const ElearningPlatform = dynamic(
  () => import("./projects/ElearningPlatform"),
  {
    loading: () => <Loading />,
  }
);
const IdeaRem = dynamic(() => import("./projects/IdeaRem"), {
  loading: () => <Loading />,
});
const Revan = dynamic(() => import("./projects/Revan"), {
  loading: () => <Loading />,
});
const Selleo = dynamic(() => import("./projects/Selleo"), {
  loading: () => <Loading />,
});

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
