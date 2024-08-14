import { Client, Account, Databases , Storage} from "appwrite";
import { APPWRITE_URL, PROJECT_ID } from "./constants";


const client = new Client()
  .setEndpoint(APPWRITE_URL) // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { account , client , database , storage };