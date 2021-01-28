import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sunny } from '../components/Icons'

const defineIcon = id => {
  const firstChar = id.toString().charAt(0)

  if (firstChar === '2') {
    return CloudLightning
  } else if (firstChar === '3') {
    return CloudDrizzle
  } else if (firstChar === '5') {
    return CloudRain
  } else if (firstChar === '6') {
    return CloudSnow
  } else if (id === 800) {
    return Sunny
  } else if (firstChar === '8' && !id === 800) {
    return Cloud
  } else {
    return <span></span>
  }
}

export default defineIcon
