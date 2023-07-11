import { ControlledInput } from "@/src/ui/components/input/input";
import { Button } from "@/src/ui/components/button/button";
import { useEffect, useMemo } from "react";
import Styled from "@/src/ui/features/home/views/home_page/home_page.styled";
import { BaseError } from "make-error";
import { useTranslation } from "react-i18next";
import { timeout } from "@front_web_mrmilu/utils";
import { useHomeProvider, useHomeProviderBis } from "@/src/ui/features/home/views/home_page/providers/home_provider";
import { object, string } from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  name: string;
  email: string;
  age: string;
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  age: ""
};

export default function HomePage() {
  const { t, i18n } = useTranslation("home");
  const validationSchema = useMemo(
    () =>
      object().shape({
        name: string().required(t("form.errors.required")),
        email: string().required(t("form.errors.required")).email(t("form.errors.email")),
        age: string().isNumber(t("form.errors.number")).required(t("form.errors.required")).isNotUnderAge(t("form.errors.underAge"))
      }),
    [t]
  );
  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema, { abortEarly: false }),
    reValidateMode: "onChange"
  });

  const handleSubmit = async (values: FormValues) => {
    await timeout(3000);
    alert(`name: ${values.name}, email: ${values.email}, age: ${values.age}`);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const age = form.watch("age");

  useEffect(() => {
    if (Number(age) > 40) {
      throw new BaseError("The user is too old xD");
    }
  }, [age]);

  return (
    <Styled.Wrapper>
      <h1>{t("homeTitle")}</h1>
      <Styled.Locale>
        <p>{t("helloWorld")}</p>
        <select aria-label="Languages" name="language" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </Styled.Locale>
      <FormProvider {...form}>
        <Styled.Form onSubmit={form.handleSubmit(handleSubmit)}>
          <ControlledInput name="name" label={t("form.fields.name.label")} placeholder={t("form.fields.name.placeholder")} />
          <ControlledInput name="email" label={t("form.fields.email.label")} placeholder={t("form.fields.email.placeholder")} />
          <ControlledInput name="age" type="number" label={t("form.fields.age.label")} placeholder={t("form.fields.age.placeholder")} />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {t("form.submit")}
          </Button>
        </Styled.Form>
      </FormProvider>
      <useHomeProviderBis.State>
        <CounterBis />
      </useHomeProviderBis.State>
      <useHomeProvider.State initialState={{ counter: 100 }}>
        <Counter />
      </useHomeProvider.State>
      <useHomeProvider.State builderProps={{ amount: "thirty" }}>
        <Counter />
      </useHomeProvider.State>
    </Styled.Wrapper>
  );
}

const CounterBis = () => {
  const counter = useHomeProviderBis((state) => state.counter);
  const add = useHomeProviderBis((state) => state.add);
  const subtract = useHomeProviderBis((state) => state.subtract);
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
};

const Counter = () => {
  const counter = useHomeProvider((state) => state.counter);
  const add = useHomeProvider((state) => state.add);
  const subtract = useHomeProvider((state) => state.subtract);
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
};
