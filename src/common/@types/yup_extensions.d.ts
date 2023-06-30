import type { AnyObject, Flags, Maybe, Schema } from "yup";

// Here declare yup extend methods declarations
declare module "yup" {
  interface StringSchema<TType extends Maybe<string> = string | undefined, TContext = AnyObject, TDefault = undefined, TFlags extends Flags = "">
    extends Schema<TType, TContext, TDefault, TFlags> {
    isNotUnderAge(message?: string): this;
  }

  interface NumberSchema<TType extends Maybe<number> = number | undefined, TContext = AnyObject, TDefault = undefined, TFlags extends Flags = "">
    extends Schema<TType, TContext, TDefault, TFlags> {
    isNotUnderAge(message?: string): this;
  }
}
