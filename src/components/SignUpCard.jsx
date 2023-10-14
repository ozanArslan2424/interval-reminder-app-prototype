import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[._%+-]).{8,24}$/;
const MAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const SignUpCard = ({ onSuccess }) => {
    const userRef = useRef();
    const mailRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [mail, setMail] = useState('');
    const [validMail, setValidMail] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidMail(MAIL_REGEX.test(mail));
    }, [mail])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleRegSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, mail, pwd, matchPwd);
        onSuccess();
    }
    return (
        <div className="card">
            <h2>Hesap oluştur:</h2>
            <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
            </p>
            <form onSubmit={handleRegSubmit}>
                <label htmlFor="userNew">Kullanıcı adı:</label>
                <input
                    type="text"
                    id="userNew"
                    className="segment input user"
                    ref={userRef}
                    value={user}
                    required
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                />
                <label htmlFor="mailNew">E-posta:</label>
                <input
                    type="email"
                    id="mailNew"
                    className="segment input mail"
                    ref={mailRef}
                    value={mail}
                    required
                    onChange={(e) => setMail(e.target.value)}
                />
                <label htmlFor="pwdNew">Şifre:</label>
                <input
                    type="password"
                    id="pwdNew"
                    className="segment input pwd"
                    value={pwd}
                    required
                    onChange={(e) => setPwd(e.target.value)}
                />
                <label htmlFor="pwdmatchNew">Tekrar Şifre:</label>
                <input
                    type="password"
                    id="pwdmatchNew"
                    className="segment input pwdmatch"
                    value={matchPwd}
                    required
                    onChange={(e) => setMatchPwd(e.target.value)}
                />
                <button
                    disabled={!validName || !validMail || !validPwd || !validMatch ? true : false}
                    className="segment button signup">
                    Kaydol
                </button>
            </form>
        </div>
    );
}

export default SignUpCard;

SignUpCard.propTypes = {
    onSuccess: PropTypes.func
}
