import Layout from '@/components/global/Layout'
import CharactersList from '@/components/homepage/CharactersList'
import Filter from '@/components/homepage/Filter'
import { fetchCharacters } from '@/lib/services/characters/characterServices'
import CharacterType from '@/lib/types/CharacterType'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

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

  const [currentPage, setCurrentPage] = useState(initialPage - 1)
  const pageSize = 20

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected

    if (newPage === 0) {
      router.push(`/characters`)
    } else if (newPage !== currentPage) {
      router.push(`/characters?page=${newPage + 1}`)
    }
  }

  return (
    <Layout gap={'20px'}>
      <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
        Personagens
      </Typography>
      <Filter />

      <CharactersList showTitle={false} characters={data} />

      {data ? (
        <Box display={'flex'} justifyContent={'center'}>
          <ReactPaginate
            previousLabel={<KeyboardArrowLeft />}
            nextLabel={<KeyboardArrowRight />}
            breakLabel={'...'}
            renderOnZeroPageCount={null}
            pageCount={Math.ceil(count / pageSize)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={currentPage}
          />
        </Box>
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
