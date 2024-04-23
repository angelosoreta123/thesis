import "./Subjects.css";

const Subjects = ({ name, subjectcode, onClick }) => {
  return (
    <div>
      <div className="subject" onClick={() => onClick(subjectcode, name)}>
        <div className="subjectcode">{subjectcode}</div>
        <div className="subjectinfo">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
