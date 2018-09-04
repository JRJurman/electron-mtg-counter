const Tram = require('tram-one')

const app = new Tram({defaultRoute: '/'})
app.addRoute('/', require('./pages/home'))
app.addActions({
  menu: require('./actions/menu'),
  counters: require('./actions/counters')
})
app.start('.main')
