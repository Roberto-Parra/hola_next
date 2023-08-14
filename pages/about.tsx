import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { JsxElement } from 'typescript'

export default function AboutPage() {
  return (
    <>
        <h1> Estoy en el About</h1>
        <h1 className={'title'}>
            Ir al <Link href="/">Home!</Link>
        </h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code>pages/about.tsx</code>
        </p>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}