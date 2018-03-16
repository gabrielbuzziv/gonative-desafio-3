export const Types = {};

const initialState = {};

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
};
