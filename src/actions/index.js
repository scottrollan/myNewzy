export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    id: userId,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
