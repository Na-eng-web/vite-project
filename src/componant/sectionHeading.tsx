import style from "./style.module.css";

export const SectionHeading = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className={`main_wrapper ${style.heading_wrapper}`}>
      <span className={style.heading}>{heading}</span>
      <span className={style.subHeading}>{subHeading}</span>
    </div>
  );
};
