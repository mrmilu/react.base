import Styled from "@/src/ui/components/switch/switch.styled";
import type { FieldInputProps, FormikHandlers } from "formik";
import { useField } from "formik";
import type { KeyboardEvent } from "react";
import { useRef } from "react";
import type { BaseFormikProps } from "@/src/ui/view_models/formik";

interface SwitchProps {
  label?: string;
  id: string;
  name?: string;
  onChange?: FormikHandlers["handleChange"];
  formik?: BaseFormikProps<string | undefined>;
  value?: string;
  defaultChecked?: boolean;
  className?: string;
}

export const Switch = ({ value, label, onChange, formik, name, id, defaultChecked, className }: SwitchProps) => {
  const innerRef = useRef<HTMLInputElement>(null);
  let field: FieldInputProps<string | undefined>;
  if (formik) {
    field = formik.field;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const emptyHandler = () => {};
    field = {
      onBlur: emptyHandler,
      value: value || undefined,
      onChange: onChange || emptyHandler,
      checked: defaultChecked,
      name: name || ""
    };
  }

  const handleKeypress = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      innerRef.current?.click();
    }
  };

  return (
    <Styled.Wrapper>
      {label && <p>{label}</p>}
      <Styled.Switch htmlFor={id} tabIndex={0} className={className} onKeyPress={handleKeypress}>
        <input
          ref={innerRef}
          id={id}
          name={field.name}
          type="checkbox"
          onChange={field.onChange}
          value={field.value}
          defaultChecked={field.checked}
        />
        <span />
      </Styled.Switch>
    </Styled.Wrapper>
  );
};

type SwitchFormikProps = Omit<SwitchProps, "formik" | "name" | "id"> & { name: string; id?: string };

export const SwitchFormik = ({ id, label, name, value, onChange, className, defaultChecked }: SwitchFormikProps) => {
  const [field, meta] = useField({ name, value, defaultChecked, type: "checkbox" });
  if (onChange) field.onChange = onChange;
  return <Switch id={id ?? name} formik={{ field, meta }} label={label} className={className} />;
};
