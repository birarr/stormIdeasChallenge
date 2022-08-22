import { useEffect } from 'react'

const token = localStorage.getItem('token')
// const key = process.env.REACT_APP_CLIENT_KEY
const key2 = import.meta.env.VITE_CLIENT_KEY
console.log({ key2 })

export const fetchNews = async (
  subject: string,
  page: number,
  pageSize: number
) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${subject}&page=${page}&pageSize=${pageSize}&apiKey=11a5395719ac4af693c3d5e7630790d5`
  )
  const data = await response.json()
  return data
}
