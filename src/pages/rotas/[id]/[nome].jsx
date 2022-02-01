import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CodigoENome(){
  const router = useRouter()
  const codigo = router.query.id
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas &gt; {codigo} &gt; {nome}</h1>
    </div>
  )
}