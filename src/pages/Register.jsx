import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getFieldValue } from "../utils";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submit = async (err) => {
    setLoading(true);
    err.preventDefault();

    const displayName = getFieldValue("name");
    const email = getFieldValue("email");
    const password = getFieldValue("password", false);

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({ displayName });
      history.push("/");
    } catch (err) {
      console.log(err);
      alert(`This error ocurred: ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <section>
      <form onSubmit={submit}>
        <p>
          <b>Sign in</b> on Moviepedia
        </p>
        <input type="text" name="name" placeholder="full name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="senha" />
        <button type="submit" loading={loading}>
          count me in
        </button>
        <p>Already registered?</p>
        <Link to="/login">Log in here</Link>
      </form>
    </section>
  );
};

export default Register;