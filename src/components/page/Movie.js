import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Movie.css';
const Movie = () => {
    const { id } = useParams();

    const [currentMovieDetail, setMovieList] = useState([]);
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&languege=en-US`)
            .then(res => res.json())
            .then(
                data => setMovieList(data)
            )
    }
    useEffect(() => {
        getData()
    }, [id]);
    return (
        <div className="movie">
            <div className="movie_into">
                <img className="movie_backdrop" src={`http://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie_detail">
                <div className="movie_detailLeft">
                    <div className="movie_posterBox">
                        <img className="movie_poster" src={`http://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
            </div>
            <div className="movie_detailRight">
                <div className="movie_detailRightTop">
                    <div className="movie_name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                    <div className="movie_tagline">{currentMovieDetail ? currentMovieDetail.tagline :  ""}</div>
                    <div className="movie_rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                        <span className="movie_voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count +") votes" : ""}</span>
                    </div>
                    <div className="movie_runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie_releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie_genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ?
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                            ))
                            : ""
                        }
                    </div>
                </div>
                <div className="movie_detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
            </div>
            <div className="movie_links">
                <div className="movie_heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail} target="_blank" style={{textDecoration: "none"}}></a>
                }
                {
                    currentMovieDetail&& currentMovieDetail.imdb_id && <a href={"http://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}} />
                }
            </div>
            <div className="movie_heading">Prodiction companies</div>
            <div className="movie_production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie_productionCompany" src={"http://www.imdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}
export default Movie;