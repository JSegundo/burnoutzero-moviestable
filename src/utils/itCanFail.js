function itCanFail() {
  let go = Math.round(Math.random() * 99) + 1
  if (go > 75) {
    throw Error(
      "An unexpected error occurred while trying to fetch data. Try again!"
    )
  }
}

export default itCanFail
