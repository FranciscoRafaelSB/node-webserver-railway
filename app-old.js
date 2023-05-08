import http from "http";

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // const persona = {
    //   id: 1,
    //   nombre: "Juan",
    // };
    // res.write(JSON.stringify(persona));
    // res.write("id,nombre\n");
    // res.write("1,Juan\n");

    res.write("Hola mundo");
    res.end();
  })
  .listen(8080);

console.log("escuchando el puerto 8080");
