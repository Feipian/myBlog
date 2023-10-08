import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>Had some error!!</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}