import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/theme.css";

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      🌐 {t("language")}: {i18n.language.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
