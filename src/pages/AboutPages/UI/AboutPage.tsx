import { useTranslation } from "react-i18next";

export default function AboutPage() {

  const { t } = useTranslation("about");

  return (
    <div className="about">
      <h1 className="about-title">{t("title")}</h1>
      <p className="about-text">{t("p1")}</p>
      <p className="about-text">{t("p2")}</p>
      <p className="about-text">{t("p3")}</p>
    </div>
  );
}