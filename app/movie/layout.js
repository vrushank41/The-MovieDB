import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie',
  description: 'Movies List',
}

export default function MoviesLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='p-5'>
          <Link href="/movie" className='text-3xl'>
            Movies<span className='text-teal-500 font-bold'>Lot</span> 
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
