import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { Creators as UserActions } from 'store/ducks/users';

export function* addUserRequest(action) {
  try {
    const response = yield api.get(`/users/${action.payload.userName}`);
    const users = yield select(state => state.users.data);

    if (users.find(user => user.id === response.data.id)) {
      yield put(UserActions.addUserFailure('Usuário já adicionado.'));
    } else {
      const user = {
        id: response.data.id,
        name: response.data.login,
        description: response.data.bio,
        avatar: response.data.avatar_url,
        coordinates: action.payload.coordinates,
      };

      yield put(UserActions.addUserSuccess(user));
    }
  } catch (error) {
    yield put(UserActions.addUserFailure('Usuário não encontrado.'));
  }
}
