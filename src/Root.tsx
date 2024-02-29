import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { DefaultRoute } from './DefaultRoute';
import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CreatePage from './pages/CreatePage/CreatePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

export const Root = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<DefaultRoute />}>
        <Route index element={<HomePage />} />

        <Route path="recipes">
          <Route index element={<RecipesPage />} />
          <Route path=":recipeId" element={<RecipePage />} />
        </Route>

        <Route path="blog">
          <Route index element={<BlogPage />} />
          <Route path=":articleId" element={<ArticlePage />} />
        </Route>

        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="info" element={<AboutUsPage />} />
        <Route path="profile" element={<ProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
