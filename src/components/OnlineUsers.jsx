import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div>
      {data &&
        data.map((d) => {
          return (
            <h1 key={d.id}>
              {d.displayName} - {d.online ? "online" : "offline"}
            </h1>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
