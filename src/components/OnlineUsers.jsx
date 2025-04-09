import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");

  return (
    <div className="w-3xs">
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
