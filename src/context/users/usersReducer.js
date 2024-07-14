import React from "react";

export const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN/REGISTER":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "LOGOUT":
      return { isAuthenticated: false, user: null };

    default:
      break;
  }
};
