export enum EUserActions {
  TOGGLE_AUTH = 'TOGGLE_AUTH',
  SET_USER_INFO = 'SET_USER_INFO'
}

export function toggleAuth() {
  return {
      type: EUserActions.TOGGLE_AUTH
  }
}

export function setUserInfo(username: string, id: string) {
  return {
      type: EUserActions.SET_USER_INFO,
      username,
      id
  }
}