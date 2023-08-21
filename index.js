import axios from "axios";
import express from "express"

const app = express();
const port = 3000;

// Telling express location of static files.
app.use(express.static("public"));

const API_URL = "https://v2.jokeapi.dev/joke/";

// Establishing port to run the project.
app.listen(port, (error) => {
    if(error) {
        console.log(`Unable to activate port ${3000}`);
    }
    else {
        console.log(`Listening on port ${port} or follow by clicking -> http://localhost:${port}`);
    }
})

// Listening for home page with endpoint "/".
app.get("/", async (req, res) => {
    try {
        const request = await axios.get(API_URL + "Any?type=single");
        const result = request.data;
        // console.log(result);


        res.render("index.ejs", {
            content: result.joke
        })
    }
    catch(error) {
        res.render("index.ejs");
        res.status(404).send(error.message);
    }
})

app.get("/get-random-joke", (req, res) => {
    res.redirect("/");
})