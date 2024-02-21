export interface PaginationProps {
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  setPageEvent: React.Dispatch<React.SetStateAction<number>>;
  name: string;
}
