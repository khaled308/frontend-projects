import XIcon from "../assets/images/icon-remove-item.svg";
import { useCartStore } from "../store/useCartStore";

const CartItem = ({ name, quantity, price, id }) => {
  const { removeFromCart } = useCartStore();
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h2>{name}</h2>
        <div className="flex gap-2">
          <p className="text-red text-sm font-bold">{quantity}x</p>
          <p className="text-rose-500 text-sm">@ ${price}</p>
          <p className="text-rose-500 text-sm text-bold">${quantity * price}</p>
        </div>
      </div>
      <img
        src={XIcon}
        alt=""
        className="cursor-pointer"
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
};

export default CartItem;
