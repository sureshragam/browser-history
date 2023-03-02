import './index.css'

function HistoryItem(props) {
  const {time, image, name, url, onDelete, id} = props
  const onDel = () => {
    onDelete(id)
  }

  return (
    <li>
      <p>{time}</p>
      <div className="content">
        <img src={image} alt="domain logo" />
        <p className="title">{name}</p>
        <p>{url}</p>
      </div>
      <button type="button" data-testid="delete" onClick={onDel}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
