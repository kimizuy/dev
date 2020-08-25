import Head from 'next/head'
import Link from 'next/link'
import Logo from '../components/logo'
import profile from '../public/profile.jpg'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kimizuy" />
        <meta name="twitter:creator" content="@kimizuy" />
        <meta name="twitter:title" content="kimizuy" />
        <meta name="twitter:description" content="こんにちは。kimizuy です。" />
        <meta name="twitter:image" content={`https://kimizuy.dev${profile}`} />
        <meta property="og:url" content="https://kimizuy.dev" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="kimizuy" />
        <meta property="og:description" content="こんにちは。kimizuy です。" />
        <meta property="og:image" content={`https://kimizuy.dev${profile}`} />
        <title>kimizuy</title>
        <meta name="description" content="こんにちは。kimizuy です。" />
      </Head>
      <Logo />
      <ul className={styles.list}>
        <li>
          <Link href="https://blog.kimizuy.dev">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/kimizuy">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/kimizuy">
            <a>Twitter</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
