import { homePageConstants } from '../_constants';

const initialState = {
  spaceOccupier: "My Kart",
};

export function homePage(state, action) {

  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case homePageConstants.SET_SPACE_OCCUPIER_SUCCESS:
    {
      console.log(action.spaceOccupier)
      return {
        ...state,
        spaceOccupier: action.spaceOccupier
      };
    }
    default:
      return state
  }
}