import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Home.Header");
  return (
    <div className="w-[80%] mt-20 laptop:max-w-[30vw] laptop:mt-72 laptop:ml-[10%]">
      <p className="text-5xl font-jersey tracking-wider">{t("title")}</p>
      <p className="text-xl">
        {t("iam")}
        <span className="text-brand">Michał Haj,</span>
        <br /> {t("description")}
      </p>
    </div>
  );
}
export default Header;
