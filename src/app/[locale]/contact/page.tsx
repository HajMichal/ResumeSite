import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { IconPhone, IconMailHeart, IconBrandGithub } from "@tabler/icons-react";

function Contact() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center w-full h-[90vh]">
        <div className="w-full h-[80vh] tablet:h-[60vh] bg-secondaryBackground flex flex-wrap justify-evenly items-center">
          <div className="absolute self-start mt-5">
            Kliknij w ikonę w celu skopiowania danych
          </div>
          <ContactSection
            Icon={IconPhone}
            mainText="537 886 057"
            subText="+48"
          />
          <ContactSection
            Icon={IconBrandGithub}
            mainText="HajMichal"
            subText="github"
          />
          <ContactSection
            Icon={IconMailHeart}
            mainText="michalhaj.kontakt"
            subText="@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
