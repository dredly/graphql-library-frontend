import { useQuery } from "@apollo/client";
import { ALL_AUTHORS } from "../queries";
import EditAuthor from "./EditAuthor";

const Authors = (props) => {
  const queryResult = useQuery(ALL_AUTHORS);
  if (!props.show) {
    return null;
  }

  if (queryResult.loading) {
    return <div>...loading</div>;
  }

  const authors = queryResult.data.allAuthors;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birthyear</h3>
      <EditAuthor />
    </div>
  );
};

export default Authors;
