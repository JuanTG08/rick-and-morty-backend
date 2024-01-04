// Creamos la instancia de la ruta por defecto en express
import { Router } from "express";
import { RickAndMorty } from "../controller/rick-and-morty.controller";
// Importamos funciones de nuestro controlador

const router = Router();

/*
    CRUD
    C: CREATE
    R: RELOAD
    U: UPDATE
    D: DELETE
*/

router.route("/handler-R-all-character").get(RickAndMorty.getAllCharacter); // Listamos todos los personajes de Rick And Morty
router.route("/handler-R-human-character/:pageNumber").get(RickAndMorty.getAllHumanCharacter); // Listamos todos los personajes de Rick And Morty
router.route("/handler-R-no-human-character/:pageNumber").get(RickAndMorty.getAllNoHumanCharacter); // Listamos todos los personajes de Rick And Morty

export default router;
