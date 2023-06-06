"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>© Care Jordan Senior Homes. All rights reserved</div>
        <div className={styles.social}>
            <Image src='/1.png' width={15} height={15} alt='Care Jordan Facebook'/>
            <Image src='/2.png' width={15} height={15} alt='Care Jordan Instagram'/>
            <Image src='/3.png' width={15} height={15} alt='Care Jordan Twitter'/>
            <Image src='/4.png' width={15} height={15} alt='Care Jordan Youtube'/>         
        </div>
    </div>
  )
}

export default Footer