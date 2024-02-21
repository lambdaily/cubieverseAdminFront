export interface ITablePayload {
  toggleFn: React.Dispatch<React.SetStateAction<boolean>>;
  toggleVal: boolean;
  columnName: string;
  columnNameDB: string;
  columnNum: number;
}