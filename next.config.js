module.exports = {
  webpack(config) {
    Object.assign(config.resolve.alias, {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "mapbox-gl": "maplibre-gl",
    });

    return config;
  },
};
