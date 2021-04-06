const about = (() => {
  const content = document.querySelector('#content')
  
  function render() {
    content.innerHTML = ''
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'ABOUT'
    const text = document.createElement('p')
    text.className = 'about'
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    content.appendChild(title)
    content.appendChild(text)
  }

  return {
    render
  }
})();

export {
  about
}