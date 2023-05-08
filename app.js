import express from "express";
import path from "path";
import hbs from "hbs";
import * as url from "url";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

console.log("miport: ", port);

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/views/partials"));

//Servir contenido estatico
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Rafa",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Rafa",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Rafa",
    titulo: "Curso de Node",
  });
});

//OPTION 1
app.get("/generic", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/generic.html"));
});

//OPTION 2
app.get("/elements", (req, res) => {
  res.sendFile("elements.html", { root: __dirname + "/public" });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
