// Importamos las librerías
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { config } from "dotenv";
config();

// Creamos la variable APP para el inicio del servidor
const app = express();

// Configuraciones previas
app.set("port", process.env.PORT);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Importamos las rutas ***
import rick_and_morty_routes from "./routes/rick-and-morty.routes"; // Ruta para obtener la información de Rick And Morty
// Establecemos las rutas ***
app.use("/api/rick_and_morty", rick_and_morty_routes);

export default app;
