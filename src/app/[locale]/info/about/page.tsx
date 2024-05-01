import ImageWithDesc from "@/components/ImageWithDesc";
import Navbar from "@/components/Navbar";

function About() {
  return (
    <div className="mb-32 flex flex-col items-center">
      <ImageWithDesc
        maxWidth="500"
        url="/myPhotos/team.png"
        description="
        Od dziecka jestem aktywnym sportowcem. W wieku 6 lat zacząłem grać w
        piłkę nożną i w związku z tym postanowiłem rozwijać swoją pasję w
        różnych klubach. Trwało to do 16 roku życia. Dzisiaj grałbym w
        topowych hiszpańskich, czy angielskich klubach, gdyby nie kontuzja w
        `94-tym... Oczywiście żartuje.
        "
      />
      <ImageWithDesc
        maxWidth="500"
        photoOnRight
        url="/myPhotos/soccer.png"
        description="
        Po zakończeniu gry w klubie postanowiłem chwycić za gwizdek i zostałem
        sędzią piłkarskim, którym byłem przez kolejne 2 lata. Następnie
        zacząłem regularnie chodzić na siłownię, gdzie zainteresował mnie
        trójbój. Jednak z obawy przed kontuzjami i innymi efektami ubocznymi
        podnoszenia postanowiłem zrezygnować z tej dyscypliny.
        "
      />

      <div className="w-[95%] h-60 my-20 bg-fixed bg-parallax bg-cover" />
      <ImageWithDesc
        maxWidth="500"
        url="/myPhotos/hobby.png"
        description="
        Pod koniec gimnazjum zainteresowałem się programowaniem. Wtedy
        postanowiłem rozwijać się właśnie w takim kierunku. Z biegiem czasu
        zdobywałem coraz to większą wiedzę w zakresie Python`a, HTML`a, CSS`a
        i JavaScript`u. W trakcie rozwijania moich skilli w JavaScript`cie
        odkryłem Reacta, który przypadł mi do gustu za sprawą JSX`a, hook`ów
        oraz czytleności napisanego kodu.
        "
      />
      <ImageWithDesc
        photoOnRight
        maxWidth="500"
        url="/myPhotos/hobby2.png"
        description="
        Po nabyciu odpwiedniej wiedzy, wraz z kolegą postanowiliśmy odwiedzać
        firmy, których strony internetowe były albo przestarzałe albo nawet nie
        istniały. Oferowaliśmy zrobienie takich stron praktycznie za darmo, w
        celu poszerzenia naszego portfolio. W ten właśnie sposób stworzyliśmy
        swoje pierwsze komercyjne projekty. 🏆 🏆
        "
      />
      <ImageWithDesc
        maxWidth="700"
        url="/landscape/project.png"
        description="
        Z czasem udało mi się poznajdywać coraz to lepsze, czy bardziej
        rozwinięte projekty do wykonania. Jednym z przykładów jest kalkulator do
        tworzenia wycen instalacjii odnawialnych źródeł energii. Więcej o tym
        projekcie opowiadam w zakładce /Portfolio.
        "
      />
    </div>
  );
}
export default About;
