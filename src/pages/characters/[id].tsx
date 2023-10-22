import Layout from "@/components/global/Layout";
import { fetchCharacterById } from "@/lib/services/characters/characterServices";
import CharacterType from "@/lib/types/CharacterType";
import { GetServerSideProps } from "next";

const CharacterDetail = ({ character }: { character: CharacterType }) => {
  console.log(character);
  return (
    <Layout>
      <p>{character.name}</p>
    </Layout>
  );
};

interface CharacterDetailProps {
  character: CharacterType;
}

export const getServerSideProps: GetServerSideProps<
  CharacterDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    if (!id) {
      throw new Error("ID is missing.");
    }
    const character = await fetchCharacterById(id);
    return {
      props: { character },
    };
  } catch (error) {
    console.error("Error fetching character data:", error);
    return {
      notFound: true,
    };
  }
};

export default CharacterDetail;
