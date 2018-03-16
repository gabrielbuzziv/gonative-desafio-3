export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),

  addUserSuccess: users => ({
    type: Types.ADD_SUCCESS,
    payload: { users },
  }),

  addUserError: message => ({
    type: Types.ADD_FAILURE,
    payload: { message },
  }),
};
