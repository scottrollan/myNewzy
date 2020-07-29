export const signIn = (userId) => {
  console.log('From actions/index: ', userId);
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
