import Drawer from "@/components/Drawer";
import SkillsTile from "@/components/SkillsTile";

import {
  AwsIcon,
  CsharpIcon,
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  ReactRouterIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
  NextJsIcon,
  ExpressIcon,
  FastApiIcon,
} from "@/icons";
import { NestJsIcon } from "@/icons/nestjs";

function Skills() {
  return (
    <div className="w-screen h-screen flex ">
      <Drawer />
      <div className="w-full flex justify-center items-center">
        <div className="w-[80vw] h-[90vh] grid grid-cols-2 grid-rows-2">
          <SkillsTile title="SKILLS" borderType="border-r  border-b">
            <>
              <JavaScriptIcon />
              <TypeScriptIcon />
              <HtmlIcon />
              <CssIcon />
              <PythonIcon />
              <CsharpIcon />
            </>
          </SkillsTile>
          <SkillsTile title="FRONTEND" borderType="border-l  border-b">
            <>
              <ReactIcon />
              <ReactRouterIcon />
              <ReduxIcon />
              <SassIcon />
              <TailwindIcon />
              <NextJsIcon />
            </>
          </SkillsTile>
          <SkillsTile title="SERVICES & TOOLS" borderType="border-r  border-t">
            <AwsIcon />
          </SkillsTile>
          <SkillsTile title="BACKEND" borderType="border-l  border-t">
            <>
              <NestJsIcon />
              <PrismaIcon />
              <ExpressIcon />
              <FastApiIcon />
            </>
          </SkillsTile>
        </div>
      </div>
    </div>
  );
}
export default Skills;
