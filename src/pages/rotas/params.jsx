import { useRouter } from 'next/router'

export default function Params(){
  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome
  return (
    <div>
      <h1>Rotas Params</h1>
      <h1>{id} &gt; {nome}</h1>
    </div>
  )
}