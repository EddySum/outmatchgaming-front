export enum EUserActions {
  TOGGLE_AUTH = 'TOGGLE_AUTH'
}

export function toggleAuth() {
  return {
      type: EUserActions.TOGGLE_AUTH
  }
}