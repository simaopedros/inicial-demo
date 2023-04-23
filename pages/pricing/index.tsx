import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function Home() {
  return (
    <>
    <MainLayout>
    <main className="main">
        <h1>Pricing Page</h1>
        <h1 className="title">
          Ir a <Link  href="/about">Pricing</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
        <code className="code">pages/princing/index.jsx</code>
        </p>

      </main>
    </MainLayout>
    </>
  )
}
