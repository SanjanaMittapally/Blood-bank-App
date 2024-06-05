import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const OrgList = () => {
    const [data, setData] = useState([]);

    const getOrganisations = async () => {
        try {
            const { data } = await API.get("/admin/org-list");
            //console.log(data);
            if (data?.success) {
                setData(data?.orgData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrganisations();
    }, []);

    const handleDelete = async (id) => {
        try {
            let ans = window.prompt(
                "Are you sure want to delete this Organisation? ",
                "sure"
            );
            if (!ans) return;
            const { data } = await API.delete(`/admin/delete-organisation/${id}`);
            alert(data?.message);
            window.location.reload();

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((record) => (
                        <tr key={record._id}>
                            <td>{record.organisationName + "(ORG)"}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            <td>
                                <div className="btn btn-danger"
                                    onClick={() => handleDelete(record._id)}
                                >
                                    Delete
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default OrgList