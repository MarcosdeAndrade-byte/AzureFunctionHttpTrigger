import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UserRepository } from "../src/Repository/UserRepository";
import { MakeCreateUser } from "../src/UseCase/Factories/CreateUser/MakeCreateUser";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const { name, email, age } = req.body;

  const makeCreateUser = await MakeCreateUser();

  makeCreateUser.execute(name, email, age);
};

export default httpTrigger;
