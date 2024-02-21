import Content from './Content';
import Header from './Header';

interface TableThreeProps {
  data: any[];
  name: string;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteModal: boolean;
  setSelectedItemId: React.Dispatch<React.SetStateAction<number | null>>;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}
const Table: React.FC<TableThreeProps> = ({
  data,
  name,
  setShowDeleteModal,
  showDeleteModal,
  setSelectedItemId,
  setData,
}) => {
  return (
    <div>
      <table className="w-full table-auto">
        <Header name={name} />
        <Content
          name={name}
          data={data}
          setShowDeleteModal={setShowDeleteModal}
          showDeleteModal={showDeleteModal}
          setSelectedItemId={setSelectedItemId}
          setData={setData}
        />
      </table>
    </div>
  );
};

export default Table;
