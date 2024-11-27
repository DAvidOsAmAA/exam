import base_URL from "../enviroment/Enviroment"

export class AuthEndPoint{
    static LOGIN =base_URL+'api/v1/auth/signin'
    static REGISTER =base_URL+'api/v1/auth/signup'
    static CHANGE_PASSWORD = base_URL+'api/v1/auth/changePassword'
    static DELETE_ACCOUNT = base_URL+'api/v1/auth/deleteMe'
    static EDIT_PROFILE = base_URL+'api/v1/auth/editProfile'
    static LOG_OUT=base_URL+'api/v1/auth/logout'
    static USER_INFO=base_URL+'api/v1/auth/profileData'
    static FORGET_PASS = base_URL+'api/v1/auth/verifyResetCode'
    static RESET_PASS= base_URL+'api/v1/auth/resetPassword'
}