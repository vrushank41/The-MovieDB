import {MongoClient} from "mongodb"
import { NextResponse } from "next/server"

export async function GET(request){
    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    await client.connect()
    const db = client.db("stock")
    const collection = db.collection("inventory")
    const data = await collection.find({}).toArray()
    await client.close()
    return new NextResponse(JSON.stringify(data), {
        headers: {
        "content-type": "application/json",
        },
    })
}
