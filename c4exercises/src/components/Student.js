import PropTypes from "prop-types";

export const Student = ({ students }) => {

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>INDEX</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
          return (
          <tr key={i}>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.index}</td>
          </tr>
          );
          })}
        </tbody>
      </table>
      <br/>
    </div>
  )
};

Student.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
};