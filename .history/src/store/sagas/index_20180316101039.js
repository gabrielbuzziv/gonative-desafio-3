import { all, takeLatest } from 'redux-saga';

import { Types as UserTypes } from 'store/ducks/users';
import { addUserRequest } from './users';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.ADD_REQUEST, addUserRequest)]);
}
