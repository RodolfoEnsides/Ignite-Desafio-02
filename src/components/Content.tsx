import { useMovies } from "../MovieContext";
import { HeaderGenre } from "./HeaderGenre";
import { MovieCard } from "./MovieCard";

export function Content() {
  // Complete aqui
  const { movies, selectedGenre } = useMovies();

  return (
    <div className="container">
      <HeaderGenre />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}