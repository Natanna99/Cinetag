import style from "./input.module.css";

export function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style.inputSearch}
    />
  );
}
