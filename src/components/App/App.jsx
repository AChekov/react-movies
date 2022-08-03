// import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Layout from 'components/Layout';

const App = () => {
  // const [movies, setMovies] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
