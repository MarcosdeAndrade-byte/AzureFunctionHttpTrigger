import { UserRepository } from "../../Repository/UserRepository";

class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<void> {
    this.userRepository.deleteUser(id);
  }
}

export { DeleteUserUseCase };
