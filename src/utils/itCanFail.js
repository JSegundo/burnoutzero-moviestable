function itCanFail() {
  let go = Math.round(Math.random() * 99) + 1
  if (go > 75) {
    throw Error("Error inesperado. Intentalo devuelta!")
  }
}

export default itCanFail
