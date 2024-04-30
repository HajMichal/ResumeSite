import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Home.Header");
  return (
    <div className="mt-20 mb-10 max-w-[500px]">
      <p className="text-5xl font-jersey tracking-wider text-right">
        {t("title")}
      </p>
      <p className="text-xl text-right">
        {t("iam")}
        <span className="text-brand">Michał Haj,</span>
        <br /> {t("description")}
      </p>
    </div>
  );
}
export default Header;
