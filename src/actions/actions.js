export const getRadius = radius => {
  return {
    type: 'SET_RADIUS',
    radius,
  };
};

export const getCenter = center => {
  return {
    type: 'SET_CENTER',
    center,
  };
};
export const login = uid => {
  return {
    type: 'LOGIN',
    uid,
  };
};
