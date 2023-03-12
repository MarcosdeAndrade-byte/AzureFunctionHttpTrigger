import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserRepository } from "../src/Repository/UserRepository";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { name,email,age } = (req.body);

    const userRepository = new UserRepository();

    userRepository.createUser(name,email,age);
};

export default httpTrigger;