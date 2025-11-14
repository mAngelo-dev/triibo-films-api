export default interface Film {
  title: string;
  description: string;
  createdAt: {
    "_seconds": number
    "_nanoseconds": number
  };
  updatedAt: {
    "_seconds": number
    "_nanoseconds": number
  };
}