import { AxiosError } from "./services/api-client";
import userService, { UserData } from "./services/user-service";
import useUser from "./hooks/useUser";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUser();
  const handleDelete = (person: UserData) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id != person.id));
    userService.delete(person.id).catch((err) => {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    });
  };

  const handleAdd = () => {
    const newUser = { id: 0, name: "Aisha" };
    setUsers([...users, newUser]);

    userService
      .add<UserData>(newUser)
      .then((res) => setUsers([res.data, ...users]));
  };

  const handleUpdateUser = (person: UserData) => {
    const originalPerson = [...users];
    const updatedUser = { ...person, name: "Aisha" };
    setUsers(users.map((user) => (person.id === user.id ? updatedUser : user)));

    userService.update<UserData>(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalPerson);
    });
  };

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div>
        <button onClick={handleAdd} className="btn btn-primary mb-3">
          Add
        </button>
        <ul className="list-group">
          {users.map((person) => (
            <li
              key={person.id}
              className="list-group-item d-flex justify-content-between"
            >
              {person.name}
              <div>
                <button
                  onClick={() => handleUpdateUser(person)}
                  className="button btn btn-outline-secondary mx-1"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(person)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
