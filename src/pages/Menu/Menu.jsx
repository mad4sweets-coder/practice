import styles from './Menu.module.css';
import { Outlet ,useNavigate} from 'react-router-dom'


const Menu = () => {
    return (
        <div >
            <div className={styles.header}> 목록(read)</div>
            <div className={styles.header}> 등록(create)</div>
            <div className={styles.header}> 수정(update)</div>
            <div className={styles.header}> 삭제(delete)</div>
        </div>
    )
}

export default Menu;