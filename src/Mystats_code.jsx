import React from 'react'

const Mystats_code = () => {
  return (
    <div className='big-sidebar' >
      <div className='big-sidebar-profile'>
        <h3>My Status</h3>
        <form>
          <input  className='input' placeholder='First name' type='text'/>
          <input  className='input' placeholder='Last name' type='text'/>
          <input   className='input' placeholder='email' type='text'/>
          <input  className='input' placeholder='location' type='text'/>
          <button className='btn btn-hero'>save changes</button>
        </form>

      </div>
    </div>
  )
}

export default Mystats_code