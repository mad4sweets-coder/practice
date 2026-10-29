import styles from './Main.module.css';
import { Outlet, useNavigate } from 'react-router-dom'

const Main = () => {

    const navi = useNavigate();

    return (
        <div className={styles.container}>

            <div className={styles.title}> 매장 관리 시스템 로그인 </div>
            <div className={styles.form}>
                <input type="text" placeholder="ID" /><br />
                <input type="text" placeholder="PASSWORD"/><br />
                <button onClick={() => { navi("/index") }}>로그인</button>
            </div>

        </div>
    )
}

export default Main;