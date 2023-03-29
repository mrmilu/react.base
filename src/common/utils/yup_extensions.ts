import { loadYupExtensions } from "@front_web_mrmilu/utils";
import type { NumberSchema, StringSchema } from "yup";
import { addMethod, number, string } from "yup";

// Here declare yup extend methods
addMethod<StringSchema>(string, "isNotUnderAge", function (message?: string) {
  return this.test("isNotUnderAge", message ?? "", (value?: string) => (value ? Number(value) > 18 : false));
});

addMethod<NumberSchema>(number, "isNotUnderAge", function (message?: string) {
  return this.test("isNotUnderAge", message ?? "", (value?: number) => (value ? value >= 18 : true));
});

loadYupExtensions();
