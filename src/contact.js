const contact = (() => {
  const content = document.querySelector('#content')
  const contactTab = document.querySelector('#contact')

  contactTab.addEventListener('click', render)
  function render() {
    content.innerHTML = ''
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'CONTACT'
    const text = document.createElement('p')
    text.className = 'contact'
    text.textContent = "Nulla dignissim in turpis ut scelerisque. In porttitor leo lacus, sed rhoncus nisl pretium sed. Donec gravida dapibus mauris, et ultricies tellus. Cras molestie est vitae nisl auctor iaculis. Sed mattis quam faucibus risus tempus, eget placerat justo tincidunt. Sed dictum semper viverra. Proin non erat in mi efficitur eleifend. Quisque hendrerit venenatis libero a dapibus. Proin at tellus tincidunt, porttitor tellus sed, pretium nisl. Nunc a urna leo. Sed dui urna, bibendum vitae convallis laoreet, molestie eu nulla. Curabitur sit amet vulputate quam. Integer eu felis sapien. Curabitur sagittis tempor massa, eget venenatis massa suscipit quis."

    content.appendChild(title)
    content.appendChild(text)
  }

  return {
    render
  }
})();

export {
  contact
}