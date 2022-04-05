import type { FieldInputProps, FieldMetaProps } from "formik";

export interface BaseFormikProps<Val> {
  meta: FieldMetaProps<Val>;
  field: FieldInputProps<Val>;
}
