
export const loadCartFromStorage = () => {
    try {
      const serialized = localStorage.getItem('cartItems');
      return serialized ? JSON.parse(serialized) : [];
    } catch (e) {
      return [];
    }
  };
  
  export const saveCartToStorage = (cartItems) => {
    try {
      const serialized = JSON.stringify(cartItems);
      localStorage.setItem('cartItems', serialized);
    } catch (e) {
    }
  };
  