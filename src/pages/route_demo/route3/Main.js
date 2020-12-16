import {Link} from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <p>this is main</p>
      <Link to='/main/a'>click</Link>
      {props.children}
    </div>
  )
};
export default Main