import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Buscar(){
  const router = useRouter()
  const codigo = router.query.id

  return (
    <div>
      <h1>Rotas &gt; {codigo} &gt; Buscar</h1>
    </div>
  )
}