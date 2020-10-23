export function users(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_LIST':
      return {
        users: action.payload, 
        promiseState: 'fulfilled',
      }

    default:
      return state
  }
}
