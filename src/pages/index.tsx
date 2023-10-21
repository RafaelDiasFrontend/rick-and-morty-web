import { gql, useLazyQuery } from "@apollo/client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

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

export default function ApolloClient() {
  const [email, setEmail] = useState("");
  const [getUserDetailByApolloClientAPICall, { loading, error, data }] =
    useLazyQuery(GET_CHARACTERS);

  console.log(data);
  if (error) return <div>Error!</div>;

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
          onClick={() =>
            getUserDetailByApolloClientAPICall({ variables: { name: email } })
          }
        >
          {loading ? <div /> : <div>{data?.characters.results[0].name}</div>}
          <span>APOLLO CLIENT</span>
        </Button>
      </div>
      {/* Display the data from the query here */}
    </div>
  );
}
