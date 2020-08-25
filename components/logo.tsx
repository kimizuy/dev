import styles from './logo.module.css'
import profile from '../public/profile.jpg'

export default function Logo() {
  return <img className={styles.logo} src={profile} alt="kimizuy" />
}
