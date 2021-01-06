import { useState } from "react";
import AddMovie from "../AddMovie";
import User from "./User";
import Button from "../style/Button";


const Index = () => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <section>
        <User />
        <Button onClick={() => setShowModal(true)} size="lg">
          Insert movie
        </Button>
        {showModal && <AddMovie clickedOut={() => setShowModal(false)} />}
      </section>
    );
  };
  
  export default Index;