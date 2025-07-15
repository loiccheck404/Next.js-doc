/*'use client'
 
//import { incrementLike } from './actions'
import { useState } from 'react'
 
export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
 
return (
  <>
    <p>Total Likes: {likes}</p>
    <button
      onClick={() => setLikes(likes + 1)}
    >
      Like
    </button>
  </>
///** */
