import './AddFavoriteBtn.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RecipeDetailType } from '../../../types/recipeType';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../../features/favoriteSlice';
import { Tooltip } from '@mui/material';

type Props = {
  recipe: RecipeDetailType;
};

const AddFavoriteBtn: React.FC<Props> = ({ recipe }) => {
  const { favorites } = useAppSelector(state => state.favorites);
  const dispatch = useAppDispatch();

  const isProductFavorite = () => {
    return favorites.some(favorite => favorite.recipeId === recipe.recipeId);
  };

  const handleClick = () => {
    if (isProductFavorite()) {
      dispatch(removeFromFavorite(recipe.recipeId));
    } else {
      const data = {
        recipeId: recipe.recipeId,
        title: recipe.title,
        cookingTimeInMinutes: recipe.cookingTimeInMinutes,
        category: recipe.category,
        image: recipe.image,
        rating: recipe.rating,
      };

      dispatch(addToFavorite(data));
    }
  };

  return (
    <div className='AddFavoriteBtn' onClick={handleClick}>
      {isProductFavorite() ? (
        <Tooltip title="Remove from favorites">
          <FavoriteIcon/>
        </Tooltip>

      ) : (
        <Tooltip title="Add to favorites">
          <FavoriteBorderIcon />
        </Tooltip>
      )}
    </div>
  );
};

export default AddFavoriteBtn;

