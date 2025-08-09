import { CartIcon2 } from "./icons";

const CartBtn = ({ className, CartClassName, title }) => {
  return (
    <button
      className={`${className} flex items-center justify-center gap-[7px] w-[186px] h-[48px] text-black px-[36px] py-[13px] `}>
      <CartIcon2 className={`${CartClassName}`} />
      <h6 className="font-medium text-[13.5]">{title}</h6>
    </button>
  );
};
export default CartBtn;
