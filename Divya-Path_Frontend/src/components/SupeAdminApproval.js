import { useEffect, useState } from "react";
import { Container, Alert, Button } from "react-bootstrap";

import { Navigation } from "./Navigation";

export function SuperAdminApproval() {
  const [data, setData] = useState([]);
  const [selectedUserUid, setSelectedUserUid] = useState([]);

  useEffect(() => {
    // fetch data from database
    fetch("http://localhost:8585/user/authenticate")
      .then((response) => response.json())
      .then((result) => setData(result));
    console.log(data);
  }, []);

  //-------- approve admin ------------
  //   const handleApproveAdmin = (e) => {
  //     console.log(selectedUserUid);
  //   };
  console.log(data);
  console.log(selectedUserUid);

  return (
    <>
      <Navigation></Navigation>
      <Container className="mt-5 mb-5 text-center">
        <Alert className="alert-primary">
          <h2>List of all unauthorised admins</h2>
        </Alert>
      </Container>
      <Container>
        <table className="table table-striped table-bordered table-hover">
          <thead className="table table-dark">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Emp Id</th>
              <th>Dept Id</th>
              <th>Education</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.uid}>
                <td>{row.name}</td>
                <td>{row.mobile}</td>
                <td>{row.email}</td>
                <td>{row.empId}</td>
                <td>{row.deptId}</td>
                <td>{row.education}</td>
                <td>
                  <Button
                    variant="success"
                    className="btn-sm"
                    onClick={() => {
                      setSelectedUserUid(row.email);
                    }}>
                    Approve
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
