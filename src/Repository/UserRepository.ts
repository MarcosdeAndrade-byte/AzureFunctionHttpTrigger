import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
}

class UserRepository {
    async createUser(name: string, email: string, age: number) {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                age: age
            }
        });
    }

    async listUser(email: string): Promise<User> {
        const user = await prisma.user.findUnique({ where: { email }});
        return user;
    }

    async updateUser(id: number, email: string, name: string,age: number): Promise<void> {
        await prisma.user.update({ where: { id }, data: {email: email, name: name, age: age} });
    }

    async deleteUser(id: number) {
        await prisma.user.delete({ where: {id} });
    }

    async main() {
        prisma.$connect().catch(reject => console.log(reject));
    }
}

export  { UserRepository }
