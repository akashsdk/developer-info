import React from 'react'
import '../Style/home.css';
import Index from './index';
import Contact from './contact';

export default function home() {
  return (
    <div>
      <Index/>
      <div style={{height:'60px'}}/>
      <Contact/>
    </div>
  )
}
