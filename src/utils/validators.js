export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateQuantity = (quantity) => {
  return quantity > 0;
};

// Add more validators as needed for forms