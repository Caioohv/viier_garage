let content = require('./content.json')

const lamps = content.filter(el => el.groups.indexOf(`lamps`) !== -1)

const headlights = content.filter(el => el.groups.indexOf(`headlights`) !== -1)

const gol = content.filter(el => el.groups.indexOf(`gol`) !== -1)
