import filmInterface from "./filmInterface";
import omdbFilmInterface from "./omdbFilmInterface";

export default interface filmWithImdbInterface extends filmInterface{
  details: omdbFilmInterface
}