import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = (cart) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://test-ac9ba-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data');
      }

      const data = await response.json();
      return data;
    };

    try {
        const data = await fetchData();
        dispatch(cartActions.replaceCart({data}))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Feching cart data failed',
        })
      );
    }
  };
};
//GET req is default

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://test-ac9ba-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data succesfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed',
        })
      );
    }
  };
};
