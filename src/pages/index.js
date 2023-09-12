import { Inter } from 'next/font/google'
import FilterData from '@/components/filterdata'
import Fome from '@/components/form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-2 ${inter.className}`}
    >
<div style={{borderBottom: '2px solid rgb(5 150 105);'}}>
<h1 className='text-red-800 text-xl font-bold' style={{marginBottom: '10px'}}>Products</h1>
</div>

<div className='flex justify-between p-1'>
  <div style={{width:'350px', borderRight: '2px solid rgb(5 150 105);', height:'570px', padding: '8px'}}>
  {/* <h1 className='text-red-800 font-bold text-xl'>Filter</h1> */}
  <filterData></filterData>
    </div>
    {/* <br></br>   */}

  
</div>



          </main>
  )
}
