import style from "./Welcome.module.scss";
export default function Welcome() {
  return (
    <section className={`${style["welcome"] || ""}`}>
      <h1 title="Welcome">
        <span>Your</span>
        <span>assistant</span>
        <span>for creating</span>
        <span>websites</span>
      </h1>
    </section>
  );
}
