import React from 'react'
import Card from '../shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
function FeedbackItems({item, handleDelete}) {
  
  return (
    <Card className='card' >
        <div className='num-display'>{item.rating}</div>
        <button className='close'>
          <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItems.propTypes = {
  item : PropTypes.object.isRequired,

} 

export default FeedbackItems
