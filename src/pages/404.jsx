import * as React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"

const NotFoundPage = () => {
  return (
      <Layout>
        <h1>404 Page Not Found</h1>
        <Link to="/">Go home</Link>.
      </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
