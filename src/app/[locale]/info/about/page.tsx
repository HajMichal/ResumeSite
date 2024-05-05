import ImageWithDesc from "@/components/ImageWithDesc";

function About() {
  return (
    <div className="mb-32 flex flex-col items-center">
      <ImageWithDesc
        maxWidth="500"
        url="/myPhotos/team.png"
        description="firstText"
      />
      <ImageWithDesc
        maxWidth="500"
        photoOnRight
        url="/myPhotos/soccer.png"
        description="secondText"
      />

      <div className="w-[95%] h-60 my-20 bg-fixed bg-parallax bg-cover" />
      <ImageWithDesc
        maxWidth="500"
        url="/myPhotos/hobby.png"
        description="thirdText"
      />
      <ImageWithDesc
        photoOnRight
        maxWidth="500"
        url="/myPhotos/hobby2.png"
        description="fourthText"
      />
      <ImageWithDesc
        maxWidth="700"
        url="/landscape/project.png"
        description="fifthText"
      />
    </div>
  );
}
export default About;
