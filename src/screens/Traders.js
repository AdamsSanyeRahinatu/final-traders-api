import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { TradersContext } from "../contexts/TradersContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";

function Traders() {
  const { loading, trainees, getTrainees } = useContext(TradersContext);

  useEffect(() => {
    getTrainees();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <Spinner animation="grow" />}
      {trainees.length > 0 ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESTINATION</th>
              <th>EMAIL</th>
              <th>DOB</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {trainees.map((trainee) => (
              <tr key={trainee._id}>
                <td>{trainee.name}</td>
                <td>{trainee.destination}</td>
                <td>{trainee.email}</td>
                <td>{trainee.dob}</td>
                <td>
                  <FiDelete />
                  <FiEdit />
                  <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
}

export default Traders;
