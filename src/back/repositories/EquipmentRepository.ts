import EquipmentRaw from "../types/EquipmentRaw";

export default class EquipmentRepository {



  public async findAll() {
    const raw: EquipmentRaw[] = await prisma.equipment.findMany({include: { weaponType: true }})

    return raw
  }

  public async create(data: any) {
    return await prisma.equipment.create({
      data
    })
  }

  public async update(id: number, data: any) {  
    return await prisma.equipment.update({
      where: { id },
      data
    })
  }

  public async delete(id: number) {
    return await prisma.equipment.delete({
      where: { id }
    })
  }

}