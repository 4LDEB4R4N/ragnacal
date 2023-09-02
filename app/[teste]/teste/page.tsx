export default function Page(
  {params}: {params: {teste: string}}
  ) {
  return (
    <body>
      <h1>Hello, Next.js!</h1>
      <div>{params.teste}</div>
      <div style={{paddingTop: '2000px'}}></div>
      <h2 id="idteste">Goodbye, Next.js!</h2>
      <div style={{paddingTop: '2000px'}}></div>

    </body>
  )
}