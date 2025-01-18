"use client";

export const PostCompanyButton = () => {
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8787/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "chch",
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to post company: ${response.status}`);
      }

      const data = await response.json();

      window.alert(`Company created: ${data.id} ${data.name}`);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      Post Company
    </button>
  );
};
