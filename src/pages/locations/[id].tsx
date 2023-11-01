import Layout from "@/components/global/Layout";
import { fetchLocationById } from "@/lib/services/locations/locationsServices";
import LocationType from "@/lib/types/LocationType";
import { GetServerSideProps } from "next";

const LocationDetail = ({ location }: { location: LocationType }) => {
  return (
    <Layout>
      <p>{location.name}</p>
    </Layout>
  );
};

interface LocationDetailProps {
  location: LocationType[];
}

export const getServerSideProps: GetServerSideProps<
  LocationDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    if (!id) {
      throw new Error("ID is missing.");
    }
    const location = await fetchLocationById(id);
    return {
      props: { location },
    };
  } catch (error) {
    console.error("Error fetching location data:", error);
    return {
      notFound: true,
    };
  }
};

export default LocationDetail;
