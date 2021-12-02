import React from 'react';
import Loader from 'react-loader-spinner';
import { useLoadingState } from '../../store/loadingProvider';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../../styles/spinner.css';

const Spinner: React.FC = () => {
  const { loadingCount } = useLoadingState();
  return (
    <>
      {loadingCount > 0 ? (
        <div className="loading" data-testid="loading">
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        </div>
      ) : null}
    </>
  );
};

export default Spinner;
