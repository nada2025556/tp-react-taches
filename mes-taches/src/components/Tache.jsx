function Tache({ titre, terminee }) {
  return (
    <li className={terminee ? 'tache terminee' : 'tache'}>
      <span>{terminee ? '✅' : '⬜'}</span>
      <span className="titre">{titre}</span>
    </li>
  )
}

export default Tache
