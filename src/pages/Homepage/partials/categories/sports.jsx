import React from 'react'
import SourcePage from '../sourcePage'

export default function sports(props) {
  return (
   <SourcePage  apiKey = {props.apiKey} key="sports" country = "in" pageSize = {3} category = "sports"/>
  )
}
