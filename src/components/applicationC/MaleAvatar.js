import React from 'react'
import MaleAvatarImg from '../../assets/male.jpg'

function MaleAvatar() {
  return (
    <div className='text-center'>
      <img style={{height: '250px', width: '250px'}} src={MaleAvatarImg} />
    </div>
  )
}

export default MaleAvatar