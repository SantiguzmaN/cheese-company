import React from 'react';
import Loader from 'react-loader-spinner';
import { useLoadingState } from '../../context/loading/loadingProvider';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './spinner.module.scss';

const Spinner = () => {
  const { loadingCount } = useLoadingState();
  return (
    <>
      {loadingCount > 0 ? (
        <div className={styles.loading} data-testid="loading">
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        </div>
      ) : null}
    </>
  );
};

export default Spinner;
