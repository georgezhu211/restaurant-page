import { about } from './about'
import { contact } from './contact'
import { gallery } from './gallery'
import { menu } from './menu'
import { news } from './news'

const tabs = (() => {
  const tabs = document.querySelectorAll('.tabs')
  tabs.forEach((tab) => {
    tab.addEventListener('click', render)
  })

  function render() {
    switch(this.id) {
      case "home":
        console.log('home')
        break;
      case "about":
        about.render()
        break;
      case "menu":
        menu.render()
        break;
      case "news":
        news.render()
        break;
      case "contact":
        contact.render()
        break;
      case "gallery":
        gallery.render()
        break;
    }
  }
})();