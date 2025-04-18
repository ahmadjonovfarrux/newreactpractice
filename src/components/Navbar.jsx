import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogOut";

function Navbar() {
  const { user } = useGlobalContext();
  const { isPending, logout } = useLogout();
  return (
    <header className="bg-base-200">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-netural" to="/">
            Logo
          </Link>
        </div>
        <div className="navbar-center">NewProject</div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center mr-5"></div>
          {!isPending && (
            <button onClick={logout} className="btn btn-secondary btn-outline">
              LogOut
            </button>
          )}
          {isPending && (
            <button
              onClick={logout}
              className="btn btn-secondary btn-outline"
              disabled
            >
              Loading...
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
