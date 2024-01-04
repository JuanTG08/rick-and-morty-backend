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

  async getAllHumanCharacter(pageNumber: number): Promise<iMessage> {
    try {
      const response = await axios.post(this.url, {
        query: `
                query {
                        characters(page: ${pageNumber}, filter: { species: "human" }) {
                          info {
                            pages,
                            count
                          },
                          results {
                            name,
                            species,
                            gender,
                            image,
                            status
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

  async getAllNoHumanCharacter(pageNumber: number): Promise<iMessage> {
    try {
      let _characters: any = [];
      let pageCurrent = 1;
      let pageFilter = 1;
      do {
        if (_characters.length == 20 && pageCurrent == pageNumber) break;
        if (_characters.length == 20) {
          _characters = [];
          pageCurrent++;
        }
        const response = await axios.post(this.url, {
          query: `
                  query {
                          characters(page: ${pageFilter}) {
                            results {
                              name,
                              species,
                              gender,
                              image,
                              status
                            }
                          }
                  }
                  `,
        });
        const characters = response.data.data.characters.results;
        const charactersNoHuman = characters.filter(
          (character: any) =>
            character.species != "Human" &&
            _characters.length < 20 &&
            _characters.push(character)
        );
        pageFilter++;
      } while (_characters.length <= 20);
      const getAllCharacters = await this.getAllCharacter();
      const getAllHumans = await this.getAllHumanCharacter(1);
      if (
        getAllCharacters.error ||
        getAllCharacters.statusCode != 200 ||
        getAllHumans.error ||
        getAllHumans.statusCode != 200
      )
        return MessageUtils(true, 500, "Error al obtener los datos");
      const charactersAll = getAllCharacters.payload;
      const charactersHuman = getAllHumans.payload;
      const pagesNoHuman = Math.floor(
        (charactersAll.info.count - charactersHuman.info.count) / 20
      );
      const noHumanTotal =
        charactersAll.info.count - charactersHuman.info.count;

      return MessageUtils(false, 200, "Datos obtenidos correctamente", {
        info: {
          pages: pagesNoHuman,
          count: noHumanTotal,
        },
        results: _characters,
      });
    } catch (error) {
      console.log(error);
      return MessageUtils(true, 500, "Error al obtener los datos");
    }
  }
}
