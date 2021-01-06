import { useHistory } from "react-router-dom";
import { auth } from '../../firebase';

const User = () => {
    const history = useHistory();
  
    const logout = async () => {
      try {
        await auth.signOut();
        history.push("/login");
      } catch (error) {
        alert("Error!");
      }
    };
  
    return (
      <section>
        <strong>
          Welcome, <b>{auth.currentUser.displayName}</b>
        </strong>
        <button onClick={logout} color="red">
          logout
        </button>
      </section>
    );
  };
  
  export default User;