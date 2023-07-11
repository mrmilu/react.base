import Styled from "@/src/ui/components/input/input.styled";
import type { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler } from "react";
import { forwardRef } from "react";
import { useController } from "react-hook-form";

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
  className?: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, label, onChange, onKeyPress, onFocus, onBlur, onKeyDown, placeholder, name, id, className, type, error }, ref) => {
    return (
      <Styled.Wrapper>
        <Styled.Input className={className} htmlFor={id}>
          {label && <span>{label}</span>}
          <input
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
        </Styled.Input>
        {error && (
          <Styled.Error>
            <p>{error}</p>
          </Styled.Error>
        )}
      </Styled.Wrapper>
    );
  }
);

type ControlledInputProps = Omit<InputProps, "name" | "id" | "onChange"> & { name: string; id?: string };

export const ControlledInput = ({ id, name, ...props }: ControlledInputProps) => {
  const controller = useController({ name });
  return <Input id={id ?? name} {...props} {...controller.field} error={controller.fieldState.error?.message} />;
};
