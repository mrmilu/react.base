import type { FieldInputProps, FieldMetaProps, FormikHandlers } from "formik";
import { useField } from "formik";
import type { BaseFormikProps } from "../../view_models/formik";
import Styled from "@/src/ui/components/input/input.styled";
import type { FocusEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler } from "react";

interface InputProps {
  label?: string;
  id: string;
  name?: string;
  onChange?: FormikHandlers["handleChange"];
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FormikHandlers["handleBlur"];
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  formik?: BaseFormikProps<string | undefined>;
  value?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = ({
  value,
  label,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  onKeyDown,
  placeholder,
  formik,
  name,
  id,
  className,
  type
}: InputProps) => {
  let field: FieldInputProps<string | undefined>;
  let meta: FieldMetaProps<string | undefined>;
  if (formik) {
    field = formik.field;
    meta = formik.meta;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const emptyHandler = () => {};
    field = {
      onBlur: onBlur || emptyHandler,
      value: value,
      onChange: onChange || emptyHandler,
      name: name || ""
    };
    meta = { initialTouched: false, initialValue: undefined, value: undefined, touched: false };
  }

  return (
    <Styled.Wrapper>
      <Styled.Input className={className} htmlFor={id}>
        {label && <span>{label}</span>}
        <input type={type} id={id} placeholder={placeholder} onFocus={onFocus} onKeyDown={onKeyDown} onKeyPress={onKeyPress} {...field} />
      </Styled.Input>
      {meta.error && meta.touched && (
        <Styled.Error>
          <p>{meta.error}</p>
        </Styled.Error>
      )}
    </Styled.Wrapper>
  );
};

type InputFormikProps = Omit<InputProps, "formik" | "name" | "id"> & { name: string; id?: string };

export const InputFormik = ({ id, label, name, onChange, placeholder, className, type }: InputFormikProps) => {
  const [field, meta] = useField({ name, type });
  if (onChange) field.onChange = onChange;
  return <Input id={id ?? name} formik={{ field, meta }} label={label} placeholder={placeholder} className={className} />;
};
