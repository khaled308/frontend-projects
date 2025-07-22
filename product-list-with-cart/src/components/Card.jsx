import CartIcon from "../assets/images/icon-add-to-cart.svg";
import IncrementIcon from "../assets/images/icon-increment-quantity.svg";
import DecrementIcon from "../assets/images/icon-decrement-quantity.svg";

import { useCartStore } from "../store/useCartStore";

const Card = ({ product }) => {
  const { cartItems, addToCart, decrementQuantity } = useCartStore();
  const existingItem = cartItems.find((item) => item.id === product.id);

  return (
    <div>
      <div className="mb-9 relative">
        <img src={product.img} alt="dessert" className="w-full rounded-lg" />

        {!existingItem ? (
          <button
            onClick={() => addToCart(product)}
            className="w-[180px] bg-white font-bold text-rose-900 cursor-pointer border hover:border-red hover:text-red transition px-7 py-3 flex items-center justify-center gap-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <img src={CartIcon} alt="icon" />
            Add to Cart
          </button>
        ) : (
          <div className="w-[180px] bg-red font-bold text-white cursor-pointer border hover:border-red transition px-7 py-3 flex items-center justify-between gap-2 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div
              onClick={() => addToCart(product)}
              className="cursor-pointer w-5 h-5 rounded-full flex items-center justify-center border border-white"
            >
              <img src={IncrementIcon} alt="icon" />
            </div>

            <span className="font-bold">{existingItem.quantity}</span>
            <div
              className="cursor-pointer w-5 h-5 rounded-full flex items-center justify-center border border-white"
              onClick={() => decrementQuantity(product.id)}
            >
              <img src={DecrementIcon} alt="icon" />
            </div>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-sm text-rose-500">{product.subtitle}</p>
        <h2 className="font-bold">{product.title}</h2>
        <p className="text-red">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
