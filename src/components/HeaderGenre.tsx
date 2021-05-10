import { useMovies } from "../MovieContext";

export function HeaderGenre() {
    const {selectedGenre} = useMovies();

    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}