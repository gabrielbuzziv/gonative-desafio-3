export const Types = {
  TOGGLE_MODAL: 'users/TOGGLE_MODAL',
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

const initialState = {
  data: [],
  coordinates: {},
  modalVisible: false,
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    // Abre/Fecha o modal.
    case Types.TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: action.payload.visible,
        coordinates: action.payload.coordinates,
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
        modalVisible: false,
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
  toggleModal: (visible, coordinates) => ({
    type: Types.TOGGLE_MODAL,
    payload: { visible, coordinates },
  }),

  addUserRequest: userName => ({
    type: Types.ADD_REQUEST,
    payload: { userName },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: { user },
  }),

  addUserFailure: message => ({
    type: Types.ADD_FAILURE,
    payload: { message },
  }),
};
