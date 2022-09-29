import React from 'react'

function Datatable() {
  return (
    <div className='w-full border-4' >
      <table className='w-full overflow-scroll'>
        <tr className='bg-[#4c4c4d] flex items-center justify-between text-sm text-white h-12 '>
          <th className=' block w-40'>ID</th>
          <th className=' block w-40'>Şirkət</th>
          <th className=' block w-40'>Ofis</th>
          <th className=' block w-40'>Ödəniş üslubu</th>
          <th className=' block w-40'>Müqavilə status</th>
          <th className=' block w-40'>Müqavilə tarixi</th>
          <th className=' block w-40'>Bölgə</th>
          <th className=' block w-40'>Kreditor</th>
          <th className=' block w-40'>Komanda</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  )
}

export default Datatable
