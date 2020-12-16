const Info = (props) => {
  const {mainId} = props.match.params
  return <p>this is about {mainId}</p>
};
export default Info