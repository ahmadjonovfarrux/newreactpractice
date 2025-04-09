import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { useGlobalContext } from "../hooks/useGlobalContext";

function SideBar() {
  const { user } = useGlobalContext();
  return (
    <div className="w-3xs bg-amber-200 p-4">
      <nav className="flex flex-col gap-5">
        <Avatar user={user} />
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
}

export default SideBar;
