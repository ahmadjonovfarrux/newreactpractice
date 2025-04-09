import { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  const { data: _users } = useCollection("users");

  return (
    <div className="overflow-y-auto flex flex-col items-center justify-center">
      {data &&
        data.map((r) => {
          // return <h2 key={r.id}>{r.title}</h2>;
          return (
            <div key={r.id} className="card bg-amber-200 w-96 shadow-sm mb-8">
              <div className="card-body">
                <h2 className="card-title">{r.title}</h2>
                <p>{r.description}</p>
              </div>
              <figure className="pb-4">
                <img src={r.imgUrl} alt="image of food" />
              </figure>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
