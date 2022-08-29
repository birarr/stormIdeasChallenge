export enum Categories {
  Business = 'Business',
  Entertainment = 'Entertainment',
  General = 'General',
  Health = 'Health',
  Science = 'Science',
  Sports = 'Sports',
  Technology = 'Technology',
}

export interface Source {
  id: string
  name: string
}

export interface Article {
  title?: string
  urlToImage?: string
  source?: Source
  content?: string
  publishedAt?: Date
  author?: string
  url?: string
}
