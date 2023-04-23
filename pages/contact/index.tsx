
import Link from 'next/link'

import { MainLayout } from '../../components/layouts/MainLayout'


export default function About() {
  return (
    <>
      <MainLayout >
        <main className="main">
          <h1>Home Page</h1>
          <h1 className="title">
            Ir a <Link href="/about">About</Link>
          </h1>

          <p className="description">
            Get started by editing{' '}
            <code className="code">pages/index.js</code>
          </p>
        </main>
      </MainLayout>

    </>
  )
}
