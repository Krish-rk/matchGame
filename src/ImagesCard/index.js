const ImagesCard = props => {
  const {item, checkImage} = props
  const {imageUrl, id} = item
  const onImage = () => {
    checkImage(id)
  }
  return (
    <li>
      <button onClcik={onImage}>
        <img src={imageUrl} />
      </button>
    </li>
  )
}

export default ImagesCard
