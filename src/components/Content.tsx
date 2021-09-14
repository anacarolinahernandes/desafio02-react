import { GenreResponseProps, MovieProps } from "../@types";
import { Header } from "./Header";

import { MovieCard } from "./MovieCard";

export function Content(props: {selectedGenre: GenreResponseProps, movies: Array<MovieProps>}) {
  return (
    <div className="container">
        <Header genre={props.selectedGenre} />

        <main>
          <div className="movies-list">
            {props.movies.map((movie) => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster}
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
      </div>
  );
}