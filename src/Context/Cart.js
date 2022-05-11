import React, {createContext, useContext, useState, useEffect} from 'react';
export const CartContext = createContext({});

export const CartProvider = ({children}) => {
  const [cartCont, setCartCont] = useState([]);
  const [valor, setValor] = useState();
  useEffect(() => {
    setValor(0);
    setCartCont([]);
  }, []);
  if (valor < 0) {
    setValor(0);
  }
  function addToCart(item, index, d) {
    function viewProdutoDuplicade(produto) {
      console.log('PRODUTO', produto);
      if (produto.id_produto === item.id_produto) {
        const ind = cartCont.indexOf(item);
        if (ind > -1) {
          cartCont.splice(ind, 1);
        }

        return false;
      }
    }
    if (cartCont !== []) {
      var filteredCart = cartCont.filter(viewProdutoDuplicade);
      setCartCont([...cartCont, filteredCart]);
    }

    if (d === -1 && cartCont !== []) {
      setValor(valor - item.preco);

      if (valor < 0) {
        setValor(0);
      }
    } else {
      setValor(valor + item.preco);
    }

    setCartCont([...cartCont, item]);
    console.log('carooo', cartCont);
  }
  function handleRemoveItemFromCart(clickItemIndex) {
    const filteredCart = cartCont.filter(
      item => cartCont.indexOf(item) !== clickItemIndex,
    );

    setCartCont(filteredCart);
  }

  function clearCart() {
    setCartCont([]);
    setValor(0);
  }
  return (
    <CartContext.Provider
      value={{
        cartCont,
        addToCart,
        handleRemoveItemFromCart,
        clearCart,
        valor,
      }}>
      {children}
    </CartContext.Provider>
  );
};
