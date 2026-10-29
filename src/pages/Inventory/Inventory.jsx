import { useState } from 'react';
import styles from './Inventory.module.css';
import { Link, Routes, Route } from 'react-router-dom'

const InventoryList = ({ stocks }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>품목명</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const InventoryAdd = ({ setStocks }) => {
    const [stock, setStock] = useState({ id: "", name: "", stock: "" })

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setStock(prev => ({ ...prev, [name]: value }))
    }

    const addBtn = () => {
        setStocks(prev => [...prev, { ...stock, id: Number(stock.id), stock: Number(stock.stock) }])
        setStock({ id: "", name: "", stock: "" })
    }

    return (
        <div className={styles.form}>
            <input type="text" name='id' placeholder='등록하실 번호를 입력하세요' onChange={handleAdd} value={stock.id} /><br />
            <input type="text" name='name' placeholder='등록하실 품목명을 입력하세요' onChange={handleAdd} value={stock.name} /><br />
            <input type="text" name='stock' placeholder='등록하실 수량을 입력하세요' onChange={handleAdd} value={stock.stock} /><br />
            <button onClick={addBtn}>등록</button>
        </div>
    )
}

const InventoryEdit = ({ setStocks }) => {
    const [edit, setEdit] = useState({ id: "", name: "", stock: "" })

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit(prev => ({ ...prev, [name]: value }))
    }

    const editBtn = () => {
        setStocks(prev => prev.map(e => {
            if (e.id === Number(edit.id)) {
                return { ...e, name: edit.name, stock: Number(edit.stock) }
            } else {
                return e;
            }
        }))
        setEdit({ id: "", name: "", stock: "" })
    }

    return (
        <div className={styles.form}>
            <input type="text" name='id' placeholder='수정하실 번호를 입력하세요' onChange={handleEdit} value={edit.id} /><br />
            <input type="text" name='name' placeholder='수정하실 품목명을 입력하세요' onChange={handleEdit} value={edit.name} /><br />
            <input type="text" name='stock' placeholder='수정하실 수량을 입력하세요' onChange={handleEdit} value={edit.stock} /><br />
            <button onClick={editBtn}>수정</button>
        </div>
    )
}

const InventoryDelete = ({ setStocks }) => {
    const [del, setDel] = useState("");

    const delBtn = () => {
        setStocks(prev => prev.filter(e => e.id !== Number(del)))
        setDel("");
    }

    return (
        <div className={styles.form}>
            <input type="text" placeholder='삭제하실 번호를 입력하세요' onChange={(e) => setDel(e.target.value)} value={del} /><br />
            <button onClick={delBtn}>삭제</button>
        </div>
    )
}

const Inventory = ({ stocks, setStocks }) => {
    return (
        <>
            <div className={styles.tabs}>
                <Link to="/index/inventory/list">목록(Read)</Link>
                <Link to="/index/inventory/add">등록(Create)</Link>
                <Link to="/index/inventory/edit">수정(Update)</Link>
                <Link to="/index/inventory/delete">삭제(Delete)</Link>
            </div>

            <div className={styles.screen}>
                <Routes>
                    <Route path="list" element={<InventoryList stocks={stocks} />}></Route>
                    <Route path='add' element={<InventoryAdd setStocks={setStocks} />}></Route>
                    <Route path='edit' element={<InventoryEdit setStocks={setStocks} />}></Route>
                    <Route path='delete' element={<InventoryDelete setStocks={setStocks} />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Inventory;