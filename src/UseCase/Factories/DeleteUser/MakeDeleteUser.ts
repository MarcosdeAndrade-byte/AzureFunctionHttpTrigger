import { UserRepository } from "../../../Repository/UserRepository";
import { DeleteUserUseCase } from "../../DeleteUser";

async function MakeDeleteUser() {
  const userRepository = new UserRepository();
  const deleteUser = new DeleteUserUseCase(userRepository);
  return deleteUser;
}

export { MakeDeleteUser };
