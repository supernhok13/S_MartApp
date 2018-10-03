import * as typeAction from './typeAction';

export function LoadingScreenAction(){
    return {type:typeAction.LOADING_SCREEN};
}

export function ErrorAction(error_type){
    switch(error_type){
        case "error_connection" : 
            return {type:typeAction.ERROR_CONNECTION};
        case "wrong_password":
            return {type:typeAction.LOGIN_WRONG_PASSWORD};
        case "user_not_exist":
            return {type:typeAction.LOGIN_USER_NOT_EXIST};
        default:
            return {type:typeAction.INTERNAL_SERVER_ERROR};
    }
}

export function UserAction(data){
    return {type:typeAction.PUSH_APP_USER , payload:data};
}

export function QrCodeAction(qrcode){
    return {type : typeAction.GET_QR_CODE,qr:qrcode};
}