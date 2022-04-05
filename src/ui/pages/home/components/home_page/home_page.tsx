import { FormikProvider, useFormik } from "formik";
import { InputFormik } from "@/src/ui/components/input/input";
import { Button } from "@/src/ui/components/button/button";
import { useEffect, useMemo, useState } from "react";
import { HomeFormStyled, HomePageLocaleStyled, HomePageStyled } from "@/src/ui/pages/home/components/home_page/home_page.styled";
import yup from "@/src/common/utils/yup_extended";
import { timeout } from "@/src/common/utils/promise";
import { BaseError } from "make-error";
import { useTranslation } from "react-i18next";

interface FormValues {
  name: string;
  email: string;
  age: string;
}

const formValues: FormValues = {
  name: "",
  email: "",
  age: ""
};

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [firstSubmit, setFirstSubmit] = useState(false);
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(t("form.errors.required")),
        email: yup.string().required(t("form.errors.required")).email(t("form.errors.email")),
        age: yup
          .number()
          .typeError(t("form.errors.number") ?? "")
          .required(t("form.errors.required"))
          .isNotUnderAge(t("form.errors.underAge"))
      }),
    [t]
  );

  const formik = useFormik({
    initialValues: formValues,
    validationSchema,
    validateOnBlur: firstSubmit,
    validateOnChange: firstSubmit,
    onSubmit: async (values: FormValues) => {
      await timeout(3000);
      alert(`name: ${values.name}, email: ${values.email}, age: ${values.age}`);
    }
  });

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (Number(formik.values.age) > 40) {
      throw new BaseError("The user is too old xD");
    }
  }, [formik.values.age]);

  return (
    <HomePageStyled>
      <h1>{t("homeTitle")}</h1>
      <HomePageLocaleStyled>
        <p>{t("helloWorld")}</p>
        <select aria-label="Languages" name="language" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </HomePageLocaleStyled>
      <FormikProvider value={formik}>
        <HomeFormStyled>
          <InputFormik name="name" label={t("form.fields.name.label")} placeholder={t("form.fields.name.placeholder")} />
          <InputFormik name="email" label={t("form.fields.email.label")} placeholder={t("form.fields.email.placeholder")} />
          <InputFormik name="age" type="number" label={t("form.fields.age.label")} placeholder={t("form.fields.age.placeholder")} />
          <Button type="submit" disabled={formik.isSubmitting} onClick={() => setFirstSubmit(true)}>
            {t("form.submit")}
          </Button>
        </HomeFormStyled>
      </FormikProvider>
    </HomePageStyled>
  );
}
