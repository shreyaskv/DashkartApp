import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { homePageConstants } from '../_constants';
import { homePageService } from '../_services';

export const homePageActions = {
    setSpaceOccupier,
};

function setSpaceOccupier(spaceOccupier) {
    return dispatch => {
        dispatch(success(spaceOccupier));
    };
    function success(spaceOccupier) { return { type: homePageConstants.SET_SPACE_OCCUPIER_SUCCESS, spaceOccupier} }
}