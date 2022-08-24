import { fetchNews } from '../../services/requests'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useCallback, useEffect, useState } from 'react'
import { NewsProps } from './index.types'
import { Categories, Article } from '../../utils/Types'
import * as styles from './index.styles'
import { Divider } from '../Divider'
import { ClipLoader } from 'react-spinners'

export const News: React.FC<NewsProps> = ({ category, search }) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(11)
  const [news, setNews] = useState<Article[]>([])
  const [subject, setSubject] = useState('Top story')
  var options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  console.log({ category })
  console.log({ subject })
  console.log({ search })
  console.log({ page })

  const {
    isIdle,
    data: newsData,
    status: newsStatus,
    // fetchNextPage,
    // hasNextPage,
    refetch,
  } = useQuery(
    ['news', subject, page],
    () => fetchNews(subject, page, pageSize),
    {
      // getNextPageParam: () => true,
      // enabled: page !== 1,
    }
  )
  console.log(subject === category)

  useEffect(() => {
    if (category) {
      console.log('testtteeeeeeeeee')
      setPage(1)
      setNews([])
    }
    setSubject(category!)
  }, [category])

  useEffect(() => {
    if (search !== '') {
      setPage(1)
      setNews([])
      setSubject(search!)
    }
  }, [search])

  const sortedNews = newsData?.articles?.sort((a: Article, b: Article) => {
    const date1 = new Date(b?.publishedAt!)
    const date2 = new Date(a?.publishedAt!)
    return date1.getTime()! - date2.getTime()!
  })

  useEffect(() => {
    if (sortedNews?.length > 0 && page) {
      setNews([...news, ...sortedNews])
      return
    }
  }, [sortedNews, page])
  console.log({ news })
  return (
    <>
      <div className={styles.container}>
        <div className="w-11/12 flex justify-center">
          {news?.map((item: Article, index: number) => {
            if (index === 0) {
              return (
                <div className={styles.featuredNews} key={index}>
                  <div className={styles.newsType}>Breaking news</div>
                  <a href={item?.url!} target="_blank">
                    <div>
                      <img src={item?.urlToImage} alt="news" />
                    </div>
                    <div className={styles.source}>{item?.source?.name}</div>
                    <h1 className="text-textTitle">{item?.title}</h1>
                    <div className={styles.newsContent}>{item?.content}</div>
                    <div className={styles.newsDate}>
                      {new Date(item?.publishedAt!).toLocaleDateString(
                        'en-US',
                        options
                      )}
                    </div>
                  </a>
                </div>
              )
            }
            return null
          })}
        </div>
        <div className="min-w-[50%] mt-72 max-w-xl md:w-full lg:w-full xl:w-11/12 sm:w-9/12">
          {news?.map((item: Article, index: number) => {
            if (index !== 0) {
              return (
                <div key={index}>
                  <div className="w-full" key={index}>
                    <Divider />
                  </div>
                  <a href={item?.url!} target="_blank">
                    <div className="flex justify-center">
                      <div
                        className={
                          index % 2 === 0
                            ? styles.regularNews
                            : styles.regularNewsReverse
                        }
                      >
                        <div className={styles.regularNewsImage}>
                          <img
                            src={item?.urlToImage}
                            alt="news"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="basis-1/2 w-full">
                          <div>
                            <div className={styles.source}>
                              {item?.source?.name}
                            </div>
                            <div className={styles.regularNewsTitle}>
                              {item?.title}
                            </div>
                            <div className="flex gap-1 ml-2">
                              <div className={styles.author}>
                                {item?.author}
                              </div>
                              <div className={styles.newsDate}>
                                {new Date(
                                  item?.publishedAt!
                                ).toLocaleDateString('en-US', options)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Divider />
                      </div>
                    </div>
                  </a>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="min-w-[50%] max-w-xl">
          <Divider />
        </div>
      </div>
      <div className={styles.loadMoreButtonContainer}>
        {newsStatus === 'loading' && <ClipLoader />}
        <div>
          <button
            className={styles.loadMoreButton}
            onClick={() => setPage((prevState) => prevState + 1)}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  )
}
