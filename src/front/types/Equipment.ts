import { EquipmentSlot, WeaponHand, WeaponRange } from "@prisma/client"
import EquipmentStats from "./EquipmentStats"
export default interface Equipment {
  id: number
  name: string
  slot: EquipmentSlot
  stats: EquipmentStats
  range?: WeaponRange
  hand?: WeaponHand
}