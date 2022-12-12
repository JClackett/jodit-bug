import { EditorInput } from "../components/EditorInput"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <EditorInput isControlled />
      <EditorInput />
    </div>
  )
}
