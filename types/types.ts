type Image = {
  png: string;
  webp: string;
};

export type PlanetInfo = {
  travel: string;
  name: string;
  images: Image;
  distance: string;
  description: string;
} & [];

export type CrewType = {
  bio: string;
  images: Image;
  name: string;
  role: string;
} & [];

type RocketImage = {
  portrait: string;
  landscape: string;
};

export type RocketType = {
  name: string;
  images: RocketImage;
  description: string;
} & [];

export type DataFetchType =
  | RocketType
  | CrewType
  | PlanetInfo
  | { message: string };
