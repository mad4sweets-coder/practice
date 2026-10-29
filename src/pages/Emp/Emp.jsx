import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"

// 레이아웃
const Emp = () => {
    return (
        <>
            <div className="tabs">
                <Link to="/emp">목록(Read)</Link>
                <Link to="/emp/create">등록(Create)</Link>
                <Link to="/emp/update">수정(Update)</Link>
                <Link to="/emp/delete">삭제(Delete)</Link>
            </div>
            <div className="screen">
                <Outlet />
            </div>
        </>
    );
};

//목록
export const EmpRead = ({ staffs }) => {
    return (
        <table className="table">
            <thead>
                <tr><th>번호</th><th>이름</th><th>연락처</th></tr>
            </thead>
            <tbody>
                {staffs.map(e => (
                    <tr key={e.id}>
                        <td>{e.id}</td><td>{e.name}</td><td>{e.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// 등록
export const EmpCreate = ({ setStaffs }) => {
    const navi = useNavigate();
    const [form, setForm] = useState({ id: "", name: "", phone: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleCreate = () => {
        if (!form.id) return;
        setStaffs(prev => [...prev, { ...form, id: Number(form.id) }]);
        navi("/emp");

    }
    return (
        <div className="form">
                <input type="text" name="id" placeholder="id" onChange={handleChange} value={form.id} /><br></br>
                <input type="text" name="name" placeholder="name" onChange={handleChange} value={form.name} /><br></br>
                <input type="text" name="phone" placeholder="phone" onChange={handleChange} value={form.phone} /><br></br>
                <button onClick={handleCreate}>등록</button>
            </div>
    );
}

// 수정

export const EmpUpdate = ({setStaffs}) => {
    const navi = useNavigate();
    const [form, setForm] = useState({ id: "", name: "", phone: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        if (!form.id) return;
        setStaffs(prev => prev.map(e => {
            if (e.id === Number(form.id)) {
                return { ...e, name: form.name, phone: form.phone }
            } else return e;
        })
        );
        navi("/emp");
    };

    return (
        <div className="form">      
            <input name="id" value={form.id} onChange={handleChange} placeholder="수정할 번호" /><br />      
            <input name="name" value={form.name} onChange={handleChange} placeholder="새 이름" /><br />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="새 연락처" /><br />
            <button onClick={handleUpdate}>수정</button>
        </div>
    );
}


// 삭제

export const EmpDelete = ({ setStaffs }) => {
  const navi = useNavigate();
  const [del, setDel] = useState("");

  const handleDelete = () => {
    if (!del) return;
    setStaffs(prev => prev.filter(e => e.id !== Number(del)));
    navi("/emp");
  };

  return (
    <div className="form">
      <input placeholder="삭제할 번호" value={del} onChange={e => setDel(e.target.value)} />
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};


export default Emp;