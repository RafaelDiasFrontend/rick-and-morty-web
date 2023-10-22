import Layout from "@/components/global/Layout";
import { fetchEpisodeById } from "@/lib/services/episodes/episodesServices";
import EpisodeType from "@/lib/types/EpisodeType";
import { GetServerSideProps } from "next";

const EpisodeDetail = ({ episode }: { episode: EpisodeType }) => {
  console.log(episode);
  return (
    <Layout>
      <p>{episode.name}</p>
    </Layout>
  );
};

interface EpisodeDetailProps {
  episode: EpisodeType[];
}

export const getServerSideProps: GetServerSideProps<
  EpisodeDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    if (!id) {
      throw new Error("ID is missing.");
    }
    const episode = await fetchEpisodeById(id);
    return {
      props: { episode },
    };
  } catch (error) {
    console.error("Error fetching episode data:", error);
    return {
      notFound: true,
    };
  }
};

export default EpisodeDetail;
