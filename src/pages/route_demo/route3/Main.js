import {Link} from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <p>this is main</p>
      <div>
        <Link to='/main/test-id'>click1</Link>
      </div>
      <div>
        <Link to='/main/456'>click2</Link>
      </div>
      {props.children}
    </div>
  )
};
export default Main