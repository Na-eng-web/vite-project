import style from "./style.module.css";

export const TopImage = ({ Image }: { Image: string }) => {
  return (
    <div>
      <img className={style.landing_Image} src={Image} />
    </div>
  );
};
