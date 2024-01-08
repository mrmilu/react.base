import type { ChangeEventHandler, FocusEventHandler, KeyboardEvent, RefObject } from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import { useController } from "react-hook-form";
import css from "./switch.css";

interface SwitchProps {
  label?: string;
  id: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string;
  defaultChecked?: boolean;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ value, label, onChange, onBlur, name, id, defaultChecked }, ref) => {
  const _ref = useRef<HTMLInputElement>(null);
  const innerRef = (ref ?? _ref) as RefObject<HTMLInputElement>;

  const handleKeypress = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      innerRef.current?.click();
    }
  };

  return (
    <div className={css.wrapper}>
      {label && <p>{label}</p>}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-noninteractive-tabindex */}
      <label className={css.label} htmlFor={id} tabIndex={0} onKeyPress={handleKeypress}>
        <input
          className={css.input}
          ref={innerRef}
          id={id}
          name={name}
          type="checkbox"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          defaultChecked={defaultChecked}
        />
        <span className={css.span} />
      </label>
    </div>
  );
});

type ControlledSwitchProps = Omit<SwitchProps, "name" | "id" | "onChange"> & { name: string; id?: string };

export const ControlledSwitch = ({ id, name, ...props }: ControlledSwitchProps) => {
  const controller = useController({ name });
  return <Switch id={id ?? name} {...props} {...controller.field} />;
};
