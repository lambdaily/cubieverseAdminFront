import { ITablePayload } from "./tablePayload.interface";

export interface ITableContext {
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  setHeaderData: React.Dispatch<React.SetStateAction<ITablePayload[]>>;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleOrderColumn0: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleOrderColumn1: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleOrderColumn2: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleOrderColumn3: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteModal: boolean;
  toggleOrderColumn0: boolean;
  toggleOrderColumn1: boolean;
  toggleOrderColumn2: boolean;
  toggleOrderColumn3: boolean;
  pageEvent: number;
  headerData: ITablePayload[];
}