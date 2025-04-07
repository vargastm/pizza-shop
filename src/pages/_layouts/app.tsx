import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col antialiased'>
      <Header />
      <div className='flex flex-col flex-1 gap-4 p-8 pt-6'>
        <Outlet />
      </div>
    </div>
  )
}
