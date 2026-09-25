export async function getResources() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/resources`
  );

  return response.json();
}

export async function addResource() {
}