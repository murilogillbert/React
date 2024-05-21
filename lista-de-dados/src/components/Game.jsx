/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

Game.propsTypes = {
    title : PropTypes.string,
    cover : PropTypes.string,
    onRemove : PropTypes.func
}

export default function Game({title,cover,onRemove}){
    return(
        <div>
          <img src={cover} alt={title}></img>
          <h2>{title}</h2>
          <button onClick={() => onRemove}>Remove</button>
        </div>
    )
}