import React, { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import style from './Modal.module.scss'
import Image from 'next/image'


interface Props {
    modal: boolean,
    setModal: (modal: boolean)=> void,
    children: React.ReactNode,
  }

const Modal = ({ modal, setModal, children }: Props) => {

  const [mounted, setMounted] = useState<boolean>(false)


  useEffect(() => {
      setMounted(true)
      document.getElementById('card')?.focus()
      return ()=> setMounted(false)
  }, [])

  const handleBlur = (e: React.FocusEvent<HTMLElement>)=>{

    if (e.currentTarget.contains(e.relatedTarget)) return;

    if (window.onblur) return;

    setModal(false)
  }

  const handleFocus = (event: any)=>{
    console.log(event)
    setModal(false)
  }
    
    
  return mounted ? createPortal(
                                <>        
                                <div className={ modal ? style.container : style.containerClose } onFocus={handleFocus} tabIndex={0}>
                                    <div id='card' className={ modal ? style.card : style.cardClose }>
                                    <div className={style.img} onClick={()=>setModal(false)} >
                                    <Image src='/cross.png' width={30} height={30} alt='cross' />
                                    </div>
                                    { children }
                                    </div>
                                </div>
                                </> 
                                , document.getElementById('modal') as HTMLDivElement) : null;
}

export default Modal