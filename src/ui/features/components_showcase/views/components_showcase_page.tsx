import { Button } from "@/src/ui/components/button/button";
import { ControlledCheckboxField } from "@/src/ui/components/fields/checkbox_field/checkbox_field";
import BasePageStyled from "@/src/ui/features/misc/components/base_page.styled";
import { FormProvider, useForm } from "react-hook-form";
import Styled from "./components_showcase_page.styled";
interface FormValues {
  checkboxValue: boolean;
}
const defaultValues: FormValues = {
  checkboxValue: false
};

export default function ComponentsShowcasePage() {
  const form = useForm({
    defaultValues,
    reValidateMode: "onChange"
  });
  return (
    <BasePageStyled.Wrapper data-cy="users-page">
      <h2>Components showcase</h2>
      <p>These components are frequent in many apps. This page shows how to implement them and which libraries to use for each of them.</p>
      <FormProvider {...form}>
        <Styled.Form onSubmit={form.handleSubmit(() => alert("Submitted"))}>
          <ControlledCheckboxField name="checkboxValue" label="Checkbox field" />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </Styled.Form>
      </FormProvider>
    </BasePageStyled.Wrapper>
  );
}
