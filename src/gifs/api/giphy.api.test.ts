import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphy.api", () => {
  test("should be configured correctly", () => {
    // console.log(giphyApi.defaults);
    const params = giphyApi.defaults.params;
    console.log(params);
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.lang).toBe("es");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(params).toStrictEqual({
      lang: "es",
      api_key: "IdOLGtruBQxfBYZ5tE18k502co8HU2re",
    });
    // expect(giphyApi.defaults.params.lang);
  });
});
