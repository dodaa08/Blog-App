import Config from "../Config/Config";
import { Client, Account, ID } from "appwrite";

export class AuthServices{
    Client = new Client();
    Account;


    constructor(){
        this.Client
        .setEndpoint(Config.appwrite_endpoint)
        .setProject(Config.appwrite_projectid)

        this.Account = new Account(this.Client);

    }

    async createAccount({email,password, name}){
        try{
            const Useracc = await this.Account.create(ID.unique() , email, password, name)
            if(Useracc){
               // create a login
            }
            else{
                return Useracc
            }
        }

        catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
           return await Account.createEmailPasswordSession(email, password);

        }
        catch (error){
            throw error
        }
    }

    async getuser(){
        try{
            return await this.Account.get();
        }
        catch(error){
            console.log("Not loged in");
        }
        return null;
    }

    async logout(){
        return await this.Account.deleteSessions()
    }
}

const authservices = new AuthServices();


export default authservices;




