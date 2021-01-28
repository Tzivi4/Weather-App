import MainPanel from '../components/MainPanel'
import styles from './Panel.module.css'

const Panel = ({ data }) => {
  return (
    <div className={styles.container}>
      <MainPanel data={data} />
    </div>
  )
}

export default Panel
