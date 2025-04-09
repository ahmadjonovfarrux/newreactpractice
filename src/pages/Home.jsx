import { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  const { data: _users } = useCollection("users");

  return (
    <div className="overflow-y-auto">
      {data &&
        data.map((r) => {
          return <h2 key={r.id}>{r.title}</h2>;
        })}
    </div>
  );
}

export default Home;
