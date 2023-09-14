import Equipment from "@/src/front/types/Equipment";
import EquipmentRaw from "../types/EquipmentRaw";

export default function EquipmentAssembler(equipment: EquipmentRaw): Equipment{
  
  const equipmentAssembled: Equipment = {
      id: equipment.id,
      name: equipment.name,
      slot: equipment.slot,
      stats: {
        atk: equipment.atk? equipment.atk : 0,
        mAtk: equipment.mAtk? equipment.mAtk : 0,
        def: equipment.def? equipment.def : 0,
        mDef: equipment.mDef? equipment.mDef : 0,
        bonusAtk: equipment.bonusAtk? equipment.bonusAtk : 0,
        bonusMAtk: equipment.bonusMAtk? equipment.bonusMAtk : 0
      },
      range: equipment.weaponType?.range,
      hand: equipment.weaponType?.hand
    
  }
  
  return equipmentAssembled

}