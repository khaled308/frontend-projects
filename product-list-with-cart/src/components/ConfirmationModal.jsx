import ReactDOM from "react-dom";
import ConfirmMark from "../assets/images/icon-order-confirmed.svg";
import { useCartStore } from "../store/useCartStore";

const ConfirmationModal = ({ show, setShow }) => {
  const { cartItems, clearCart, getCartTotalPrice } = useCartStore();
  const cartTotalPrice = getCartTotalPrice();
  if (!show) return null;

  function handleClose() {
    setShow(false);
    clearCart();
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 z-40 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="
            bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative
            transform opacity-0 translate-y-10
            animate-fadeSlideUp
          "
        >
          <img src={ConfirmMark} alt="confirm mark" />
          <h2 className="font-bold text-lg text-rose-900 mt-6">
            Order Confirmed
          </h2>
          <p className="text-sm text-rose-500 mt-2">
            We hope you enjoy your food!
          </p>

          <div className="divide-y divide-rose-100 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-rose-100 py-4"
              >
                <div className="flex gap-4">
                  <img src={item.img} alt={item.name} className="w-12" />
                  <div>
                    <h2 className="font-bold text-sm text-rose-900">
                      {item.name}
                    </h2>
                    <div className="flex gap-2">
                      <p className="text-red text-sm font-bold">
                        {item.quantity}x
                      </p>
                      <p className="text-rose-500 text-sm">@ ${item.price}</p>
                    </div>
                  </div>
                </div>
                <p className="text-rose-900 font-bold">
                  ${item.quantity * item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-rose-100 pt-6">
            <h2 className="text-sm text-rose-900">Order Total</h2>
            <p className="text-lg font-bold text-rose-900">${cartTotalPrice}</p>
          </div>

          <button
            className="w-full bg-red font-bold text-white cursor-pointer border hover:border-red transition px-7 py-3 flex items-center justify-center gap-2 rounded-full"
            onClick={handleClose}
          >
            Start New Order
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default ConfirmationModal;
