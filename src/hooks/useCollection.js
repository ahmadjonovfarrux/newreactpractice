// import { useEffect, useState } from "react";
// import { db } from "../firebase/config";
// import { collection, onSnapshot } from "firebase/firestore";

// export function useCollectin(c) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const unsunscribe = onSnapshot(collection(db, c), (snapshot) => {
//       const data = [];
//       snapshot.forEach((d) => {
//         data.push({ id: d.id, ...id.data() });
//       });
//       setData(data);
//     });
//     return () => unsunscribe();
//   }, [c]);
//   return { data };
// }

import { useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";

export function useCollection(c) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, c), (snapshot) => {
      const data = [];

      snapshot.forEach((d) => {
        data.push({ id: d.id, ...d.data() });
      });
      setData(data);
    });

    return () => unsubscribe();
  }, [c]);
  return { data };
}
