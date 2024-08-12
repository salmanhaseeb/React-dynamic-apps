import React from 'react'
import FemaleAvatarImg from '../../assets/female.jpg'

function FemaleAvatar() {
  return (
    <div className='text-center'>
      <img style={{height: '250px', width: '250px'}} src={FemaleAvatarImg}></img>
    </div>
  )
}

export default FemaleAvatar