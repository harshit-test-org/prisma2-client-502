const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const data = await prisma.userOrganization.findMany({
    where: {
      user: {
        id: 11,
      },
    },
  })
  console.log(data)
}

main()
