export default interface FilmInterface {
  title: string;
  year: string;
  description: string;
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
  imdbDetails?: string | object
}