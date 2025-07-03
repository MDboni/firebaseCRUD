require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lum0bq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("faireBase").collection("Fairebase");

    app.post('/faire',async(req,res)=>{
        const abc = req.body
        console.log(abc);
        const result = await database.insertOne(abc);
        res.send(result);
    })

    app.get('/faire', async(req,res)=>{
        try{
          const result = await database.find().toArray() ;
          console.log("GET /users =>", result);
          res.send(result);
        }catch(err){
           console.log(err);
           res.status(500).send({error:"Something went wrong"}) ;   
        }
    })

    app.delete('/faire/:id',async(req,res)=>{
        const id = req.params.id 
        const query = {_id : new ObjectId(id)}
        const result = await database.deleteOne(query);
        res.send(result)
    })

    app.get('/faire/:id',async(req,res)=>{
       const id = req.params.id
       const query = { _id: new ObjectId(id) };
       const result = await database.findOne(query);
       res.send(result)
    })

    app.put('/faire/:id',async(req,res)=>{
        const id = req.params.id;
        const updatedData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: false }; 
        const updateDoc = {
          $set: updatedData,
        };
        const result = await database.updateOne(filter, updateDoc, options);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
 
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
