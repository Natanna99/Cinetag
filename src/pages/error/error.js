import style from "./error.module.css";

export function Error() {
  return (
    <div className={style.containerError}>
      <h2>404!</h2>
      <p>O conteúdo que você procura não foi encontrado!</p>
    </div>
  );
}
