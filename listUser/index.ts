import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UserRepository } from "../src/Repository/UserRepository";
import { MakeListUser } from "../src/UseCase/Factories/ListUser/MakeListUser";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const { email } = req.body;

  const listUserUseCase = await MakeListUser();
  const user = await listUserUseCase.execute(email);

  const userRepository = (context.res = {
    body: user,
  });
};

export default httpTrigger;
