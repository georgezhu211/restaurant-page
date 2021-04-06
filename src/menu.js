const menu = (() => {
  const content = document.querySelector('#content')
  
  function render() {
    content.innerHTML = ''
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'MENU'
    const text = document.createElement('p')
    text.className = 'menu'
    text.textContent = "Proin fermentum molestie faucibus. Suspendisse quis est et lectus dapibus suscipit. Nullam non tempor mauris, sit amet volutpat sapien. Fusce quis erat erat. Nunc nec erat et massa vestibulum faucibus. Nunc elementum ipsum risus, a lobortis ipsum vehicula eu. Vestibulum vitae suscipit neque. Sed sodales quam et eros sodales, sed venenatis est lacinia. Morbi ultrices vehicula sem in suscipit. Sed congue leo non arcu aliquam, quis tempus ante pharetra. Mauris et sem eget orci congue tempus. Donec fringilla vestibulum iaculis."

    content.appendChild(title)
    content.appendChild(text)
  }

  return {
    render
  }
})();

export {
  menu
}