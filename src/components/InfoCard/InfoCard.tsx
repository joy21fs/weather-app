import css from "./InfoCard.module.css";

interface Props {
  infoName: string;
  value?: string;
}

export default function InfoCard(props: Props) {
  const { infoName, value = " - " } = props;
  return (
    <div className={css.InfoCard}>
      <span className={css.infoName}>{infoName}</span>
      <span className={css.infoValue}>{value}</span>
    </div>
  );
}
