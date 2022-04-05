/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput } from "./../../../../../../__generated__/globalTypes.d";

// ====================================================
// GraphQL mutation operation: CreateDummyPost
// ====================================================

export interface CreateDummyPost_createPost {
  __typename: "Post";
  id: string | null;
  title: string | null;
  body: string | null;
}

export interface CreateDummyPost {
  createPost: CreateDummyPost_createPost | null;
}

export interface CreateDummyPostVariables {
  input: CreatePostInput;
}
