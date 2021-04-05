const gallery = (() => {
  const content = document.querySelector('#content')
  const galleryTab = document.querySelector('#gallery')

  galleryTab.addEventListener('click', render)
  function render() {
    content.innerHTML = ''
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'GALLERY'
    const text = document.createElement('p')
    text.className = 'gallery'
    text.textContent = "Nunc tincidunt semper turpis, nec accumsan nulla viverra vitae. Praesent quis tempor tellus. Nullam convallis tempor quam, non porta mi malesuada at. Vivamus vitae congue augue. Suspendisse vel posuere orci. Curabitur finibus suscipit vestibulum. Fusce felis leo, luctus et ante eget, cursus porttitor lectus. Aenean porta molestie eros, quis eleifend quam accumsan ut. Donec a purus sed leo efficitur auctor. Aenean dui eros, facilisis sit amet lacus et, vulputate ultricies leo. Proin finibus mauris ac sapien interdum, a facilisis leo egestas. Sed vitae pulvinar leo. Aenean nibh eros, tincidunt id felis sit amet, sagittis tincidunt dolor. Sed nec metus eu neque ornare laoreet vitae nec velit. Nullam urna ante, finibus a lorem sed, ultrices maximus felis."

    content.appendChild(title)
    content.appendChild(text)
  }

  return {
    render
  }
})();

export {
  gallery
}