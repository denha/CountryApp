import { OPEN_DRAWER, OpenDrawerAction, IsOpen } from '../../types'

export function openDrawer(isOpen: IsOpen): OpenDrawerAction {
  return {
    type: OPEN_DRAWER,
    payload: {
      isOpen,
    },
  }
}
