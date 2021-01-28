function MyLink(props) {
  console.log(MyLink)

  return (
    <a href={props.href} target="_blank" style={{ color: 'red' }}>
      {props.children}
    </a>
  )
}

export default MyLink
