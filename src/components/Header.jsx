// Background-Inspo:
// https://unsplash.com/de/fotos/y2azHvupCVo
// https://unsplash.com/de/fotos/_hpk_92Crhs
// https://unsplash.com/de/fotos/g30P1zcOzXo

export default function Header() {
  return (
    <div className="flex justify-center py-16 bg-headertest bg-no-repeat bg-cover border-b-8 border-slate-100 ">
      <div className="w-4/6 grid grid-cols-2 grid-rows-2 gap-10 text-slate-800">
        <div className="col-span-2">
          <h1 className="text-5xl font-normal">My ToDo-List</h1>
        </div>
        <div>
          <p>Today's Date</p>
        </div>
        <div className="flex justify-end">
          <p>45% completed</p>
        </div>
      </div>
    </div>
  );
}
