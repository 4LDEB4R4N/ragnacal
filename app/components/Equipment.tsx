import Slot from "./Slot"

export default function Equipment() {

return(
  <div className="m-auto">
    <h4 className="font-mono text-white text-left">
      Equipamento
    </h4>
    <div className="grid grid-cols-2 w-fit h-fit rounded border-2 border-white gap-x-6 gap-y-1 ">
      {Array(8).fill(0).map((_, i) => <Slot key={i} reverse={i%2!=0}/>)}
    </div>
  </div>
)
}