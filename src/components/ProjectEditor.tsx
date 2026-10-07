import type { ChangeEvent } from "react";
import type { FocusInjectedProps } from "../types";

type Props = FocusInjectedProps & {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function ProjectEditor({ value, onChange, isFocused }: Props) {
  return (
    <section className={`editor ${isFocused ? "focused" : ""}`}>
      <span className="status">
        {isFocused ? "Фокус внутри компонента" : "Компонент не в фокусе"}
      </span>
      <label>
        Название проекта
        <input
          aria-label="Название проекта"
          value={value}
          onChange={onChange}
        />
      </label>
      <button type="button">Сохранить</button>
    </section>
  );
}
