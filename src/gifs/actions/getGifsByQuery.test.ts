import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";

describe("getGifsByQuery", () => {
  const mock = new AxiosMockAdapter(giphyApi);
  //   test("should return a list of gifs", async () => {
  //     const gifs = await getGifsByQuery("goku");
  //     const [gif1] = gifs;
  //     // console.log(gif1);
  //     expect(gif1).toStrictEqual({
  //       id: expect.any(String),
  //       height: expect.any(Number),
  //       width: expect.any(Number),
  //       title: expect.any(String),
  //       url: expect.any(String),
  //     });
  //   });

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, { data: [] });

    const gifs = await getGifsByQuery("goku");
    console.log(gifs);
  });
});
