import { gql, useQuery } from "@apollo/client";
const GET_LOCATIONS = gql`
  query GetLocations {
    books {
      id
      name
    }
  }
`;

export default function Home(props) {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data, error);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
