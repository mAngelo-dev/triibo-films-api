export default interface FilmDTO {
  title: string;
  year: string;
  description: string;
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
}