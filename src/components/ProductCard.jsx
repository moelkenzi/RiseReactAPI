import { CartIcon2, HeartIcon } from "./icons";
import CartBtn from "./CartBtn";

const ProductCard = ({
  ImageUrl,
  tag,
  tagClassName,
  iconClassName,
  // BtnClassName,
  ImageClassName,
  price1,
  title,
  // price2,
  // red,
}) => {
  // use props
  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col items-center w-[313.5px] h-[420.75px] bg-[#F1F1F1] p-[17px]">
        <div className="flex justify-between w-full h-[45px]">
          <p
            className={`${tagClassName} flex items-center justify-center font-medium text-[9px] h-[19.5px] w-fit px-[14px] py-[2px] rounded-[75px] text-white self-start`}>
            {tag}
          </p>
          <span className="flex items-center justify-center w-[45px] h-[45px] rounded-full border border-[#D7D7D7]">
            <HeartIcon className={`${iconClassName} stroke-none w-6 h-6`} />
          </span>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img src={ImageUrl} className={`${ImageClassName}`} />
          {/* <CartBtn
            iconClassName={iconClassName}
            // {...(red ? "stroke-secondary" : "")}
            title="Add to cart"
            className={`${BtnClassName}`}
          /> */}
        </div>
      </div>
      <div className="flex flex-col px-[38px] py-[27px] bg-white gap-2.5">
        <p className="flex text-[15px] items-center justify-center">{title}</p>
        <div className="flex gap-[11px] items-center justify-center font-semibold">
          <span className="text-[15px]">${price1}</span>
          {/* <span className="line-through text-[#D9D9D9]">{price2}</span> */}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
