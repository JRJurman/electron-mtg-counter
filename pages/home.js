const Tram = require('tram-one')
const html = Tram.html({
  'add-menu': require('../elements/add-menu'),
  'mana-counter': require('../elements/counter')
})

module.exports = (store, actions) => {

  const revealMenu = () => {
    actions.revealMenu()
  }

  const hideMenu = () => {
    actions.hideMenu()
  }

  const addCounter = (element) => () => {
    actions.addCounter(element)
  }

  const menu = store.menu ?
    html`<add-menu revealed=${true} addCounter=${addCounter} onmouseleave=${hideMenu} />` :
    html`<add-menu onmouseover=${revealMenu} ontouch=${revealMenu} />`

  const counters = store.counters.map(counter => html`<mana-counter element=${counter.element} count=${counter.count}/>`)

  return html`
    <div>
      ${counters}
      ${menu}
    </div>
  `
}
