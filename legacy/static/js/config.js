const lightParchment = "#eadcc8";
const darkParchment = "#8c6239";

export default {
  columnCount: 60,
  layers: [
    {
      name: "background",
      style: {
        bg: darkParchment,
      },
    },
    {
      name: "hallways",
      assets: [
        { row: 6, col: 20, xspan: 15, bg: lightParchment },
        { row: 6, col: 20, yspan: 5, bg: lightParchment },
        { row: 5, col: 23, yspan: 2, bg: lightParchment },
        { row: 5, col: 27, yspan: 2, bg: lightParchment },
        { row: 5, col: 31, yspan: 2, bg: lightParchment },
        { row: 6, col: 35, yspan: 20, bg: lightParchment },
        { row: 10, col: 5, xspan: 50, bg: lightParchment },
      ],
    },
    {
        name: "rooms",
        assets: [
          { row: 5, col: 20, xspan: 2, yspan: 2, bg: lightParchment },
          { row: 3, col: 22, xspan: 3, yspan: 2, bg: lightParchment },
          { row: 3, col: 26, xspan: 3, yspan: 2, bg: lightParchment },
          { row: 3, col: 30, xspan: 3, yspan: 2, bg: lightParchment },
        ],
      },

    // {
    //   name: "grass",
    //   assets: [
    //     { row: 1, col: 1, xspan: 8, yspan: 8, bg: "#46c700" },
    //     { row: 1, col: 9, xspan: 2, yspan: 3, bg: "#46c700" },
    //   ],
    // },
    // {
    //   name: "water",
    //   assets: [
    //     { row: 1, col: 4, xspan: 5, yspan: 2, bg: "#0068cf" },
    //     { row: 2, col: 3, xspan: 2, yspan: 2, bg: "#0068cf" },
    //     { row: 2, col: 8, xspan: 2, yspan: 2, bg: "#0068cf" },
    //     { row: 7, col: 8, xspan: 2, yspan: 2, bg: "#0068cf" },
    //     { row: 3, col: 2, xspan: 2, yspan: 5, bg: "#0068cf" },
    //     { row: 7, col: 3, xspan: 2, yspan: 2, bg: "#0068cf" },
    //     { row: 8, col: 4, xspan: 6, yspan: 1, bg: "#0068cf" },
    //     { row: 3, col: 9, xspan: 1, yspan: 6, bg: "#0068cf" },
    //   ],
    // },
    // {
    //   name: "characters",
    //   assets: [
    //     {
    //       name: "cat",
    //       row: 4,
    //       col: 8,
    //       bg: "url(https://scarletviolet.pokemon.com/assets/img/global/char_p1.png)",
    //     },
    //   ],
    // },
  ],
};
