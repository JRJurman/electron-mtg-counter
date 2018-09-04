const Tram = require('tram-one')
const html = Tram.html({
})

module.exports = (attrs) => {
  const style = `
  `

  return html`
    <div style=${style}>
      ${attrs.element}: ${attrs.count}
    </div>
  `
}
