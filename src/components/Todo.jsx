export default function Todo(props) {
  return (
    <div className="w-4/6 flex justify-between">
      <button className="border" onClick={() => props.markComplete(props.id)}>
        {props.completed ? "completed" : "open"}
      </button>
      <p>{props.text}</p>
      <button className="border" onClick={() => props.deleteTodo(props.id)}>
        Delete
      </button>
    </div>
  );
}
