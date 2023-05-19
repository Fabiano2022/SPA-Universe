const linkHome = document.querySelector('.link-home')
const linkUniverse = document.querySelector('.link-universe')
const linkExplorer = document.querySelector('.link-explorer')
const body = document.querySelector('body')

linkHome.classList.add('click')

linkHome.addEventListener('click', () => {
  linkHome.classList.add('click')

  linkUniverse.classList.remove('click')
  linkExplorer.classList.remove('click')

  document.body.classList.add('home')
  document.body.classList.remove('universe')
  document.body.classList.remove('exploration')
})

linkUniverse.addEventListener('click', () => {
  linkUniverse.classList.add('click')

  linkHome.classList.remove('click')
  linkExplorer.classList.remove('click')

  document.body.classList.add('universe')
  document.body.classList.remove('home')
  document.body.classList.remove('exploration')
})

linkExplorer.addEventListener('click', () => {
  linkExplorer.classList.add('click')

  linkUniverse.classList.remove('click')
  linkHome.classList.remove('click')

  document.body.classList.add('exploration')
  document.body.classList.remove('home')
  document.body.classList.remove('universe')
})

function route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, '', event.target.href)
  
    handle()
  }

  window.route = () => route()

const routes = {
  '/': '/pages/home.html',
  '/universe': './pages/universe.html',
  '/explorer': './pages/explorer.html',
  404: './pages/404.html'
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route)
    .then(data => {
      return data.text()
    })
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
}

handle()

window.onpopstate = () => handle()

  