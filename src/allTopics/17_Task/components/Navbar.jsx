import { useContext } from "react";
import { userContext } from "../context/UserContextProvider";

const Navbar = () => {
  const { user } = useContext(userContext);
  console.log(user);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h4>Context-Task</h4>

      <nav style={{ display: "flex", gap: "30px" }}>
        {user && (
          <>
            <span>{user.email}</span>
            <button>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
