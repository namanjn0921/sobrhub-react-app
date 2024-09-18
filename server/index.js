const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const UserModel = require("./models/user")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://paridhi20365:bcTw2lA8tBhEYvCm@cluster0.mv89r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch (err => res.json(err))
})

app.listen(3000, () => {
  console.log("server is running")
})
