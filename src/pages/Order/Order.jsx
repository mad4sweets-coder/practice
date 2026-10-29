import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"

// 레이아웃
const Order = () => {
    return (
        <>
            <div className="tabs">
                <Link to="/index/order">목록(Read)</Link>
                <Link to="/index/order/create">등록(Create)</Link>
                <Link to="/index/order/update">수정(Update)</Link>
                <Link to="/index/order/delete">삭제(Delete)</Link>
            </div>
            <div className="screen">
                <Outlet />
            </div>
        </>
    );
};

//목록
export const OrderRead = ({ orders }) => {
    return (
        <table className="table">
            <thead>
                <tr><th>주문번호</th><th>주문상품</th><th>결제금액</th></tr>
            </thead>
            <tbody>
                {orders.map(o => (
                    <tr key={o.id}>
                        <td>{o.id}</td><td>{o.item}</td><td>{o.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// 등록
export const OrderCreate = ({ setOrders }) => {
    const navi = useNavigate();
    const [form, setForm] = useState({ id: "", item: "", total: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleCreate = () => {
        if (!form.id) return;
        setOrders(prev => [...prev, { ...form, id: Number(form.id), total: Number(form.total) }]);
        navi("/index/order");

    }
    return (
        <div className="form">
                <input type="text" name="id" placeholder="id" onChange={handleChange} value={form.id} /><br></br>
                <input type="text" name="item" placeholder="item" onChange={handleChange} value={form.item} /><br></br>
                <input type="text" name="total" placeholder="total" onChange={handleChange} value={form.total} /><br></br>
                <button onClick={handleCreate}>등록</button>
            </div>
    );
}

// 수정

export const OrderUpdate = ({setOrders}) => {
    const navi = useNavigate();
    const [form, setForm] = useState({ id: "", item: "", total: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        if (!form.id) return;
        setOrders(prev => prev.map(o => {
            if (o.id === Number(form.id)) {
                return { ...o, item: form.item, total: Number(form.total) }
            } else return o;
        })
        );
        navi("/index/order");
    };

    return (
        <div className="form">      
            <input name="id" value={form.id} onChange={handleChange} placeholder="수정할 주문번호" /><br />      
            <input name="item" value={form.item} onChange={handleChange} placeholder="새 주문상품" /><br />
            <input name="total" value={form.total} onChange={handleChange} placeholder="새 결제금액" /><br />
            <button onClick={handleUpdate}>수정</button>
        </div>
    );
}


// 삭제

export const OrderDelete = ({ setOrders }) => {
  const navi = useNavigate();
  const [del, setDel] = useState("");

  const handleDelete = () => {
    if (!del) return;
    setOrders(prev => prev.filter(o => o.id !== Number(del)));
    navi("/index/order");
  };

  return (
    <div className="form">
      <input placeholder="삭제할 번호" value={del} onChange={e => setDel(e.target.value)} />
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};


export default Order;