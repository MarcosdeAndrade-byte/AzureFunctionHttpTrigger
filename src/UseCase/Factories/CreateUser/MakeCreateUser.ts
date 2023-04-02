import { UserRepository } from "../../../Repository/UserRepository";
import { CreateUserUseCase } from "../../CreateUser";

async function MakeCreateUser() {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  return createUserUseCase;
}

export { MakeCreateUser };
