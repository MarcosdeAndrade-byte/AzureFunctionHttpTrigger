import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserRepository } from "../src/Repository/UserRepository";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { id } = (req.body);

    const userRepository = new UserRepository();

    userRepository.deleteUser(id);

    context.res = {
        // status: 200, /* Defaults to 200 */
    };

};

export default httpTrigger;