import React from "react";

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent({ loading, ...props }) {
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
