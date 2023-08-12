import Header from "./header/Header";
import MovieList from "../../movieList/MovieList";
import './Home.css';
export default function Home() {
    return (
        <div className="home">
            <header className="nav-bar">
                <Header />
            </header>
            <main className="contain">
                <MovieList />
            </main>
        </div>
    )
};