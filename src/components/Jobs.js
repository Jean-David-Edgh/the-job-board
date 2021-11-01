import Job from "./Job";

const Jobs = (props) => {
  return (
    <div>
      <Job offer={props.jobOffer} />
    </div>
  );
};

export default Jobs;
