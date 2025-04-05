import React from 'react'
import { useCollectin } from '../hooks/useCollection'

function Home() {
  const {data} = useCollectin("recepies")
  return (
    <div>Home</div>
  )
}

export default Home