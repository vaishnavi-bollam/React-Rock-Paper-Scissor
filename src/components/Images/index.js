import './index.css'

const Images = props => {
  const {eachChoice} = props
  return (
    <div className="image-container">
      <img src={eachChoice.imageUrl} className="images" />
    </div>
  )
}

export default Images
