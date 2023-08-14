import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1> Estoy en el Home</h1>
        <h1 className={'title'}>Ir al <Link href="/about">About!</Link></h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
