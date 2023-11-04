const Category = props => {
  const {item, changeCategory} = props
  const {displayText, tabId} = item
  const selectCategory = () => {
    changeCategory(tabid)
  }
  return (
    <li>
      <button onClick={selectCategory}>{displayText}</button>
    </li>
  )
}

export default Category
