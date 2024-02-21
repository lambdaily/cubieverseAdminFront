import React from 'react';

interface NoDataFoundProps {
  message: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({ message }) => {
  return (
    <tbody className="m-5 p-5">
      <tr>
        <td colSpan={6} style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em' }}>{message}</h2>
        </td>
      </tr>
    </tbody>
  );
};

export default NoDataFound;
