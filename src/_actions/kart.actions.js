import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { kartConstants } from '../_constants';
import { kartService } from '../_services';

export const kartActions = {
    sendKartID,
};

function sendKartID(kartID) {
    return dispatch => {
        dispatch(request());

        kartService.sendKartID(kartID)
            .then(
                result => { 
                    dispatch(success());
                    console.log(result);
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: kartConstants.SEND_KART_ID_REQUEST } }
    function success() { return { type: kartConstants.SEND_KART_ID_SUCCESS } }
    function failure(error) { return { type: kartConstants.SEND_KART_ID_FAILURE, error } }
}