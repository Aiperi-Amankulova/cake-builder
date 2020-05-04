import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import { renderIntoDocument } from "react-dom/test-utils";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideCallback() {
      setError(false);
    }

    useEffect(() => {
      const requestInterceptors = axios.interceptors.request.use((response) => {
        setError(false);
        return response;
      });
      const responseInterceptors = axios.interceptors.response.use(
        (response) => response,
        (error) => setError(error)
      );
      return () => {
        axios.interceptors.request.detach(requestInterceptors);
        axios.interceptors.response.detach(responseInterceptors);
      };
    }, []);

    return (
      <>
        <Modal show={error} hideCallback={hideCallback}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent {...props} />;
      </>
    );
  };
};

export default withErrorHandler;
