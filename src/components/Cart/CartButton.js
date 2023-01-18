import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggled = useSelector((state) => state.ui.cartIsVisible);
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const cartToggleHandler = (e) => {
    e.preventDefault();
    dispatch(uiActions.toggle());
  };

  return (
    <button
      onClick={cartToggleHandler}
      className={cartToggled ? classes.buttonActive : classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
