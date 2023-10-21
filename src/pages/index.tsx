import { gql, useLazyQuery } from "@apollo/client";
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
        <button
          onClick={() =>
            getUserDetailByApolloClientAPICall({ variables: { name: email } })
          }
        >
          {loading ? <div /> : <div>{data?.characters.results[0].name}</div>}
          <span>APOLLO CLIENT</span>
        </button>
      </div>
      {/* Display the data from the query here */}
    </div>
  );
}
