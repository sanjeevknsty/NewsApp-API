

import React from 'react'
import SourcePage from '../sourcePage'

export default function health(props) {
  return (
   <SourcePage apiKey = {props.apiKey} key={props.key} country = {props.country} pageSize = {props.pageSize} category = {props.category}/>
  )
}
