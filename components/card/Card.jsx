import React from 'react'
import styles from "./Card.module.css"
import { useRouter } from 'next/dist/client/router'

export default function Card({name, phone, email, image,id}) {
  const router=useRouter()
  return (
    <div className={styles.card} onClick={()=>router.push(`/cat/${id}`)}>
      <img src={image.url} className={styles.cardImg} alt="" />
      <div className={styles.cardTypos}>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}
