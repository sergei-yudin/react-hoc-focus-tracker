type Props = {
  isFocused: boolean;
};

export function FocusHeader({ isFocused }: Props) {
  return (
    <header>
      <span>Higher-order component</span>
      <h1>Focus Tracker</h1>
      <p>
        Состояние: <b>{isFocused ? "focus" : "blur"}</b>
      </p>
    </header>
  );
}
