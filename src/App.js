import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/menu/home/Home';
import Header from './components/menu/home/header/Header';
import MovieList from './components/movieList/MovieList';
import Movie from './components/page/Movie';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="/*" element={<h1>Error Page 404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
