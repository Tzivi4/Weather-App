import { useEffect, useState } from 'react'
import Panel from '../components/Panel'
import fetchApi from '../helpers/fetchApi'
import {mockData} from '../mock.data'

export default function Index() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      // const response = await fetchApi(process.env.NEXT_PUBLIC_WEATHER_API)
    }
    getData()
  }, [])

  return (
    <div>
      <Panel data={mockData} />
    </div>
  )
}
