import { ICar } from "../../entities/car.interface";

export interface TableFiveHeaderProps {
  baseURL: string,
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  setToggleFilterId: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleFilterMarca: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleFilterModelo: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteModal:boolean;
  toggleFilterId: boolean;
  toggleFilterMarca: boolean;
  toggleFilterModelo: boolean;
  pageEvent: number;
  cars: ICar[];
  setSelectedCarId:React.Dispatch<React.SetStateAction<string | null>>;
  selectedCarId:string | null;

  
}
