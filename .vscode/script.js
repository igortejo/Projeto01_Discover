function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  /*método alternativo*/
  html.classList.toggle("light")

                        //trocar a foto
  //pegar a imagem
  const img = document.querySelector("#profile img")//procura a primeira imagem que tiver no doc

  // substituir imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add imagme light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se não tiver light mode, mantem imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
