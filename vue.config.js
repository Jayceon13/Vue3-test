module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
      minChunks: 2
    }
  }
}
