import { useCart } from "../context/cartContext";
import { useState } from "react";

export function useClick() {
  const [options, setOptions] = useState({ 온도: 0, 진하기: 0, 사이즈: 0 });
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const handleCart = (modalMenu) => {
    addToCart({ options, quantity, id: modalMenu.id });
    setModalOn(false);
  };
  const handleQuantity = (event) => setQuantity(Number(event.target.value));
  const handleOptions = (name, idx) => setOptions({ ...options, [name]: idx });
  return { handleCart, options, quantity, handleOptions, handleQuantity };
}
