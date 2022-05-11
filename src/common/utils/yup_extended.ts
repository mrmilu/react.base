import { yup } from "@front_web_mrmilu/utils";
import type { AnyObject, Maybe } from "yup/lib/types";

// Here declare yup extend methods for each schema type

yup.addMethod<yup.StringSchema>(yup.string, "isNotUnderAge", function (message?: string) {
  return this.test("isNotUnderAge", message ?? "", (value?: string) => (value ? Number(value) > 18 : false));
});

yup.addMethod<yup.NumberSchema>(yup.number, "isNotUnderAge", function (message?: string) {
  return this.test("isNotUnderAge", message ?? "", (value?: number) => (value ? value >= 18 : true));
});

declare module "yup" {
  interface StringSchema<TType extends Maybe<string> = string | undefined, TContext extends AnyObject = AnyObject, TOut extends TType = TType>
    extends yup.BaseSchema<TType, TContext, TOut> {
    isNotUnderAge(message?: string): StringSchema<TType, TContext>;
  }

  interface NumberSchema<TType extends Maybe<number> = number | undefined, TContext extends AnyObject = AnyObject, TOut extends TType = TType>
    extends yup.BaseSchema<TType, TContext, TOut> {
    isNotUnderAge(message?: string): NumberSchema<TType, TContext>;
  }
}

export default yup;
