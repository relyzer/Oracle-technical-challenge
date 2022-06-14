export interface Programs {
  total: number;
  entries: {
    title: string;
    description: string;
    programType: string;
    images: {
      "Poster Art": {
        url: string;
        width: number;
        height: number;
      };
    };
    releaseYear: number;
  }[];
}
