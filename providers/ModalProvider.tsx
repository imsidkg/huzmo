'use client' 

import RenameModal from '@/components/modal/RenameModal'
import React, { useEffect, useState } from 'react'

type Props = {}

const ModalProvider = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  },[])

  if(!isMounted) return null

  return(
    <div>
      <RenameModal/>
    </div>
  )
}

export default ModalProvider