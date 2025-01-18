"use client";

import { ResponseData } from "@/types";

export const PostCompanyButton = () => {
  const handleClick = async () => {
    const response = await fetch("http://localhost:8787/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "foo",
      }),
    });
    const data: ResponseData = await response.json();

    window.alert(data.message);
  };

  return (
    <button type="button" onClick={handleClick}>
      Post Company
    </button>
  );
};
