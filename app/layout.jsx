// import './globals.css'
import '../styles/dist.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='
      bg-secondary-veryDarkBlue
        h-screen
        flex
        justify-center
        items-center
        font-overpass'>
        {children}
      </body>
    </html>
  )
}
