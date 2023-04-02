import { UserRepository } from "../../../Repository/UserRepository";
import { UpdateUserUseCase } from "../../UpdateUser";

async function MakeUpdateUser() {
  const userRepository = new UserRepository();
  const updateUserUseCase = new UpdateUserUseCase(userRepository);
  return updateUserUseCase;
}

export { MakeUpdateUser };
