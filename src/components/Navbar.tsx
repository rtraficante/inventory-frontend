import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

const Navbar = (props: Props) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <nav className="w-full bg-gray-800 text-white">
      <ul className="flex w-full justify-end space-x-2 p-2">
        <li className="cursor-pointer">Inventory</li>
        <li className="cursor-pointer">Dashboard</li>
        {!isLoading && !user && (
          <li className="cursor-pointer" onClick={() => loginWithRedirect()}>
            Login
          </li>
        )}
        {!isLoading && user && (
          <li className="cursor-pointer" onClick={() => logout()}>
            Logout
          </li>
        )}
      </ul>
      {/* {!isLoading && !user && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      {!isLoading && user && <button onClick={() => logout()}>Logout</button>} */}
    </nav>
  );
};

export default Navbar;
