import { useState } from 'react';
import { auth } from './firebase';
import Routes from './routes';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  min-height: 100vh;
  margin: 0 auto;
`;

const App = () => {
  const [ready, setReady] = useState(false);
  auth.onAuthStateChanged(() => setReady(true));

  return (
    ready && (
      <Container>
        <Routes />
      </Container>
    )
  );
}

export default App;