import { withRouter } from 'next/router'
import Link from 'next/link';

const ActiveLink = ({ children, router, href }) => {
  const style = {
    marginRight: 10,
    color: router.query.name === children? 'red' : '#067df7',
    fontSize: '13px',
    textDecoration: 'none'
  }

  return (
    <Link prefetch href={href}>
      <a style={style}>{children}</a>
    </Link>
  )
}

export default withRouter(ActiveLink)