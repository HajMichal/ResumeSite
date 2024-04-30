import { ReactElement } from "react";

interface SkillsTileProps {
  title: string;
  borderType: string;
  children: ReactElement;
}

function SkillsTile({ title, borderType, children }: SkillsTileProps) {
  return (
    <div className={`w-full border-brand ${borderType}`}>
      <h1 className="text-center text-5xl mb-4 font-jersey">{title}</h1>
      <div className="flex flex-wrap gap-5 justify-center p-5">{children}</div>
    </div>
  );
}
export default SkillsTile;
