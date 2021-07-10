import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>Le roi des castors</h2>
        </Link>
      </div>
    </header>
  )
}
