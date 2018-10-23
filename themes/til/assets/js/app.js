// Loading webfont.
WebFont.load({
  google: {
    families: ['Roboto+Mono:400,700']
  }
});

// Switch Theme
const switchThemeItem = document.querySelectorAll('.switch-theme-item')
const body = document.querySelector('body')
const themes = ['light', 'dark']

let theme = localStorage.getItem('theme')
if (themes.indexOf(theme) === -1) {
  theme = 'light'
}

window.addEventListener('DOMContentLoaded', () => {
  body.className = theme
})

switchThemeItem.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.currentTarget
    let theme = target.dataset.theme
    localStorage.setItem('theme', theme)
    body.className = theme
  })
})