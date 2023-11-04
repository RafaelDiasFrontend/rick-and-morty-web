import Layout from '@/components/global/Layout'
import Filter from '@/components/homepage/Filter'
import LocationsList from '@/components/homepage/LocationsList'
import { fetchLocations } from '@/lib/services/locations/locationsServices'
import LocationType from '@/lib/types/LocationType'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

interface LocationDetailProps {
  data: LocationType[]
  pages: number
  count: number
}

export default function Locations({ data, pages, count }: LocationDetailProps) {
  const router = useRouter()

  const initialPage = Number(router.query.page) || 1

  const [currentPage, setCurrentPage] = useState(initialPage - 1)
  const pageSize = 20

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected
    console.log(newPage)
    if (newPage === 0) {
      router.push(`/locations`)
    } else if (newPage !== currentPage) {
      router.push(`/locations?page=${newPage + 1}`)
    }
  }

  return (
    <Layout gap={'20px'}>
      <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
        Personagens
      </Typography>
      <Filter />

      <LocationsList showTitle={false} locations={data} />

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
    const response = await fetchLocations(Number(page))
    console.log(response)
    const locs = response.locations.results
    const pages = response.locations.info.pages
    const count = response.locations.info.count

    return {
      props: {
        data: locs,
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
