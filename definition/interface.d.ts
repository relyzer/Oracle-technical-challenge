export interface PosterImage {
  "Poster Art": {
    url: string;
    width: number;
    height: number;
  };
}

export interface Entry {
  title: string;
  description: string;
  programType: string;
  images: PosterImage;
  releaseYear: number;
}

export interface Programs {
  total: number;
  entries: Entry[];
}

export interface NumbersFactResult {
  text: string;
  found: boolean;
  number: number;
  type: string;
  date?: string;
  year?: string;
}
