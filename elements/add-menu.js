const Tram = require('tram-one')
const html = Tram.html({
  'add-button': require('./add-button'),
  'mana-generic': require('./mana-symbols/generic'),
  'mana-black': require('./mana-symbols/black'),
  'mana-blue': require('./mana-symbols/blue'),
  'mana-colorless': require('./mana-symbols/colorless'),
  'mana-green': require('./mana-symbols/green'),
  'mana-red': require('./mana-symbols/red'),
  'mana-white': require('./mana-symbols/white')
})

module.exports = (attrs) => {
  const style = `
    cursor: pointer;
    position: fixed;
    bottom: 1em;
    right: 1em;
    text-align: center;
  `

  const options = attrs.revealed ?
    html`
      <div>
        <div><mana-black onclick=${attrs.addCounter('black')} height="2em" width="2em" /></div>
        <div><mana-blue onclick=${attrs.addCounter('blue')} height="2em" width="2em" /></div>
        <div><mana-green onclick=${attrs.addCounter('green')} height="2em" width="2em" /></div>
        <div><mana-red onclick=${attrs.addCounter('red')} height="2em" width="2em" /></div>
        <div><mana-white onclick=${attrs.addCounter('white')} height="2em" width="2em" /></div>
        <div><mana-colorless onclick=${attrs.addCounter('colorless')} height="2em" width="2em" /></div>
        <mana-generic onclick=${attrs.addCounter('generic')} height="2.9em" width="2.9em" style="margin-bottom: -0.3em;" />
      </div>
    ` :
    html`<add-button />`

  return html`
    <div style=${style} onmouseleave=${attrs.onmouseleave} onmouseover=${attrs.onmouseover} ontouch=${attrs.ontouch} >
      ${options}
    </div>
  `
}
