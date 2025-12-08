import { useTranslation } from "react-i18next";
import css from "./ErrorFallback.module.css";
import ErrorIcon from "~/assets/icon-error.svg";
import RetryIcon from "~/assets/icon-retry.svg";
import Button from "../Button";

export default function ErrorFallback() {
  const { t } = useTranslation("", { keyPrefix: "error" });
  return (
    <div className={css.ErrorFallback}>
      <img className={css.errorIcon} src={ErrorIcon} alt='error icon' />

      <h2>{t("warning")}</h2>
      <p>{t("description")}</p>
      <Button leftIcon={RetryIcon} variant='retry'>
        {t("retry")}
      </Button>
    </div>
  );
}
