import Button from "../style/Button";

import { useHistory } from "react-router-dom";
import { auth } from '../../firebase';
import styled from "styled-components";

const UserContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px 0 0;
`;

const Name = styled.p`
  margin: 0 20px;
  font-size: 16px;
  b {
    text-transform: capitalize;
  }
`;

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
      <UserContainer>
        <Name style={{fontSize: 20}}>
          Welcome, <b>{auth.currentUser.displayName}</b>
        </Name>
        <Button onClick={logout} color="red">
          logout
        </Button>
      </UserContainer>
    );
  };
  
  export default User;