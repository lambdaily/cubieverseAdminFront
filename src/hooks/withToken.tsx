import React from 'react';
import useAuth from './useAuth';

const withToken = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const token = useAuth();

    return token ? <Component {...props} token={token} /> : <></>;
  };
};

export default withToken;