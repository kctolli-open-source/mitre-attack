import Components from '../common/main';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Components.Router routes={Components.routes} />
      </main>
      <Components.Footer />
    </>
  )
}
