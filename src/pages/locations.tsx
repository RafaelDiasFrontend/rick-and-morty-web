import Layout from "@/components/global/Layout";
import Filter from "@/components/homepage/Filter";
import LocationsList from "@/components/homepage/LocationsList";
import { fetchLocations } from "@/lib/services/locations/locationsServices";
import LocationType from "@/lib/types/LocationType";
import { Pagination, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

interface LocationDetailProps {
  data: LocationType[];
  pages: number;
  count: number;
}

export default function Locations({ data, pages, count }: LocationDetailProps) {
  const router = useRouter();

  const initialPage = Number(router.query.page) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage - 0);

  const pageSize = 20;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const newPage = page;
    setCurrentPage(newPage);

    const nextPage =
      newPage === 1 ? "/locations" : `/locations?page=${newPage}`;
    router.push(nextPage);
  };

  return (
    <Layout gap={"20px"}>
      <Typography color="text.primary" variant="h5" fontWeight={"bold"}>
        Localizações
      </Typography>
      <Filter />

      <LocationsList showTitle={false} locations={data} />

      {data ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            color={"primary"}
            count={Math.ceil(count / pageSize)}
            page={currentPage}
            onChange={handlePageChange}
            boundaryCount={0}
          />
        </div>
      ) : null}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || "1";

  try {
    const response = await fetchLocations(Number(page));
    const locs = response.locations.results;
    const pages = response.locations.info.pages;
    const count = response.locations.info.count;

    return {
      props: {
        data: locs,
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
