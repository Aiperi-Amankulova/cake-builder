import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideCallback() {
      setError(false);
    }

    useEffect(() => {
      axios.interceptors.response.use(
        (response) => response,
        (error) => setError(error)
      );
    }, []);

    return (
      <>
        <Modal show={error} hideCallback={hideCallback}>
          Ajax didn't work!
        </Modal>
        <WrappedComponent {...props} />;
      </>
    );
  };
};

export default withErrorHandler;
