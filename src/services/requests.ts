const key2 = import.meta.env.VITE_CLIENT_KEY
console.log({ key2 })

export const fetchNews = async (
  subject: string,
  page: number,
  pageSize: number
) => {
  const response = await fetch(``)
  const data = await response.json()
  return data
}
