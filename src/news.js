const news = (() => {
  const content = document.querySelector('#content')
  
  function render() {
    content.innerHTML = ''
    const title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'NEWS'
    const text = document.createElement('p')
    text.className = 'news'
    text.textContent = "Integer ac est et elit accumsan dignissim. Aliquam eros mauris, congue vitae accumsan in, faucibus a felis. Sed consequat iaculis posuere. Donec iaculis facilisis erat eget euismod. Pellentesque non sodales nisi, vel eleifend magna. Nam placerat ac neque et pharetra. Duis venenatis lorem vel mi finibus aliquet. Quisque eget quam nec orci congue pulvinar. Morbi mattis eu tellus ac consequat. Suspendisse auctor, sem vitae hendrerit dapibus, felis arcu aliquam urna, sit amet pharetra nunc eros sed eros. Maecenas feugiat sodales erat quis mattis. Aliquam feugiat ligula maximus, condimentum libero sed, consectetur lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque faucibus sapien id ipsum molestie ultrices vitae at erat."

    content.appendChild(title)
    content.appendChild(text)
  }

  return {
    render
  }
})();

export {
  news
}