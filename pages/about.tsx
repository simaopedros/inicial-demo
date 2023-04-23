
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import Link from 'next/link'



export default function About() {
  return (
    <>

          <main className="main">
            <h1>About Page</h1>
            <h1 className="title">
              Ir a <Link href="/">Home</Link>
            </h1>

            <p className="description">
              Get started by editing{' '}
              <code className="code">pages/about.jsx</code>
            </p>

          </main>



    </>
  )
}


About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
