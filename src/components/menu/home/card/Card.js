import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { useParams } from "react-router-dom";
const Card = ({ movie }) => {
    console.log(movie)
    return <>
        {
            <Col col="8">
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img className="cards_img" src={`http://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                        <div className="cards_overlay">
                            <div className="card_title">{movie ? movie.original_title : ""}</div>
                            <div className="card_runtime">
                                {movie ? movie.release_date : ""}
                                <span className="card_rating">{movie ? movie.vote_average : ""}<i className="fas fa-star" /></span>
                            </div>
                            <div className="card_description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                        </div>
                    </div>
                </Link>
            </Col>
        }
    </>
}
export default Card;