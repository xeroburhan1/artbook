import React from 'react'

import { NavLink } from 'react-router-dom';
const baseClass = 'after-nav-links';
import { Chevron } from 'payload/components/index';

function Afternav(children) {
    console.log(children)
  
  return (
    <div className={baseClass}>
        <span className="nav__label">Custom Routes</span>
        <h5>Kiii</h5>
        <Chevron>

        </Chevron>

    </div>
  )
}

export default Afternav