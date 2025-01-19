"use client";

import { useCallback } from "react";
import { usePostCompany } from "./usePostCompany";

export const AddCompanyButton = () => {
  const { mutate, isPending } = usePostCompany();

  const handleClick = useCallback(() => {
    mutate(
      { name: "Everest" },
      {
        onSuccess: () => {
          window.alert("Company added!");
        },
      }
    );
  }, [mutate]);

  if (isPending) {
    return <button disabled>Loading...</button>;
  }

  return (
    <button type="button" onClick={handleClick}>
      Add Company named `Everest`
    </button>
  );
};
