const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const database = "newTrial";

async function getData() {
  const result = await client.connect();
  let databaseData = result.db(database);
  let collection = databaseData.collection("newTrial");
  let data = await collection.find().toArray();
  console.log(data);
}

getData();
