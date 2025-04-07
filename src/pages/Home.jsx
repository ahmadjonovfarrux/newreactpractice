import { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  const { data: _users } = useCollection("users");

  return (
    <div>
      {data &&
        data.map((r) => {
          return <h2 key={Math.random()}>{r.title}</h2>;
        })}
    </div>
  );
}

export default Home;
