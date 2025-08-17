import style from "./BurgerBtn.module.scss";
export default function BurgerBtn({ onClick, isOpen }) {
  function hundleOpen() {
    const newState = !isOpen;
    onClick(newState);
  }
  return (
    <>
      <button
        className={`${style["burger-btn"]} ${
          isOpen ? style["burger-btn--open"] : ""
        }`}
        onClick={hundleOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}
