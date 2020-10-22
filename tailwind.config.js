module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // enabled: true,
    content: [
    "./src/**/*.js", 
    "./src/pages/*.js", 
    "./src/**/*.jsx", 
    "./src/**/*.ts", 
    "./src/**/*.tsx"
  ]},
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
