import { UserRepository } from "../../Repository/UserRepository";

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string, age: number): Promise<void> {
    this.userRepository.createUser(name, email, age);
  }
}

export { CreateUserUseCase };
