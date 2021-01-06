import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const submit = async (err) => {
    setLoading(true);
    err.preventDefault();

    const email = document.querySelector("input[type=email]").value;
    const password = document.querySelector("input[type=password]").value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Invalid user or password");
    }
    setLoading(false);
  };

  return (
    <section>
      <form onSubmit={submit}>
        <p>
          Log in the <b>Moviepedia</b>!
        </p>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit" loading={loading}>
          go in!
        </button>
        <p>Not registered?</p>
        <Link to="/register">Register here!</Link>
      </form>
    </section>
  );
};

export default Login;