import type { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler } from "react";
import { forwardRef } from "react";
import { useController } from "react-hook-form";
import css from "./input.css";

interface InputProps {
  label?: string;
  id: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, label, onChange, onKeyPress, onFocus, onBlur, onKeyDown, placeholder, name, id, type, error }, ref) => {
    return (
      <div className={css.wrapper}>
        <label className={css.label} htmlFor={id}>
          {label && <span className={css.span}>{label}</span>}
          <input
            className={css.input}
            type={type}
            id={id}
            placeholder={placeholder}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            value={value}
            ref={ref}
          />
        </label>
        {error && (
          <div className={css.error}>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
);

type ControlledInputProps = Omit<InputProps, "name" | "id" | "onChange"> & { name: string; id?: string };

export const ControlledInput = ({ id, name, ...props }: ControlledInputProps) => {
  const controller = useController({ name });
  return <Input id={id ?? name} {...props} {...controller.field} error={controller.fieldState.error?.message} />;
};
