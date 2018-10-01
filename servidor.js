var express = require("express");
var app = express();

// platzi.com/js -> Siguiente curso a realizar

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong> Home </strong>");
}

function cursos(l, resultado) //por motivo del get, la funcion debe utilizar dos parametros, uno que solicita informacion y otro que la provee.
{
  resultado.send("Estos son los <strong> Cursos </strong>");
}

app.listen(8989);
