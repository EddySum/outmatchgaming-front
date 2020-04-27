export enum EUserActions {
  TOGGLE_AUTH = 'TOGGLE_AUTH',
  SET_USERNAME = 'SET_USERNAME'
}

export function toggleAuth() {
  return {
      type: EUserActions.TOGGLE_AUTH
  }
}

export function setUsername(username: string) {
  return {
      type: EUserActions.SET_USERNAME,
      username
  }
}