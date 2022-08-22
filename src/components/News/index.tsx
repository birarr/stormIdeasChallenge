import { fetchNews } from '../../services/requests'
import { useQuery, useInfiniteQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { NewsProps } from './index.types'
import { Subjects, Article } from '../../utils/Types'
import * as styles from './index.styles'
import { Divider } from '../Divider'
import { ClipLoader } from 'react-spinners'

export const News: React.FC<NewsProps> = ({ subject }) => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(11)
  const [news, setNews] = useState<Article[]>([])
  var options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  console.log({ subject })
  const {
    data: newsData,
    status: newsStatus,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery('news', () => fetchNews(subject!, page, pageSize), {
    getNextPageParam: (lastPage) => lastPage?.tracks?.next,
    // refetch: searchSubmit,
  })

  const handleChangePage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (page > 0) {
      refetch()
    }
  }, [page, subject])

  const sortedNews = newsData?.pages[0].articles?.sort(
    (a: Article, b: Article) => {
      const date1 = new Date(b?.publishedAt!)
      const date2 = new Date(a?.publishedAt!)
      return date1.getTime()! - date2.getTime()!
    }
  )

  useEffect(() => {
    if (sortedNews?.length > 10) {
      setNews([...news, ...sortedNews])
    }
  }, [sortedNews])

  return (
    <>
      <div className={styles.container}>
        <div className="w-11/12 flex justify-center">
          {news?.map((item: Article, index: number) => {
            if (index === 0) {
              return (
                <>
                  <div className={styles.featuredNews} key={index}>
                    <div className={styles.newsType}>Breaking news</div>
                    <div>
                      <img src={item?.urlToImage} alt="news" />
                    </div>
                    <div className={styles.source}>{item?.source?.name}</div>
                    <h1>{item?.title}</h1>
                    <div className={styles.newsContent}>{item?.content}</div>
                    <div className={styles.newsDate}>
                      {new Date(item?.publishedAt!).toLocaleDateString(
                        'en-US',
                        options
                      )}
                    </div>
                  </div>
                </>
              )
            }
            return null
          })}
        </div>
        <div className="min-w-[50%] mt-60 max-w-xl md:w-full lg:w-full xl:w-11/12 sm:w-9/12">
          {news?.map((item: Article, index: number) => {
            if (index !== 0) {
              if (index % 2 === 0) {
                return (
                  <>
                    <div className="w-full">
                      <Divider />
                    </div>
                    <div className="flex justify-center">
                      <div className={styles.regularNews}>
                        <div>
                          <div>
                            <div className={styles.source}>
                              {item?.source?.name}
                            </div>
                            <div className={styles.regularNewsTitle}>
                              {item?.title}
                            </div>
                            <div className="flex gap-1">
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
                        <div className={styles.regularNewsImage}>
                          <img src={item?.urlToImage} alt="news" />
                        </div>
                      </div>
                      <div>
                        <Divider />
                      </div>
                    </div>
                  </>
                )
              } else {
                return (
                  <>
                    <div className="w-full">
                      <Divider />
                    </div>
                    <div className="flex justify-center">
                      <div className={styles.regularNews}>
                        <div className={styles.regularNewsImage}>
                          <img src={item?.urlToImage} alt="news" />
                        </div>
                        <div>
                          <div>
                            <div className={styles.source}>
                              {item?.source?.name}
                            </div>
                            <div className={styles.regularNewsTitle}>
                              {item?.title}
                            </div>
                            <div className="flex gap-1">
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
                    </div>
                  </>
                )
              }
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
          <button className={styles.loadMoreButton} onClick={handleChangePage}>
            Load more
          </button>
        </div>
      </div>
    </>
  )
}
