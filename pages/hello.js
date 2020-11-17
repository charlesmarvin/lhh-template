function HelloPage (props) {
  return (
    <di>
      Hello, {props.name}!
    </di>
  )
}

export const getServerSideProps = async (ctx) => {
  console.log(ctx)
  const baseUrl = 'http://localhost:3000' // req ? `${req.protocol}://${req.get('Host')}` : ''
  const res = await fetch(`${baseUrl}/api/hello`)
  const json = await res.json()
  return { props: { name: json.name } }
}

export default HelloPage
