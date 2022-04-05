/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users_data {
  __typename: "User";
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface Users_users {
  __typename: "UsersPage";
  data: (Users_users_data | null)[] | null;
}

export interface Users {
  users: Users_users | null;
}
