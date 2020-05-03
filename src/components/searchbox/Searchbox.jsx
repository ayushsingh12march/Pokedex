import React from 'react'
import './searchbox.css'
export const Searchbox = ({ handlePokeSearch }) => <input
  className="search"
  type="search"
  placeholder="search"
  onChange={e => {
    handlePokeSearch(e.target.value)
  }}
/>
