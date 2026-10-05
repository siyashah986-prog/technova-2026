function Props(props) {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Name: {props.name}</p>
      <p>Event: {props.event}</p>
    </div>
  );
}

export default Props;