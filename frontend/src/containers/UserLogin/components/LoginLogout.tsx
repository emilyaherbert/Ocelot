import * as React from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import EmailText from './EmailText';
import GoogleLogoutButton from './GoogleLogoutButton';
import GoogleLoginButton from './GoogleLoginButton';

type LoginLogoutProps = {
    loggedIn: boolean,
    loading: boolean,
    email: string,
    onLogin: () => void,
    onLogout: () => void,
    checkValidUser: (googleUser: GoogleLoginResponse) => void,
    onLoading: () => void,
    onNotLoading: () => void,
};

class LoginLogout extends React.Component<LoginLogoutProps> {

    onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        this.props.checkValidUser(response as GoogleLoginResponse);
    }

    onFailure = (response: { error: string }) => {
        this.props.onNotLoading();
    }

    render() {
        const { loggedIn, email, loading } = this.props;
        const props = this.props;

        return (
            <div>
                <EmailText show={loggedIn} email={email} />
                <GoogleLogoutButton show={loggedIn} onLogout={props.onLogout}/>
                <GoogleLoginButton
                    show={!loggedIn}
                    loading={loading}
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    onLoading={props.onLoading}
                />
            </div >
        );
    }

}

export default LoginLogout;