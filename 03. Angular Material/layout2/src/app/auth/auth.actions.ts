import { createAction, props } from "@ngrx/store";

import { UserProfile } from "./Model/userProfile";

export const login = createAction(
  "[Login Form] login",
  props<{ userProfile: UserProfile }>()
);

export const logout = createAction(
  "[Top Menu] Logout",
);
