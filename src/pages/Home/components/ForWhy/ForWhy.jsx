import style from "./ForWhy.module.scss";
export default function ForWhy() {
  return (
    <section className={`${style["for-who"] || ""}`}>
      <h2 className={`${style["for-who__title"] || ""}`}>For why?</h2>
      <div className={`${style["for-who__wrapper"] || ""} container`}>
        <ul className={`${style["for-who__list"] || ""}`}>
          <li className={`${style["for-who__item"] || ""}`}>for convenience</li>
          <li className={`${style["for-who__item"] || ""}`}>for efficiency</li>
          <li className={`${style["for-who__item"] || ""}`}>to save time</li>
          <li className={`${style["for-who__item"] || ""}`}>
            to facilitate development
          </li>
        </ul>
      </div>
    </section>
  );
}
