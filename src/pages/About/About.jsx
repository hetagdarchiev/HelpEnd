import DonateImg from "../../assets/img/donateQr.png";
import classes from "./About.module.scss";
export default function FuncName(params) {
  return (
    <section className={`${classes.about || "about"} container`}>
      <div>
        &emsp; This web resource was created not for the purpose of making
        financial profit, but to meet the specific needs of the professional
        programming community. To a certain extent, this website also serves as
        a digital portfolio of the developer who created it, which allows you to
        demonstrate his professional competencies and experience in the field of
        web development.
      </div>
      <div>
        <span>
          &emsp; If you have any ideas on how to update this site, you can send
          a message to telegram.
        </span>
        <a
          href="https://t.me/IIddeeaas"
          className={`button`}
          target="_blank"
          style={{
            display: "inline-block",
            width: "fit-content",
            marginLeft: "10px",
          }}
        >
          Go to the telegram channel
        </a>
      </div>
      <div className={`${classes.donate || "donate__container"}`}>
        <p>
          &emsp; Nevertheless, despite the above, if you have an urgent desire
          to provide financial support to this project, you have the opportunity
          to make a donation through the Donation Alerts platform.
        </p>
        <a
          href="https://www.donationalerts.com/r/khetg "
          className={`${classes.donate__link || ""} button`}
          target="_blank"
          title="Donate"
        >
          <img src={DonateImg} width={""} loading={"lazy"} />
        </a>
      </div>
    </section>
  );
}
