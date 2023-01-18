import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  // const items = useSelector((state) => state.cart.items);

  const items = useEffect(() => {
    fetch(
      'https://test-ac9ba-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      {
        method: 'GET',
        body: JSON.stringify(),
      }
    )
      .then((response) => response.json())
      .then((data) => data);
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
