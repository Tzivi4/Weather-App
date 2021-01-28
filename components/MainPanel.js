import {} from 'react'
import defineIcon from '../helpers/defineIcon'
import styles from './MainPanel.module.css'

const MainPanel = ({ data }) => {
  const Ico = defineIcon(data.weather[0].id)
  return (
    <div className={styles.container}>
      <div className={styles.svgContainer}>
          <Ico width="3rem" height="3rem" />
      </div>
      <span className={styles.temp}>{data.main.temp.toFixed(0)}</span>
      <span className={styles.status}>{data.weather[0].main}</span>
    </div>
  )
}

export default MainPanel
