import { GenreResponseProps } from "../@types";

import { Button } from "./Button";

export function SideBar(props: {genres: Array<GenreResponseProps>, handleClickButton(id: number): void, selectedGenre: any}){ 
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenre === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}