const key2 = import.meta.env.VITE_CLIENT_KEY
console.log({ key2 })

export const fetchNews = async (
  subject: string,
  page: number,
  pageSize: number
) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${subject}&page=${page}&pageSize=${pageSize}&apiKey=${key2}`
  )
  const data = await response.json()
  return data
}
