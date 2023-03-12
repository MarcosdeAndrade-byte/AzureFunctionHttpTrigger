import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserRepository } from "../src/Repository/UserRepository";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { email } = (req.body);
    
    const userRepository = new UserRepository();

    const user = await userRepository.listUser(email);

    context.res = {
        body: user
    };

};

export default httpTrigger;