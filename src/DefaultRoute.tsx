import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignInModal from './pages/SignModal/SignModal';
import { fetchRecipes } from './features/recipesSlice';

export const DefaultRoute = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <SignInModal />

      <main className="App__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
