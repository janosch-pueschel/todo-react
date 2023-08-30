// Background-Inspo:
// https://unsplash.com/de/fotos/y2azHvupCVo
// https://unsplash.com/de/fotos/_hpk_92Crhs
// https://unsplash.com/de/fotos/g30P1zcOzXo
import React from "react";

export default function Header() {
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
      <div className="w-4/6 grid grid-cols-2 grid-rows-2 gap-10 text-slate-800">
        <div className="col-span-2">
          <h1 className="text-5xl font-normal">My ToDo-List</h1>
        </div>
        <div>
          <p>{todaysDate}</p>
        </div>
        <div className="flex justify-end">
          <p>45% completed</p>
        </div>
      </div>
    </div>
  );
}
