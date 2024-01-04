import { Request, Response } from "express";
import { MessageUtils } from "../utils/message.utils";
import { RickAndMortyModel } from "../model/rick-and-morty.model";

export class RickAndMorty {
  static async getAllCharacter(req: Request, res: Response) {
    try {
      const modelRickAndMorty = new RickAndMortyModel();
      const getCharacters = await modelRickAndMorty.getAllCharacter();
      return res.status(getCharacters.statusCode).json(getCharacters);
    } catch (error) {
      return res
        .status(500)
        .json(MessageUtils(true, 500, "Error al intentar obtener los datos"));
    }
  }

  static async getAllHumanCharacter(req: Request, res: Response) {
    try {
      const modelRickAndMorty = new RickAndMortyModel();
      const getHumanCharacters = await modelRickAndMorty.getAllHumanCharacter();
      return res.status(getHumanCharacters.statusCode).json(getHumanCharacters);
    } catch (error) {
      return res
        .status(500)
        .json(MessageUtils(true, 500, "Error al intentar obtener los datos"));
    }
  }
}
