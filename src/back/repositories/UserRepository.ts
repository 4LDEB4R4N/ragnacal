export default class UserRepository {

  private select = {
    email: true
  }

  public async findAll() {
    return await prisma.user.findMany()
  }

  public async create(data: any) {
    return await prisma.user.create({
      data
    })
  }

  public async update(id: number, data: any) {    
    return await prisma.user.update({
      where: { id },
      data
    })
  }

  public async delete(id: number) {
    return await prisma.user.delete({
      where: { id }
    })
  }


}