import omdbFilmsInterface from "./omdbFilmsInterface";

export default interface omdbSucessfulSearchInterface {
  Search: Array<omdbFilmsInterface>,
  totalResults: string,
  Response: "True"
}