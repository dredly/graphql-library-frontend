import { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_BIRTHYEAR } from "../mutations";
import { ALL_AUTHORS } from "../queries";

const EditAuthor = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  const [editAuthor] = useMutation(EDIT_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      console.log(error);
    },
  });

  const submit = (evt) => {
    evt.preventDefault();

    editAuthor({
      variables: { name, setBornTo: Number(born) },
    });

    setName("");
    setBorn("");
  };

  return (
    <form onSubmit={submit}>
      <div>
        name
        <input value={name} onChange={({ target }) => setName(target.value)} />
      </div>
      <div>
        born
        <input value={born} onChange={({ target }) => setBorn(target.value)} />
      </div>
      <button type="submit">update author</button>
    </form>
  );
};

export default EditAuthor;
