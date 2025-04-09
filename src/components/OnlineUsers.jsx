import { useCollection } from "../hooks/useCollection";
import { FaCircleCheck } from "react-icons/fa6";
import { TbXboxXFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

function OnlineUsers() {
  const { data } = useCollection("users");

  return (
    <div className="w-3xs pt-5 p-2">
      <div className="flex flex-col gap-2">
        {" "}
        {data &&
          data.map((d) => {
            return (
              <h1
                className="flex gap-1 bg-amber-300 p-2 rounded-2xl"
                key={d.id}
              >
                <img className="w-7 rounded-2xl" src={d.photoURL} alt="" />{" "}
                {d.displayName}
                {d.online ? (
                  <GoDotFill className="text-green-700" />
                ) : (
                  <GoDotFill className="text-red-700" />
                )}
              </h1>
            );
          })}
      </div>
    </div>
  );
}

export default OnlineUsers;
