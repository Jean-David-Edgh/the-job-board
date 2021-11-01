import Titlejob from "./Titlejob";
import Contracttype from "./Contracttype";
import Country from "./Country";
import City from "./City";
import Classname from "./Classname";

const Job = (props) => {
  return (
    <div className="{props.class}">
      <h2>{props.offer}</h2>;<p>{props.titleJob}</p>
      <p>{props.contractType}</p>
      <p>{props.country}</p>
      <p>{props.city}</p>
    </div>
  );
};

export default Job;
