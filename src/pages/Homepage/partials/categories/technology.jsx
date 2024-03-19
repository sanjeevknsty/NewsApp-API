

import React from 'react'
import SourcePage from '../sourcePage'

export default function technology(props) {
  return (
   
   <SourcePage setProgress ={props.setProgress} apiKey = {props.apiKey} key="technology" country = "in" pageSize = {3} category = "technology"/>
  )
}

