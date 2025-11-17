import omdbFilmInterface from "./omdbFilmInterface";

export default interface omdbSucessfulSearchInterface {
  Search: Array<omdbFilmInterface>,
  totalResults: string,
  Response: "True"
}