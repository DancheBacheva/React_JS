import PropTypes from "prop-types";

export const Semester = (props) => {
  return (
    <div>
      {
        props.shouldShowSemester ? (
          <h3>Winter semester</h3>
        ) : (
          <h3>Summer semester</h3>
        )
      }
    </div>
  )
}

Semester.propTypes = {
  shouldShowSemester: PropTypes.bool,
}

Semester.defaultProps = {
  shouldShowSemester: true,
}