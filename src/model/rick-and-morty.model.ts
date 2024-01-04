import axios from "axios";
import { iMessage } from "../interfaces/iMessage";
import { MessageUtils } from "../utils/message.utils";

export class RickAndMortyModel {
  private url: string =
    process.env.URL_API || "https://rickandmortyapi.com/graphql";
  async getAllCharacter(): Promise<iMessage> {
    try {
      const response = await axios.post(this.url, {
        query: `
        query {
                characters() {
                  info {
                    count
                  }
                  results {
                    name
                  }
                }
        }
        `,
      });
      const characters = response.data.data.characters;
      return MessageUtils(
        false,
        200,
        "Datos obtenidos correctamente",
        characters
      );
    } catch (error) {
      return MessageUtils(true, 500, "Error al obtener los datos");
    }
  }

  async getAllHumanCharacter(): Promise<iMessage> {
    try {
      const response = await axios.post(this.url, {
        query: `
                query {
                        characters(filter: { species: "human" }) {
                          info {
                            count
                          }
                          results {
                            name
                          }
                        }
                }
                `,
      });
      const characters = response.data.data.characters;
      return MessageUtils(
        false,
        200,
        "Datos obtenidos correctamente",
        characters
      );
    } catch (error) {
      return MessageUtils(true, 500, "Error al obtener los datos");
    }
  }
}
