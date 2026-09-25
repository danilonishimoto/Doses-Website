export async function getResources() {
  const response = await fetch("http://localhost:3000/resources");
  return response.json()
}

export async function addResource() {
}