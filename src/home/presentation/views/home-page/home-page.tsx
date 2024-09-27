import { useHomeProvider, useHomeProviderBis } from "@/src/home/presentation/providers/home-provider";
import { BaseError } from "@/src/shared/domain/models/base-error";
import { Button } from "@/src/shared/presentation/components/button/button";
import { ControlledInput } from "@/src/shared/presentation/components/input/input";
import { timeout } from "@front_web_mrmilu/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";
import css from "./home-page.css";

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
    <div className={css.wrapper}>
      <h1>{t("homeTitle")}</h1>
      <div className={css.locale}>
        <p>{t("helloWorld")}</p>
        <select aria-label="Languages" name="language" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
      <FormProvider {...form}>
        <form className={css.form} onSubmit={form.handleSubmit(handleSubmit)}>
          <ControlledInput name="name" label={t("form.fields.name.label")} placeholder={t("form.fields.name.placeholder")} />
          <ControlledInput name="email" label={t("form.fields.email.label")} placeholder={t("form.fields.email.placeholder")} />
          <ControlledInput name="age" type="number" label={t("form.fields.age.label")} placeholder={t("form.fields.age.placeholder")} />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {t("form.submit")}
          </Button>
        </form>
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
    </div>
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
