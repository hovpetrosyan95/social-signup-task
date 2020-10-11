export const getData = () => ({
    type: 'GET_DATA'
  });

export const changeModalStatus = () => ({
  type: 'CHANGE_MODAL_STATUS'
});

export const saveUser = (user: Object) => ({
  type: "SAVE_USER",
  payload: user
});

export const logout = () => ({
  type: "LOGOUT"
});