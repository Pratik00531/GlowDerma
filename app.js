import express from "express";
const app =  express();


app.use(express.static("content"))

// severobject.httpmethod("ENDPOINT", request-response callback)

let items = [{id:1, name:"Face Wash"}, {id:2, name:"Body Wash"}]
app.get("/product/:pid", (req, res) => {
    let pid = parseInt(req.params.pid)
    let product = items.find(x => x.id === pid)
    if(product){
        res.status(200).send(`Your requested product is ${product.name}`)
    }
    else{
        res.status(400).send("Product are not found")
    }
})


app.post("/product", (req, res) => {
  console.log(req)
  res.send("Product has been added successfully")
}
)

app.get("/", (req, res) => {
    res.sendFile((path.join(__dirname, "content", "index.html")))
})

app.get("/home", (req, res) => {
  res.send("<h1>Welcome to Home<h1>")
})
app.get("/about", (req, res) => {
  res.send("<h2>Here About the Company!</h2>")
})
app.get("/contact", (req, res) => {
  res.send("you can contact us at <strong>1234567890</strong>")
})
app.get("/product", (req, res) => {
  res.send("Here are the Products!")
})
app.get("/categories", (req, res) => {
  res.send("we have more than 50+ categories")
})
app.get("/policy", (req, res) => {
  res.send("We are trusted by 1000+ customers and government")
})

let port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})

app.post("/product", (req, res) => {
  const product = req.body;
  items.push(product)
  res.json({
    message: "Product has been added successfully",
    product: product
  })
}
)
