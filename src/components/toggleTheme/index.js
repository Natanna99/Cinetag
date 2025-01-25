import { useState } from "react";
import { Form } from "react-bootstrap";
import style from "./toggleTheme.module.css";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  const changetheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className =
      newTheme === "dark" ? "light-theme" : "";
  };

  return (
    <Form>
      <Form.Check
        className={style.toggleTheme}
        type="switch"
        variant="dark"
        checked={theme === "dark" ? false : true}
        label={theme === "dark" ? "Light" : "Dark"}
        onClick={() => changetheme()}
        id="disabled-custom-switch"
      />
    </Form>
  );
}
