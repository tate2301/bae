module.exports = {
    presets: [
      [
        "next/babel",
        {
          "preset-env": {},
          "transform-runtime": {},
          "styled-jsx": {},
          "class-properties": {},
          "preset-typescript": {}
        }
      ]
    ],
    plugins: ["@babel/plugin-transform-runtime"]

  };