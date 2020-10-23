import users from '../api/users'

export function getUsersList() {
  return {
    type: 'GET_USER_LIST',
    payload: users
  }
}




