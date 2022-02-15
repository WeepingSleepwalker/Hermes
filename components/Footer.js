import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <div>
      <a href="https://github.com/WeepingSleepwalker" target='_blank'>

       
       <img src="/GitHub-Mark-Light-64px.png" alt="Netlify Logo" className={styles.logo} /> 
        </a>
      <a href="https://www.linkedin.com/in/francis-chung-514a957/" target='_blank'>

       
       <img src="/LI-In-Bug.png" height="100px" width="auto" margin= "10px" alt="Netlify Logo" className={styles.logo} /> 
        </a>
        </div>  
      </footer>
    </>
  )
}
