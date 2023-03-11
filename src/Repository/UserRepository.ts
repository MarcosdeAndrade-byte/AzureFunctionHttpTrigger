import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class UserRepository {

    async createUser(name: string, email: string, age: number) {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                age: age
            }
        });

        console.log(user);
    }

    async main() {
        prisma.$connect().catch(reject => console.log(reject));
    }
}

export  { UserRepository }
