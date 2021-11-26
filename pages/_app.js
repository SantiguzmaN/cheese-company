import '../styles/globals.css'
import ExpensesProvider from '../context/expensesProvider';
import GlobalStateProvider from '../context/globalStateProvider';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <ExpensesProvider>
        <Component {...pageProps} />
      </ExpensesProvider>
    </GlobalStateProvider>
  );
}

export default MyApp
