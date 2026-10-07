import {
  forwardRef,
  useState,
  type ComponentType,
  type FocusEvent,
  type Ref,
} from "react";
import type { FocusInjectedProps } from "../types";

type FocusCallbacks = {
  onFocusChange?: (focused: boolean) => void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
};

export function withFocusTracker<P extends object>(
  Wrapped: ComponentType<P & FocusInjectedProps>,
) {
  type OuterProps = P & FocusCallbacks;

  const Tracker = forwardRef<HTMLElement, OuterProps>((props, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const changeFocus = (focused: boolean, event: FocusEvent<HTMLElement>) => {
      setIsFocused(focused);
      props.onFocusChange?.(focused);
      if (focused) props.onFocus?.(event);
      else props.onBlur?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        changeFocus(false, event);
      }
    };

    return (
      <div
        className="focus-root"
        ref={ref as Ref<HTMLDivElement>}
        onFocus={(event) => changeFocus(true, event)}
        onBlur={handleBlur}
      >
        <Wrapped {...(props as P)} isFocused={isFocused} />
      </div>
    );
  });

  Tracker.displayName = `withFocusTracker(${Wrapped.displayName || Wrapped.name || "Component"})`;
  return Tracker;
}
