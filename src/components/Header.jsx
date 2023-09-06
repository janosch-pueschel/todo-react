import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Header(props) {
  const today = new Date();
  const day = today.toLocaleString("en-us", { weekday: "long" });
  const month = today.toLocaleString("default", { month: "short" });
  const date = today.getDate();
  const year = today.getFullYear();

  const [todaysDate, setTodaysDate] = React.useState(
    `${day}, ${month} ${date} ${year}`
  );

  React.useEffect(() => {
    setTodaysDate(`${day}, ${month} ${date} ${year}`);
  }, [day]);

  return (
    <div className="flex justify-center py-16 bg-headertest bg-no-repeat bg-cover border-b-8 border-slate-100 ">
      <div className="w-4/6 grid grid-cols-2 grid-rows-2 gap-10 text-slate-900">
        <div className="col-span-2">
          <h1 className="text-5xl font-normal">My ToDo-List</h1>
        </div>
        <div className="flex self-end">
          <p>{todaysDate}</p>
        </div>
        <div className="flex justify-end">
          <div className="w-14 h-14">
            {isNaN(props.completedTodos) ? (
              ""
            ) : (
              <CircularProgressbar
                value={props.completedTodos}
                text={`${props.completedTodos}%`}
                strokeWidth={10}
                styles={buildStyles({
                  textSize: "28px",
                  textColor: "#fff",
                  pathColor: "#60a5fa",
                  trailColor: "#fff",
                })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
