const Tram = require('tram-one')
const html = Tram.html({
})

module.exports = (attrs) => {
  const style = `
    border-radius: 50%;
    background: var(--text-color);
    color: var(--bg-color);
    width: 2em;
    height: 2em;
    line-height: 1.8em;
    text-align: center;
    font-size: 1.4em;
  `
  return html`
    <div style=${style} onclick=${attrs.onclick}>
      +
    </div>
  `
}
