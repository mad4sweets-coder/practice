import styles from './Main.module.css';
import { Outlet ,useNavigate} from 'react-router-dom'

const Main = () => {

    const navi = useNavigate();

    return (
        <div className={styles.container}>
            
            <div> 매장 관리 시스템 로그인 </div>
            <input type="text" /><br />
            <input type="text" /><br />
            <button onClick={()=> {navi("/index")}}>로그인</button>

            
        </div>
    )
}

export default Main;