import { ICar } from "../../entities/car.interface";

export interface PaginationProps {
  baseURL: string;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  setPageEvent: React.Dispatch<React.SetStateAction<number>>;
}
