import { call, put, select } from 'redux-saga/effects';
import api from 'services';

import { Creators as UserActions } from 'store/ducks/users';

export function* addUserRequest(action) {
  try {
    const response = yield api.get(`/users/${action.payload.userName}`);
    const users = yield select(state => state.users.data);

    if (users.find(user => user.id === response.data.id)) {
      yield put(UserActions.addUserFailure('Usuário já adicionado.'));
    } else {
      yield put(UserActions.addUserSuccess(response.data));
      console.tron.log(response.data)
    }
  } catch (error) {
    yield put(UserActions.addUserFailure('Usuário não encontrado.'));
  }
}
