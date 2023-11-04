import Layout from "@/components/global/Layout";
import EpisodesList from "@/components/homepage/EpisodesList";
import Filter from "@/components/homepage/Filter";
import { fetchEpisodes } from "@/lib/services/episodes/episodesServices";
import EpisodeType from "@/lib/types/EpisodeType";
import { Box, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";

interface EpisodeDetailProps {
  data: EpisodeType[];
  pages: number;
  count: number;
}

export default function Episodes({ data, pages, count }: EpisodeDetailProps) {
  const router = useRouter();

  const initialPage = Number(router.query.page) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage - 1);
  const pageSize = 20;

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected;
    console.log(newPage);
    if (newPage === 0) {
      router.push(`/episodes`);
    } else if (newPage !== currentPage) {
      router.push(`/episodes?page=${newPage + 1}`);
    }
  };

  return (
    <Layout gap={"20px"}>
      <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
        Personagens
      </Typography>
      <Filter />

      {data ? (
        <Box>
          <ReactPaginate
            previousLabel={"Voltar"}
            nextLabel={"Próximo"}
            breakLabel={"..."}
            renderOnZeroPageCount={null}
            pageCount={Math.ceil(count / pageSize)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            forcePage={currentPage}
          />
        </Box>
      ) : null}

      <EpisodesList showTitle={false} episodes={data} />

      {data ? (
        <Box>
          <ReactPaginate
            previousLabel={"Voltar"}
            nextLabel={"Próximo"}
            breakLabel={"..."}
            renderOnZeroPageCount={null}
            pageCount={Math.ceil(count / pageSize)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            forcePage={currentPage}
          />
        </Box>
      ) : null}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || "1";

  try {
    const response = await fetchEpisodes(Number(page));
    console.log(response);
    const chars = response.episodes.results;
    const pages = response.episodes.info.pages;
    const count = response.episodes.info.count;

    return {
      props: {
        data: chars,
        pages: pages,
        count: count,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
};
