import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import classes from './WarningModal.module.css';

const WarningModal = ({ showWarning, clickHandler }) => {
    return (
        <div className={classes["account-warning-modal-bg"]}>
            <ul className={classes["account-warning-modal"]}>
                <span className={classes["account-warning-modal__close"]} onClick={() => showWarning(false)}>
                    <CloseRoundedIcon />
                </span>
                <h3 className={classes["account-warning-modal__heading"]}>Important</h3>
                <li>
                    <span>Login with personal Spotify account: Changes made here affect your personal account.</span>
                </li>
                <li>
                    <span>Use dummy credentials to avoid personal account changes.</span>
                    <div className={classes["credentials"]}>
                        <div >Email: mydemomail78@gmail.com</div>
                        <div >Password: test#12345</div>
                    </div>
                </li>
                <button className={classes['login-btn']} onClick={clickHandler}>Login</button>
            </ul>
        </div>
    )
}

export default WarningModal