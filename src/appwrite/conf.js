import Config from '../Config/Config'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

// handling the database.
const Status = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    // add other statuses as needed
};
export class DatabaseService {
    Client = new Client();
    databases;
    bucket;

    
    constructor(){
        this.Client
        .setEndpoint(Config.appwrite_endpoint)
        .setProject(Config.appwrite_projectid)

        this.databases = new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }

    
    async createpost({title, slug, content, featuredimage, status, userid}){
        try{
            return await this.databases.createDocument(
                Config.appwrite_databaseid,
                Config.appwrite_collectionsid,
                slug,
                {
                    title,content, featuredimage, userid,status 
                }
            )
        }
        catch(error){

            console.log(error);
        }
    }

    async updatepost(slug,{title, content, featuredimage, status, userid}){
        try{
            return await this.databases.updateDocument(
                Config.appwrite_databaseid,
                Config.appwrite_collectionsid,
                slug,
                {
                    title, content, featuredimage, status, userid
                }
            )
        }
        catch(error){
            console.log(error)
        }
    }

    async deletepost(slug){
        try{
            await this.databases.deleteDocument(
                Config.appwrite_databaseid,
                Config.appwrite_collectionsid,
                slug
            )
            return true
        }
        catch(error){
            console.log(error)
            return false
        }
    }

    async getpost(slug){
        try{
            return await this.databases.getDocument(
                Config.appwrite_databaseid,
                Config.appwrite_collectionsid,
                slug
            )
        }
        catch(error){
            console.log(error)
        }
    }

    async getposts(queries= [Query.equal("status",Status.ACTIVE)]){
        try{
            return await this.databases.listDocuments(
                Config.appwrite_collectionsid,
                Config.appwrite_databaseid,
                queries,
                100,0

            )
        }
        catch(error){
            console.log(error)
        }
    }

    // functional services end here 
    // File upload Services: 
    async uploadfile(file){
        try{
            return await this.bucket.createFile(
                Config.appwrite_bucketid,
                ID.unique(),
                file,
            )
        }
        catch(error){
            console.log(error)
        }
    }



    async deletefile(fileId){
        try{
            return await this.bucket.deleteFile(
                Config.appwrite_bucketid,
                fileId
            )
            return true
        }
        catch(error){
            console.log(error)
            return false
        }
    }



    async getfilepreview(fileId){
        try{
            return this.bucket.getFilePreview(
                Config.appwrite_bucketid,
                fileId
            )
        }
        catch(error){
            console.log(error)
        }
    }
}


const dbservice = new DatabaseService();
export default dbservice