import { useState } from "react";
import AddMovie from "../AddMovie";
import User from "./User";


const Index = () => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <section>
        <User />
        <button onClick={() => setShowModal(true)} size="lg">
          Add movie
        </button>
        {showModal && <AddMovie clickedOut={() => setShowModal(false)} />}
      </section>
    );
  };
  
  export default Index;