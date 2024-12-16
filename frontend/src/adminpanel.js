import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [cdata, setcdata] = useState([]);
    const [cookie, setcookie, removecookies] = useCookies();
    const jump=useNavigate();


    const logout = () => {
        removecookies("mycookie");
        jump("/adminlogin");
    }
   
    useEffect(()=>{
        loadrecord();
    })
       const loadrecord = async () => {
        const re = await fetch("https://rivison-project-backend.onrender.com/page", {
            method: "GET",
            headers: { "Content-Type": "Application/json" }
        });
        const data = await re.json();
        setcdata(data);

    }

    const deleteRecord = async (m) => {
        if (window.confirm("Sure! Want To Delete"));
        {
            const re = await fetch("https://rivison-project-backend.onrender.com/page", {
                method: "DELETE",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({ rid: m })
            });
            const data = await re.json();
            alert(data.msg);
            loadrecord();
        }
    }
    return (

        <>
            <button style={{width:"100px", marginTop:"10px",}} className="btn btn-warning" onClick={logout}>Logout</button>

            <div className="container-fluid mt-4" style={{ width: "80%" }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Customer ID</th>
                            <th>Department</th>
                            <th>Query</th>
                            <th>Pictures</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cdata.map((x) => {
                            return (
                                <tr>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.computerid}</td>
                                    <td>{x.department}</td>
                                    <td>{x.message}</td>
                                    <td>
                                        <img style={{ width: "150px" }} src={"https://rivison-project-backend.onrender.com/" + x.screenshot} />
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => { deleteRecord(x._id) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Admin