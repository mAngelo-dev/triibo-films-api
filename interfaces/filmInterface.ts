export default interface filmInterface {
  title: string;
  year: string;
  description: string;
  createdAt?: FirebaseFirestore.Timestamp;
  updatedAt?: FirebaseFirestore.Timestamp;
  imdbID: string | null
}