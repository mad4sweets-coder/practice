import {Link, Outlet} from "react-router-dom"

const EmpLayout  = () => {
    return (
        <>
        <div className="tabs">
            <Link to ="/emp">목록(Read)</Link>
            <Link to ="/emp/create">등록(Create)</Link>
            <Link to ="/emp/update">수정(Update)</Link>
            <Link to ="/emp/delete">삭제(Delete)</Link>
        </div>
        <div className="screen">
            <Outlet />
        </div>
        </>
    );
};

