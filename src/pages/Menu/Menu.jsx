import { useState } from 'react';
import styles from './Menu.module.css';
import { Link, Routes, Route } from 'react-router-dom'

const MenuList = ({ menus }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>메뉴명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                {menus.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const MenuAdd = ({ setMenus }) => {
    const [menu, setMenu] = useState({ id: "", name: "", price: "" })

    const handelAdd = (e) => {
        const { name, value } = e.target;
        setMenu(prev => ({ ...prev, [name]: value }));
    }

    const addBtn = () => {
        setMenus(prev => [...prev, { ...menu, id: Number(menu.id), price: Number(menu.price) }])
        setMenu({ id: "", name: "", price: "" })
    }

    return (
        <div className={styles.form}>
            <input type="text" name='id' placeholder='등록하실 번호를 입력하세요' onChange={handelAdd} value={menu.id} /><br />
            <input type="text" name='name' placeholder='등록하실 메뉴명을 입력하세요' onChange={handelAdd} value={menu.name} /><br />
            <input type="text" name='price' placeholder='등록하실 가격을 입력하세요' onChange={handelAdd} value={menu.price} /><br />
            <button onClick={addBtn}>추가</button>
        </div>
    )
}

const MenuEdit = ({ setMenus }) => {
    const [edit, setEdit] = useState({ id: "", name: "", price: "" });

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit(prev => ({ ...prev, [name]: value }))
    }

    const editBtn = () => {
        setMenus(prev => prev.map((e) => {
            if (e.id === Number(edit.id)) {
                return { ...e, name: edit.name, price: Number(edit.price) }
            } else {
                return e;
            }
        }))
        setEdit({ id: "", name: "", price: "" })
    }

    return (
        <div className={styles.form}>
            <input name='id' type="text" placeholder='수정하실 번호를 입력해주세요' onChange={handleEdit} value={edit.id} /><br />
            <input name='name' type="text" placeholder='수정하실 메뉴명을 입력하세요' onChange={handleEdit} value={edit.name} /><br />
            <input name='price' type="text" placeholder='수정하실 가격을 입력하세요' onChange={handleEdit} value={edit.price} /><br />
            <button onClick={editBtn}>수정</button>
        </div>
    )
}

const MenuDelete = ({ setMenus }) => {
    const [del, setDel] = useState("");

    const delBtn = () => {
        setMenus(prev => prev.filter(e => e.id !== Number(del)))
        setDel("");
    }

    return (
        <div className={styles.form}>
            <input type="text" placeholder='삭제하실 번호를 입력하세요' onChange={e => setDel(e.target.value)} value={del} /><br />
            <button onClick={delBtn}>삭제</button>
        </div>
    )
}

const Menu = ({ menus, setMenus }) => {
    return (
        <>
            <div className={styles.tabs}>
                <Link to="/index/menu">목록(Read)</Link>
                <Link to="/index/menu/add">등록(Create)</Link>
                <Link to="/index/menu/edit">수정(Update)</Link>
                <Link to="/index/menu/delete">삭제(Delete)</Link>
            </div>

            <div className={styles.screen}>
                <Routes>
                    <Route index element={<MenuList menus={menus} />}></Route>
                    <Route path='add' element={<MenuAdd setMenus={setMenus} />}></Route>
                    <Route path='edit' element={<MenuEdit setMenus={setMenus} />}></Route>
                    <Route path='delete' element={<MenuDelete setMenus={setMenus} />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Menu;