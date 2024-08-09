const Config = {
    appwrite_endpoint : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwrite_projectid : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwrite_databaseid : String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwrite_collectionsid : String(import.meta.env.VITE_APPWRITE_COLLECTIONSID),
    appwrite_bucketid : String(import.meta.env.VITE_APPWRITE_BUCKETID),

}

export default Config