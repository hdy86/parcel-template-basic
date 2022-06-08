// import autoprefixer from 'autoprefixer' // 자바스크립트 가져오기 (ESM)
// const autoprefixer = require('autoprefixer') // Node.js 가져오기 (CommonJS)

// export { // 자바스크립트 내보내기 (ESM)
//   plugins: [
//     autoprefixer
//   ]
// }
// module.exports = { // Node.js 내보내기 (CommonJS)
//   plugins: [
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
