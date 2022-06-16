export interface PosterImage {
  "Poster Art": {
    url: string;
    width: number;
    height: number;
  }
}

export interface Entry {
  title: string;
  description: string;
  programType: string;
  images: PosterImage
  releaseYear: number;
}

export interface Programs {
  total: number;
  entries: Entry[];
}
