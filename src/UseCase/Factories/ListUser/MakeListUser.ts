import { User } from "@prisma/client";
import { UserRepository } from "../../../Repository/UserRepository";
import { ListUserUseCase } from "../../ListUser";

async function MakeListUser() {
  const userRepository = new UserRepository();
  const listUserUseCase = new ListUserUseCase(userRepository);
  return listUserUseCase;
}

export { MakeListUser };
