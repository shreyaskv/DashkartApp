import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { entryConstants } from '../_constants';
import { entryService } from '../_services';

export const entryActions = {
    requestOTP,
};

function requestOTP() {
    return dispatch => {
        dispatch(request());

        entryService.requestOTP()
            .then(
                result => { 
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: entryConstants.REQUEST_OTP_REQUEST } }
    function success() { return { type: entryConstants.REQUEST_OTP_SUCCESS } }
    function failure(error) { return { type: entryConstants.REQUEST_OTP_FAILURE, error } }
}