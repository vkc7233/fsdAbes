import "./Marks.css";
const Marks = ( {name,roll,m1,m2,m3}) => {
  return (
    <div>
      <h1>
        Marksheet:
      </h1>
      <ul>
        <li>
            Name: {name}
        </li>
        <li>
            Roll Number:{roll}
        </li>
        <li>
            semester1:{m1}%
        </li>
        <li>
            semester2:{m2}%
        </li>
        <li>
            semester1:{m3}%
        </li>
      </ul>
    </div>
  )
}

export default Marks

