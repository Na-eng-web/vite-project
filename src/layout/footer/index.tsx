import { FooterData } from "../../profile";
import style from "./style.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.main_container}>
        <div className={style.section}>
          <div className={style.aboutusSection}>
            <h1>LOGO</h1>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              hic. Maxime, esse! Incidunt temporibus aspernatur error accusamus,
              voluptatem facilis repellat tempora beatae, odit aperiam itaque at
              nostrum magni vero nulla?
            </h4>
            <div className={style.socialMediaIcon}>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
            </div>
          </div>
          {FooterData.map((data) => {
            return (
              <div className={style.subSection}>
                <h1>{data.heading}</h1>
                <div>
                  {data.points.map((point) => (
                    <p>{point}</p>
                  ))}
                </div>
              </div>
            );
          })}
          <div className={style.Contactus}>
            <h1>LOGO</h1>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              hic. Maxime, esse! Incidunt temporibus aspernatur error accusamus,
              voluptatem facilis repellat tempora beatae, odit aperiam itaque at
              nostrum magni vero nulla?
            </h4>
            <div className={style.contact}>
              <div>
                <p>a</p>
                <p>abc@gmai.com</p>
              </div>
              <div>
                <p>b</p>
                <p>7705656985</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
