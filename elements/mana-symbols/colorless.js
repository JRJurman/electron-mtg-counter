const Tram = require('Tram-One')
const svg = Tram.svg()

module.exports = (attrs) => {
  return svg`
    <svg xmlns="http://www.w3.org/2000/svg" height=${attrs.height} width=${attrs.width} viewBox="0 0 600 600" onclick=${attrs.onclick}>
      <circle cx="300" cy="300" r="300" fill="#ccc2c0"/>
      <path d="M300 60A500 500 0 0 0 540 300 500 500 0 0 0 300 540 500 500 0 0 0 60 300 500 500 0 0 0 300 60m0 90A300 300 0 0 1 150 300 300 300 0 0 1 300 450 300 300 0 0 1 450 300 300 300 0 0 1 300 150" fill="#130c0e"/>
    </svg>
  `
}
