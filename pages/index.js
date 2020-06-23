import Head from 'next/head'
import Link from 'next/link'
function About() {

  return <div>
    <Link href="/"><a title="Home">Home</a></Link>
    <div>
      <Link href="/user"><a title="User">User</a></Link>
      <div>
        <Link href="/about"><a title="About">About</a></Link>
      </div>
    </div>
  </div>
}


export default About