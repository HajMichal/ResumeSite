"use client";
import InfoCard from "@/components/InfoCard";
import { IconFileCv } from "@tabler/icons-react";

// --TODO: add some animation when user hover a card,
// -- maybe some description or something like this
function Documents() {
  return (
    <div className="flex justify-center items-center w-full h-[90vh]">
      <div className=" h-[50vh] tablet:h-[60vh] w-[75vw] bg-secondaryBackground flex flex-wrap justify-evenly items-center">
        <InfoCard
          Icon={IconFileCv}
          mainText="CV - Polski"
          subText="pobierz"
          fileToDownload="/MichałHaj-CV-PL.pdf"
        />
        <InfoCard
          Icon={IconFileCv}
          mainText="CV - Angielski"
          subText="pobierz"
          fileToDownload="/MichałHaj-CV-EN.pdf"
        />
      </div>
    </div>
  );
}
export default Documents;
