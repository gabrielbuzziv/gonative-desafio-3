export const Types = {
  TOGGLE_MODAL: 'users/TOGGLE_MODAL',
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

const initialState = {
  data: [],
  modalVisible: false,
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: aciont.payload.visibility,
      };
    // Quando o request é iniciado.
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // Quando o request finaliza e adiciona o usuário com sucesso.
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.user],
        loading: false,
        error: null,
      };
    // Quando o request falha.
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
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
