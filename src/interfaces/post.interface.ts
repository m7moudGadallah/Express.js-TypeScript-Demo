export interface IPost {
  id: string;
  title: string;
  body: string;
  [key: string]: any; // Index signature allowing any string key
}
