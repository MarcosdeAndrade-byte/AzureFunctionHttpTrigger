import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UserRepository } from "../src/Repository/UserRepository";
import { MakeDeleteUser } from "../src/UseCase/Factories/DeleteUser/MakeDeleteUser";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const { id } = req.body;

  const makeDeleteUser = await MakeDeleteUser();

  makeDeleteUser.execute(id);

  const userRepository = (context.res = {
    // status: 200, /* Defaults to 200 */
  });
};

export default httpTrigger;
