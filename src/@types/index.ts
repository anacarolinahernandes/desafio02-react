export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface SideBarProps {
  genres: GenreResponseProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
};
export interface HeaderProps {
  title: string;
}

export interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}