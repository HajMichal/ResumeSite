import { type ReactElement } from "react";

interface TextSectionProps {
  title: string;
  description: string | ReactElement;
}
function TextSection({ title, description }: TextSectionProps) {
  return (
    <div className="mt-10 laptop:min-w-[500px]">
      <h2 className="text-2xl laptop:text-3xl">{title}:</h2>
      <div className="pl-5 text-lg">{description}</div>
    </div>
  );
}
export default TextSection;
