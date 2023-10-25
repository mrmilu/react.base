import { ReactComponent as CheckIcon } from "@/src/ui/assets/icons/check.svg";
import { useController } from "react-hook-form";
import Styled from './checkbox_field.styled'

interface Props {
  id: string;
  name: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
}

export function CheckboxField({ id, name, value, label, onChange, error }: Props) {
  return (
    <Styled.Wrapper>
      <Styled.CheckboxWrapper>
        <Styled.Root checked={value} onCheckedChange={onChange} defaultChecked id={id} name={name}>
          <Styled.Indicator>
            <CheckIcon />
          </Styled.Indicator>
        </Styled.Root>
        <label htmlFor={id}>{label}</label>
      </Styled.CheckboxWrapper>
      {error && (
        <Styled.Error>
          {error}
        </Styled.Error>
      )}
    </Styled.Wrapper>
  );
}

interface ControlledProps extends Omit<Props, "value" | "id" | "onChange"> {
  id?: string;
}

export const ControlledCheckboxField = ({ id, name, ...props }: ControlledProps) => {
  const controller = useController({ name });
  return <CheckboxField id={id ?? name} {...props} {...controller.field} error={controller.fieldState.error?.message} />;
};
