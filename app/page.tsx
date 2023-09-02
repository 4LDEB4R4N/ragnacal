import Link from "next/link";

export default function Page() {
  return (
    <body>
      <h1>Hello, Next.js!</h1>
      <h2>Goodbye, Next.js!</h2>
      <Link href="/teste">teste</Link>
      <br/>
      <Link href="/teste#idteste">scrollteste</Link>
      <br/>
      <Link href="/string/teste">scrollteste</Link>
      <br/>
      <Link href="/#idteste">scrollteste</Link>
      <div style={{paddingTop: '2000px'}}></div>
      <h2 id="idteste">Goodbye, Next.js!</h2>
    </body>
  )
}