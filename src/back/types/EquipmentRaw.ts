import { Equipment, WeaponType } from "@prisma/client";

export default interface EquipmentRaw extends Equipment{
  weaponType: WeaponType | null
}