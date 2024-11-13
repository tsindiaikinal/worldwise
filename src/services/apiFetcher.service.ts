
export async function apiFetcher(url: string, params = {}) {
  try {
    const response = await fetch(url, params);

    const data = await response.json();

    return data;

  } catch (err) {
    const error = err as Error;

    throw new Error(error?.message);
  }
}
