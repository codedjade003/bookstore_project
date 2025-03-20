const cron = require("node-cron");
const axios = require("axios");
require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const { HfInference } = require("@huggingface/inference");

// List of potential topics
const topics = [
  // General Book Trends
  "The Evolution of Storytelling: From Oral Traditions to E-Books",
  "Why Reading Books is More Important Than Ever in the Digital Age",
  "The Rise of Audiobooks: Are They Replacing Traditional Reading?",
  "How E-Readers Are Changing the Publishing Industry",
  "The Future of Libraries in the Digital World",

  // Genres & Recommendations
  "Top 10 Must-Read Books for Every Entrepreneur",
  "The Best Science Fiction Books That Predicted the Future",
  "Why Classic Literature Still Matters Today",
  "The Most Anticipated Books of 2025",
  "Hidden Gems: Underrated Books You Need to Read",
  "The Psychology of Thriller Novels: Why We Love Suspense",
  "How Fantasy Books Inspire Creativity and Imagination",
  "A Deep Dive into the Most Iconic Mystery Novels",
  "Why Young Adult Fiction Appeals to Readers of All Ages",
  "The Best Historical Fiction Novels That Bring the Past to Life",

  // Writing & Publishing
  "How to Write a Bestselling Novel: Tips from Famous Authors",
  "The Self-Publishing Revolution: Is It the Future of Books?",
  "How AI is Changing the Way Books Are Written and Edited",
  "The Challenges of Being a Modern-Day Author",
  "The Role of Literary Agents in Traditional Publishing",
  "How to Overcome Writer’s Block: Proven Strategies from Experts",
  "The Economics of Book Publishing: What Authors Need to Know",
  "How Social Media is Shaping Book Marketing and Sales",
  "The Impact of Book Awards on an Author's Career",

  // Books & Society
  "Why Banned Books Matter: A Look at Censorship in Literature",
  "The Role of Books in Shaping Social and Political Movements",
  "How Biographies Inspire Personal Growth and Success",
  "The Science of Reading: How Books Affect Your Brain",
  "Why Book Clubs Are More Popular Than Ever",
  "The Art of Collecting Rare and Antique Books",
  "Why Poetry Is Making a Comeback in the Modern World",
  "The Role of Graphic Novels in Literature and Education",

  // Bookstores & Libraries
  "The Resurgence of Independent Bookstores in the Age of Amazon",
  "How Libraries Are Adapting to the Digital Age",
  "Why Physical Books Are Still Popular Despite Digital Alternatives",
  "How Bookstores Curate Their Collections for Readers",
  "The Most Beautiful Bookstores Around the World",
  "How Book Fairs and Literary Festivals Bring Readers Together",

  // AI & Books
  "How AI is Being Used to Recommend Books to Readers",
  "The Future of AI-Generated Books: Should We Be Worried?",
  "How AI-Powered Chatbots Are Changing the Reading Experience",
  "Can AI Write Better Novels Than Humans?",
  "How Machine Learning is Personalizing Reading Experiences",

  // Miscellaneous Fun Topics
  "How Books Have Been Adapted into Movies and TV Shows",
  "The Best Book-to-Movie Adaptations of All Time",
  "How Famous Authors Got Their Big Break",
  "The Most Expensive Books Ever Sold at Auction",
  "The Role of Books in Fantasy and Sci-Fi Worldbuilding",
  "How Books Influence Pop Culture and Music",
  "The Fascinating History of Bookbinding and Printing",
  "How Reading Before Bed Improves Sleep and Reduces Stress",
  "The Science Behind Why We Love the Smell of Old Books"
];

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//HF config
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME;

const HFclient = new HfInference(HF_API_KEY);

// mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `${process.env.MONGO_URI}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// Schedule a job to run every 24 hours (at midnight UTC)
cron.schedule("0 0 * * *", async () => {
  console.log("Running scheduled blog generation...");

  try {
    const response = await axios.post("https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/generate-blog");
    console.log("Blog generated successfully:", response.data);
  } catch (error) {
    console.error("Error generating blog post:", error.response?.data || error.message);
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create collection of documents
    const bookCollections = client.db("BookInventory").collection("books");
    

    //insert a book to the database using post method

    app.post("/upload-book", async(req, res) => {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
    })

    // get all books from database
    app.get("/all-books", async(req, res) => {
      const books = await bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    })

    // get single books from db
    // delete a book
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })
    // update a book data : patch method
    app.patch("/book/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData
        }
      }
      
      //update
      const result = await bookCollections.updateOne(filter, updateDoc, options );
      res.send(result);

    })

    // delete a book
    app.delete("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    })

    // find book by category
    app.get("/books", async(req, res) => {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
        const result = await bookCollections.find(query).toArray();
        res.send(result);
      }
    })

  // Generate a blog post
app.post("/generate-blog", async (req, res) => {
  try {
    // Pick a random topic
    const topic = topics[Math.floor(Math.random() * topics.length)];

    // Construct prompt
    const prompt = `Write an insightful blog post about "${topic}". The post should be engaging, informative, and structured like a professional article.`;

    // Generate blog content
    const response = await HFclient.textGeneration({
      model: MODEL_NAME,
      inputs: prompt,
      parameters: {
        max_new_tokens: 800
      }
    });

    // Extract the generated content
    let generatedText = response.generated_text;

    // Remove the prompt if it's included in the response
    if (generatedText.startsWith(prompt)) {
      generatedText = generatedText.replace(prompt, "").trim();
    }

    // Remove excessive newlines or formatting hints
    generatedText = generatedText.replace(/\*\*.*?\*\*/g, "").trim();


    // Store the generated blog post in MongoDB
    const blogPost = {
      title: topic,
      content: generatedText,
      createdAt: new Date(),
    };

    const result = await client.db("BookInventory").collection("blogs").insertOne(blogPost);
    res.json({ success: true, blog: blogPost, insertedId: result.insertedId });

  } catch (error) {
    console.error("Error generating blog:", error);
    res.status(500).json({ error: "Failed to generate blog post" });
  }
});
// Fetch all blogs
app.get("/all-blogs", async (req, res) => {
  const blogs = await client.db("BookInventory").collection("blogs").find().toArray();
  res.send(blogs);
});

// Fetch a single blog by ID
app.get("/blog/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await client.db("BookInventory").collection("blogs").findOne({ _id: new ObjectId(id) });
  res.send(blog);
});

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})