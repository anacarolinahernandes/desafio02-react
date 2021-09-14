import { GenreResponseProps } from "../@types";

export function Header(props: {genre: GenreResponseProps}) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.genre.title}</span>
      </span>
    </header>
  );
}