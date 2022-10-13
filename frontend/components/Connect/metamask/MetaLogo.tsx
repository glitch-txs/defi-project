import React, { useRef, useEffect } from 'react'
const ModelViewer = require('@metamask/logo');
import meshJson from './fade-fox.json'

const MetaLogo = () => {

  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const viewer = ModelViewer({
      pxNotRatio: true,
      width: 500,
      height: 400,
      followMouse: true,
      slowDrift: false,
      meshJson
    });

    if(metaRef && metaRef.current){
      metaRef.current.appendChild(viewer.container) 
    }


  }, [])
  
  return (
    <div ref={metaRef} />
  )
}

export default MetaLogo