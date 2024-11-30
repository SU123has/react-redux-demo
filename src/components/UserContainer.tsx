import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
import { RootState } from "../redux/rootReducer";
import { useAppDispatch } from "../redux/store";

const UserContainer = () => {
  const [showUsers, setShowUsers] = useState(false);
  const users = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {!showUsers && (
        <button onClick={() => setShowUsers(!showUsers)}>Show Users</button>
      )}
      {showUsers && (
        <div>
          {users.loading ? (
            <h2>Loading...</h2>
          ) : users.error ? (
            <h2>{users.error}</h2>
          ) : (
            <>
              <h1>Users List</h1>
              {users.data.map((user: any) => {
                return <p key={user.id}>{user.name}</p>;
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserContainer;
