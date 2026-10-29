import { useState } from 'react';
import styles from './Inventory.module.css';
import { Outlet, useNavigate, Routes, Route } from 'react-router-dom'

const InventoryList = ({ stocks }) => {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th> 번호 </th>
                        <th> 메뉴명 </th>
                        <th> 가격</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((e, i) => (
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const InventoryAdd = ({ setStocks }) => {

    const [stock, setStock] = useState({
        id: "", name: "", stock: ""
    })

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setStock(prev => ({ ...prev, [name]: value }))
    }

    const addBtn = () => {
        setStocks(prev => [...prev, { ...stock }])
        setStock({
            id: "", name: "", stock: ""
        })
    }
    return (
        <div>
            <input type="text" name='id' placeholder='등록하실 번호를 입력하세요' onChange={handleAdd} value={stock.id} /><br />
            <input type="text" name='name' placeholder='등록하실 메뉴명을 입력하세요' onChange={handleAdd} value={stock.name} /><br />
            <input type="text" name='stock' placeholder='등록하실 수량을 입력하세요' onChange={handleAdd} value={stock.stock} /><br />
            <button onClick={addBtn}> 등록 </button>
        </div>
    )
}

const InventoryEdit = ({ setStocks }) => {

    const [edit, setEdit] = useState({
        id: "", name: "", stock: ""
    })

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit(prev => ({ ...prev, [name]: value }))
    }
    const editBtn = () => {
        setStocks(prev => prev.map(e => {
            if (edit.id == e.id) {
                return { ...e, name: edit.name, stock: edit.stock }
            } else {
                return e;
            }
        }))
        setEdit({
            id: "", name: "", stock: ""
        })
    }
    return (

        <div>
            <input type="text" name='id' placeholder='수정하실 번호를 입력하세요' onChange={handleEdit} value={edit.id} /><br />
            <input type="text" name='name' placeholder='수정하실 메뉴명을 입력하세요' onChange={handleEdit} value={edit.name} /><br />
            <input type="text" name='stock' placeholder='수정하실 수량을 입력하세요' onChange={handleEdit} value={edit.stock} /><br />
            <button onClick={editBtn}> 수정 </button>

        </div>
    )
}

const InventoryDelete = ({ setStocks }) => {

    const [del, setDel] = useState("");

    const delBtn = () => {
        setStocks(prev => prev.filter(e =>
            e.id !== Number(del)
        ))
        setDel("");
    }

    return (
        <div>
            <input type="text" name='id' placeholder='삭제하실 번호를 입력하세요' onChange={(e) => setDel(e.target.value)} value={del} /> <br />
            <button onClick={delBtn}> 삭제 </button>

        </div>
    )
}
const Inventory = ({ stocks, setStocks }) => {

    const navi = useNavigate();

    return (
        <div>
            <div onClick={() => { navi("/index/inventory/list") }} className={styles.header}> 목록(read)</div>
            <div onClick={() => { navi("/index/inventory/add") }} className={styles.header}> 등록(create)</div>
            <div onClick={() => { navi("/index/inventory/edit") }} className={styles.header}> 수정(update)</div>
            <div onClick={() => { navi("/index/inventory/delete") }} className={styles.header}> 삭제(delete)</div>


            <Routes>
                <Route path="list" element={<InventoryList stocks={stocks} />}></Route>
                <Route path='add' element={<InventoryAdd setStocks={setStocks} />}></Route>
                <Route path='edit' element={<InventoryEdit setStocks={setStocks} />}></Route>
                <Route path='delete' element={<InventoryDelete setStocks={setStocks} />}></Route>
            </Routes>

        </div>
    )
}

export default Inventory;