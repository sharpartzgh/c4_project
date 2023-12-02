/* eslint-disable no-unused-vars */
import React from 'react'
import './ShortLinkSection.css'
import { useState } from 'react'

const ShortLinkSection = () => {
  
  // handling the form submittion 
  const [link, setLink] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // // making the input div behave like a todo list app, i guess have to come back and work on this later 
  // const [shortLinkList, setShortLinkList] = useState([])

  return (
    <div className='shortLinks'>
      <div className="image-div">
      </div>
      <div className='short-div'>
        <form action="" className='flex-within' onSubmit={handleSubmit}>
            <label htmlFor="website" className='bg-input'>
              <input type="url" name='website' placeholder='Shorten a link here...' className='short-input' value={link} onChange={(e) => setLink(e.target.value)}/>
              <button className='btn' type='submit'>Shorten It!</button>
            </label>
          </form>
        </div>
      <div className='addLink'>
        <p>Please add a link</p>
      </div>
    </div>
  )
}

export default ShortLinkSection
