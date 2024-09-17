import React from 'react'
import Settings from '../../components/Settings'

function LikedPage() {
  return (
    <div className='w-[80%] flex justify-between'>
      <div className='w-80%'>
      LikedPage
      </div>
      <div className='w-[20%] bg-[red]'>
        <Settings/>
      </div>
    </div>
  )
}

export default LikedPage