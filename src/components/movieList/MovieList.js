import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../menu/home/card/Card";
import { Container, Row, Col } from 'reactstrap';
import { useParams } from "react-router-dom";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();
    useEffect(() => {
        getData()
    }, [type]);
    console.log(movieList);
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&languege=en-US`)
            .then(res => res.json())
            .then(
                data => setMovieList(data.results)
            )
    }
    function handle_edit(type) {
        if (type == "popular") type = "Popular"
        else if (type == "upcoming") type = "Upcoming"
        else type = "Top rated"
        return type;
    }

    

    return (
        <div className="movieList">
            <h2 className="list_title">{handle_edit(type)}</h2>
            <Container>
                <Row>
                    {
                        movieList.map(movie => (
                            <Card movie={movie} />
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
export default MovieList;