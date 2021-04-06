var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");
var cors = require("cors");

var tasks = [
  { id: "1", text: "Read description of programming challenge" },
  { id: "2", text: "Implement awesome web app" },
  { id: "3", text: "Polish project" },
  { id: "9", text: "Send solution to Anthony" },
];

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/api/tasks", function (req, res) {
  res.json(tasks);
});

app.post("/api/tasks", function (req, res) {
  if (!req.body || !req.body.id || !req.body.text) {
    res.status(400).send("Invalid task format");
    return;
  }
  if (tasks.find((fi) => fi.id == req.body.id)) {
    res.status(409).send("Conflict. Task already defined");
    return;
  }

  tasks.push(req.body);
  res.status(201).send();
});

app.put("/api/tasks/:id", function (req, res) {
  console.log("PUT a new Task", req.params.id, req.body);
  if (tasks.findIndex((x) => x.id == req.params.id) < 0) {
    res.status(404).send();
    return;
  }

  var foundIndex = tasks.findIndex((x) => x.id == req.params.id);

  tasks[foundIndex].text = req.body.text;
  res.status(204).send();
});

app.delete("/api/tasks/:id", function (req, res) {
  if (tasks.findIndex((x) => x.id == req.params.id) < 0) {
    res.status(404).send();
    return;
  }

  let findIndex = tasks.findIndex((x) => x.id == req.params.id)
  tasks.splice(findIndex, 1);
  console.log("🚀 ~ file: index.js ~ line 70 ~ tasks", tasks)

  res.status(204).send();
});

app.listen(3001, function () {
  console.log("To-Do app listening on port 3000!");
});
