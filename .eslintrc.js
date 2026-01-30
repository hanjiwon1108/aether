module.exports = {
  extends: ["next/core-web-vitals", "plugin:boundaries/strict"],
  plugins: ["boundaries"],
  settings: {
    "boundaries/elements": [
      {
        type: "app",
        pattern: "app/*",
      },
      {
        type: "app_layer",
        pattern: "app_layer/*",
      },
      {
        type: "widgets",
        pattern: "widgets/*",
      },
      {
        type: "features",
        pattern: "features/*",
      },
      {
        type: "entities",
        pattern: "entities/*",
      },
      {
        type: "shared",
        pattern: "shared/*",
      },
    ],
  },
  rules: {
    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: ["app"],
            allow: ["app_layer", "widgets", "features", "entities", "shared"],
          },
          {
            from: ["app_layer"],
            allow: ["widgets", "features", "entities", "shared"],
          },
          {
            from: ["widgets"],
            allow: ["features", "entities", "shared"],
          },
          {
            from: ["features"],
            allow: ["entities", "shared"],
          },
          {
            from: ["entities"],
            allow: ["shared"],
          },
          {
            from: ["shared"],
            allow: ["shared"],
          },
        ],
      },
    ],
  },
};
