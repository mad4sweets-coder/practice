import { useState } from "react";
import { Outlet, useNavigate, Routes, Route } from 'react-router-dom'
import Main from "./pages/Main/Main"
import Index from "./pages/Index/Index"
import Menu from "./pages/Menu/Menu"
import Inventory from "./pages/Inventory/Inventory"
import Emp, { EmpRead, EmpCreate, EmpUpdate, EmpDelete } from "./pages/Emp/Emp";
import Order, { OrderRead, OrderCreate, OrderUpdate, OrderDelete } from "./pages/Order/Order"
import DashBoard from "./pages/DashBoard/DashBoard"

function App() {

  const [menus, setMenus] = useState([
    { id: 1, name: '아메리카노', price: 4500 },
    { id: 2, name: '카페라떼', price: 5000 },
    { id: 3, name: '바닐라라떼', price: 5500 },
    { id: 4, name: '딸기스무디', price: 6000 },
    { id: 5, name: '치즈케이크', price: 6500 },
  ]);

  const [stocks, setStocks] = useState([
    { id: 1, name: '원두 200g', stock: 25 },
    { id: 2, name: '바닐라 시럽 1L', stock: 10 },
    { id: 3, name: '종이컵 1박스', stock: 500 },
    { id: 4, name: '우유 1L', stock: 30 },
  ]);

  const [orders, setOrders] = useState([
    { id: 101, item: '아메리카노 2잔', total: 9000 },
    { id: 102, item: '카페라떼 1잔', total: 5000 },
    { id: 103, item: '치즈케이크 1개', total: 6500 },
    { id: 104, item: '바닐라라떼 1잔', total: 5500 },
    { id: 105, item: '딸기스무디 2잔', total: 12000 },
    { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, name: '김철수', phone: '010-1234-5678' },
    { id: 2, name: '이영희', phone: '010-9876-5432' },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="index" element={<Index />}>

        <Route path="dashBoard" element={<DashBoard staffs={staffs} menus={menus} stocks={stocks} orders={orders} />}></Route>
        <Route path="menu/*" element={<Menu menus={menus} setMenus={setMenus} />}></Route>
        <Route path="inventory/*" element={<Inventory stocks={stocks} setStocks={setStocks} />}></Route>


        <Route path="emp" element={<Emp />}>
          <Route index element={<EmpRead staffs={staffs} />} />
          <Route path="create" element={<EmpCreate setStaffs={setStaffs} />} />
          <Route path="update" element={<EmpUpdate setStaffs={setStaffs} />} />
          <Route path="delete" element={<EmpDelete setStaffs={setStaffs} />} />
        </Route>
        <Route path="order" element={<Order />}>
          <Route index element={<OrderRead orders={orders} />} />
          <Route path="create" element={<OrderCreate setOrders={setOrders} />} />
          <Route path="update" element={<OrderUpdate setOrders={setOrders} />} />
          <Route path="delete" element={<OrderDelete setOrders={setOrders} />} />
        </Route>
      </Route>

    </Routes>
  )
}

export default App;