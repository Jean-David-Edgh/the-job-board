import Title from "./Title";

const Header = (props) => {
  return (
    <div>
      <Title header={props.headerTitle} />
    </div>
  );
};

export default Header;
