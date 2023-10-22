import { gql } from "@apollo/client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import client from "../lib/apolloClient"; // Replace with the actual path to your Apollo Client configuration

const GET_CHARACTERS = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;

export default function ApolloClient({ data }: any) {
  const [email, setEmail] = useState("");
  console.log;
  return (
    <div className="">
      <div>
        <h2>APOLLO CLIENT</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            // Handle the data from props
            const characterName = data?.characters.results[0].name;
            console.log(characterName);
          }}
        >
          <span>APOLLO CLIENT</span>
        </Button>
      </div>
      {/* Display the data from the query here */}
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data using the Apollo Client configured in your separate module
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: { page: 1, name: "" }, // Set your variables here
  });

  return {
    props: {
      data,
    },
  };
}
