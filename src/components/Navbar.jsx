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
          <div className="flex gap-3 items-center mr-5">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img
                  src={user.photoURL}
                  alt={`${user.displayName} 's avatar`}
                />
              </div>
            </div>
            <div>Hello, {user.displayName}</div>
          </div>
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
