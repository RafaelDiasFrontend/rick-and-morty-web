import Layout from '@/components/global/Layout'
import CharactersList from '@/components/homepage/CharactersList'
import Filter from '@/components/homepage/Filter'
import { fetchCharacters } from '@/lib/services/characters/characterServices'
import CharacterType from '@/lib/types/CharacterType'
import { Pagination, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface CharacterDetailProps {
  data: CharacterType[]
  pages: number
  count: number
}

export default function Characters({
  data,
  pages,
  count,
}: CharacterDetailProps) {
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

    const nextPage =
      newPage === 1 ? '/characters' : `/characters?page=${newPage}`
    router.push(nextPage)
  }

  return (
    <Layout gap={'20px'}>
      <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
        Personagens
      </Typography>
      <Filter />

      <CharactersList showTitle={false} characters={data} />

      {data ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            color={'primary'}
            count={Math.ceil(count / pageSize)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      ) : null}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || '1'

  try {
    const response = await fetchCharacters(Number(page))
    const chars = response.characters.results
    const pages = response.characters.info.pages
    const count = response.characters.info.count

    return {
      props: {
        data: chars,
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
