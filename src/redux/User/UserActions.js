import { signInWithGoogle, signInWithFacebook, signOut } from '../../apis/firebase/firebase';

function startLoading() {
    return {
        type: 'START_LOADING'
    }
}
function updateUserData(payload) {
    return {
        type: 'UPDATE_USER_DATA',
        data: payload
    }
}
function updateUserError(payload) {
    return {
        type: 'UPDATE_USER_ERROR',
        error: payload
    }
}

export function googleLoginUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(user => {
            dispatch(updateUserData(user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function facebookLoginUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithFacebook().then(user => {
            dispatch(updateUserData(user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData({}));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}