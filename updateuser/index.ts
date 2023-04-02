import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UserRepository } from "../src/Repository/UserRepository";
import { UpdateUserUseCase } from "../src/UseCase/UpdateUser";
import { MakeUpdateUser } from "../src/UseCase/Factories/UpdateUser/MakeUpdateUser";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const { id, name, email, age } = req.body;

  const updateUserUseCase = await MakeUpdateUser();

  updateUserUseCase.execute(id, name, email, age);

  context.res = {
    // status: 200, /* Defaults to 200 */
  };
};

export default httpTrigger;
