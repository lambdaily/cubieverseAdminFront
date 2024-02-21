import { ICar } from "../../entities/car.interface";

export interface TableFiveProps {
  baseURL: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setUsers: React.Dispatch<React.SetStateAction<ICar[]>>;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  setToggleFilterId: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleFilterFullname: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleFilterEmail: React.Dispatch<React.SetStateAction<boolean>>;
  toggleFilterId: boolean;
  toggleFilterFullname: boolean;
  toggleFilterEmail: boolean;
  cars: ICar[];
  pageEvent: number;
}