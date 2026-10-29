import styles from './DashBoard.module.css'

const DashBoard = ({menus, stocks, orders, staffs}) => {
    
    return (
       <div className={styles.screen}>
        <h3 className={styles.title}>대시보드</h3>
        <table className={styles.table}>
            <thead>
                <tr><th>구분</th><th>수량</th></tr>
            </thead>
            <tbody>
                    <tr>
                        <td>메뉴 개수</td><td>{menus.length}</td>
                    </tr>
                    <tr>
                        <td>재고 품목 수</td><td>{stocks.length}</td>
                    </tr>
                    <tr>
                        <td>주문 기록 수</td><td>{orders.length}</td>
                    </tr>
                    <tr>
                        <td>직원 수</td><td>{staffs.length}</td>
                    </tr>
            </tbody>
        </table>
        </div>
    );
    
}
export default DashBoard;