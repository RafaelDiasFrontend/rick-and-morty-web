import Layout from '@/components/global/Layout'
import EpisodesList from '@/components/homepage/EpisodesList'
import Filter from '@/components/homepage/Filter'
import { fetchEpisodes } from '@/lib/services/episodes/episodesServices'
import EpisodeType from '@/lib/types/EpisodeType'
import { Pagination, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface EpisodeDetailProps {
  data: EpisodeType[]
  pages: number
  count: number
}

export default function Episodes({ data, pages, count }: EpisodeDetailProps) {
  const router = useRouter()

  const initialPage = Number(router.query.page) || 1

  const [currentPage, setCurrentPage] = useState(initialPage - 0)

  const pageSize = 20

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    const newPage = page
    setCurrentPage(newPage)

    const nextPage = newPage === 1 ? '/episodes' : `/episodes?page=${newPage}`
    router.push(nextPage)
  }

  return (
    <Layout gap={'20px'}>
      <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
        Episódios
      </Typography>
      <Filter />

      <EpisodesList showTitle={false} episodes={data} />

      {data ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            color={'primary'}
            count={Math.ceil(count / pageSize)}
            page={currentPage}
            onChange={handlePageChange}
            boundaryCount={0}
          />
        </div>
      ) : null}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || '1'

  try {
    const response = await fetchEpisodes(Number(page))
    const eps = response.episodes.results
    const pages = response.episodes.info.pages
    const count = response.episodes.info.count

    return {
      props: {
        data: eps,
        pages: pages,
        count: count,
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)

    return {
      notFound: true,
    }
  }
}
