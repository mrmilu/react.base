import Styled from "@/src/ui/components/switch/switch.styled";
import type { ChangeEventHandler, FocusEventHandler, KeyboardEvent, RefObject } from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import { useController } from "react-hook-form";

interface SwitchProps {
  label?: string;
  id: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string;
  className?: string;
  defaultChecked?: boolean;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ value, label, onChange, onBlur, name, id, className, defaultChecked }, ref) => {
  const _ref = useRef<HTMLInputElement>(null);
  const innerRef = (ref ?? _ref) as RefObject<HTMLInputElement>;

  const handleKeypress = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      innerRef.current?.click();
    }
  };

  return (
    <Styled.Wrapper>
      {label && <p>{label}</p>}
      <Styled.Switch htmlFor={id} tabIndex={0} className={className} onKeyPress={handleKeypress}>
        <input ref={innerRef} id={id} name={name} type="checkbox" onChange={onChange} onBlur={onBlur} value={value} defaultChecked={defaultChecked} />
        <span />
      </Styled.Switch>
    </Styled.Wrapper>
  );
});

type ControlledSwitchProps = Omit<SwitchProps, "name" | "id" | "onChange"> & { name: string; id?: string };

export const ControlledSwitch = ({ id, name, ...props }: ControlledSwitchProps) => {
  const controller = useController({ name });
  return <Switch id={id ?? name} {...props} {...controller.field} />;
};
