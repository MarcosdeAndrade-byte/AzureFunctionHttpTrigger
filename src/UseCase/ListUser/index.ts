import { User } from "@prisma/client";
import { UserRepository } from "../../Repository/UserRepository";

class ListUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string): Promise<User> {
    const user = await this.userRepository.listUser(email);
    return user;
  }
}

export { ListUserUseCase };
