import Item from "./Item"

export default function Inventory() {

  return (
    <div className="m-auto">
      <h4 className="font-mono text-white text-left">
        Inventario
      </h4>
      <div className="grid grid-cols-7 grid-rows-4 gap-y-1 border-white border-2  rounded w-fit h-fit">
        {Array(28).fill(0).map((_, i) => <Item key={i}/>)}
      </div>
    </div>
  )

}