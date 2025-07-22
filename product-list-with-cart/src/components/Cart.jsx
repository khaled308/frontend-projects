import { useState } from "react";
import CartImg from "../assets/images/illustration-empty-cart.svg";
import CarbonIcon from "../assets/images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";
import ConfirmationModal from "./ConfirmationModal";
import { useCartStore } from "../store/useCartStore";

const EmptyCart = () => {
  return (
    <>
      <h2 className="text-lg text-red font-bold mb-6">Your Cart(0)</h2>
      <div className="flex flex-col items-center">
        <img src={CartImg} alt="empty cart" />
        <p className="mt-4 text-rose-500 font-bold">
          Your added items will appear here
        </p>
      </div>
    </>
  );
};

const CartContent = () => {
  const [show, setShow] = useState(false);
  const { cartItems, getCartTotalPrice } = useCartStore();
  const cartTotalPrice = getCartTotalPrice();
  console.log(cartTotalPrice);
  return (
    <>
      <h2 className="text-lg text-red font-bold mb-6">Your Cart(0)</h2>
      <div class="divide-y divide-rose-100">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.title}
            quantity={item.quantity}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
      <div className="flex justify-between items-center border-t border-rose-100 pt-6">
        <h2 className="text-sm text-rose-900">Order Total</h2>
        <p className="text-lg font-bold text-rose-900">${cartTotalPrice}</p>
      </div>
      <div className="bg-rose-50 p-6 rounded-lg mt-6 flex gap-4 mb-6">
        <img src={CarbonIcon} alt="carbon icon" />
        <p className="text-sm text-rose-900">
          This is a <span className="font-bold">carbon-neutral</span> delivery
        </p>
      </div>
      <button
        onClick={() => setShow(true)}
        className="w-full bg-red font-bold text-white cursor-pointer border hover:border-red transition px-7 py-3 flex items-center justify-center gap-2 rounded-full"
      >
        Confirm Order
      </button>
      <ConfirmationModal show={show} setShow={setShow} />
    </>
  );
};

const Cart = () => {
  const { cartItems } = useCartStore();
  return (
    <div className="bg-white p-6 rounded-lg">
      {cartItems.length > 0 ? <CartContent /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
