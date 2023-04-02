import { UserRepository } from "../../Repository/UserRepository";

class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    id: number,
    email: string,
    name: string,
    age: number
  ): Promise<void> {
    this.userRepository.updateUser(id, email, name, age);
  }
}

export { UpdateUserUseCase };
