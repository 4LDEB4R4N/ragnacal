export default function Slot(props: {reverse: boolean}) {


  return (
    <div className={"flex items-center gap-2 w-fit p-1 m-2 border-b-2 rounded " + (props.reverse? "flex-row-reverse" : "flex-row")}>
      <div className="bg-white w-6 h-6 rounded">
      </div>
      <h4 className="font-mono text-white">
        Equipamento
      </h4>
    </div>
  )
}
