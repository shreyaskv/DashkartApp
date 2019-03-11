import { homePageConstants } from '../_constants';

const initialState = {
    sending: false,
    sent: false,
};

export function kart(state, action) {

  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case kartConstants.SEND_KART_ID_REQUEST:
    {
      console.log(action.spaceOccupier)
      return {
        ...state,
        sending: true,
        spaceOccupier: "My Kart"
      };
    }
    case kartConstants.SEND_KART_ID_SUCCESS:
    {
      console.log(action.spaceOccupier)
      return {
        ...state,
        sending: false,
        sent: true,
        spaceOccupier: "My Kart"
      };
    }
    case kartConstants.SEND_KART_ID_FAILURE:
    {
      console.log(action.spaceOccupier)
      return {
        ...state,
        sending: false,
        sent: false
      };
    }
    default:
      return state
  }
}