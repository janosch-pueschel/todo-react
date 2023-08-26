export default function Todo(props) {
  return (
    <div className="w-4/6 flex justify-between">
      <button className="border">
        {props.completed ? "completed" : "open"}
      </button>
      <p>{props.text}</p>
    </div>
  );
}