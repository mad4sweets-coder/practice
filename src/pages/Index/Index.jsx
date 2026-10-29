import styles from './Index.module.css';
import { Outlet, useNavigate } from 'react-router-dom'

const Index = () => {

    const navi = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>매장 관리 시스템 </span>
                <button className={styles.button}onClick={()=>{navi("/")}}> 로그 아웃</button>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <div onClick={()=>{navi("dashboard")}}>대시 보드</div>
                    <div onClick={()=>{navi("menu")}}>메뉴 관리</div>
                    <div onClick={()=>{navi("inventory")}}>재고 관리</div>
                    <div onClick={()=>{navi("order")}}>주문 관리</div>
                    <div onClick={()=>{navi("emp")}}>직원 관리</div>
                </div>
                <div className={styles.right}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Index;