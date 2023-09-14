import Slot from "../components/Slot"
import Equipment from "../components/Equipment"
import Inventory from "../components/Inventory"

export default function Page() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-row items-center m-auto border-2 p-6 rounded w-3/4 h-3/4">
        <Equipment/>
        <Inventory/>
      </div>
    </div>
  )
}