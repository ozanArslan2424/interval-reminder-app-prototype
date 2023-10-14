import { useState } from "react";

const SignInCard = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const handleLogSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
    }
    return (
        <div className="card">
            <h2>Giriş yap:</h2>
            <form onSubmit={handleLogSubmit}>
                <label htmlFor="user">Kullanıcı adı:</label>
                <input
                    type="text"
                    id="user"
                    className="segment input user"
                    value={user}
                    required
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)} />
                <label htmlFor="pwd">Şifre:</label>
                <input
                    type="text"
                    id="pwd"
                    className="segment input pwd"
                    value={pwd}
                    required
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)} />
                <button
                    disabled={!user || !pwd ? true : false}
                    className="segment button signin">
                    Giriş yap
                </button>
            </form>
        </div>
    );
}

export default SignInCard;