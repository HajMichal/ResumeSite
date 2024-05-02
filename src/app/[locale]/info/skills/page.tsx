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
  NodeJsIcon,
  TrpcIcon,
  PostmanIcon,
  GitIcon,
  GithubIcon,
} from "@/icons";
import { NestJsIcon } from "@/icons/nestjs";

function Skills() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-full h-full tablet:w-[80vw] tablet:h-[90vh] grid grid-rows-4 tablet:grid-cols-2 tablet:grid-rows-2">
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
          <>
            <AwsIcon />
            <PostmanIcon />
            <GitIcon />
            <GithubIcon />
          </>
        </SkillsTile>
        <SkillsTile title="BACKEND" borderType="border-l  border-t">
          <>
            <NestJsIcon />
            <PrismaIcon />
            <ExpressIcon />
            <NodeJsIcon />
            <FastApiIcon />
            <TrpcIcon />
          </>
        </SkillsTile>
      </div>
    </div>
  );
}
export default Skills;
