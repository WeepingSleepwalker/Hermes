import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ashes ashes we all fall, down</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <Header title="Francis Chung" />
        <h2>Software Developer</h2>
      
        <h3 className="description">
          Here are my projects
        </h3>
        <div className='row1'>
            <div className='card'>
          <a href="https://loving-saha-80db75.netlify.app/" target="_blank" rel="noopener noreferrer" className="minititle">Pink Video</a>
          <p>This is React video chat app. It uses material-ui. Copy your id and paste it to connect.</p>
          <a href="https://loving-saha-80db75.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src="/pinkthumb.png" height="150px" width="auto" margin= "10px" alt="Netlify Logo" className='piconcard' /> 
          </a>
          <a href='https://github.com/WeepingSleepwalker/pink-video' target='_blank' className="ghost-button">Click for Code</a>
          </div>

          <div className='card'>
          <a href="https://stockpickpredict.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="minititle">
          Stock App/Predictor </a>
          <p>It uses python, streamlit and the fbprophet api.</p>
          <a href="https://stockpickpredict.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="/stockpink.png" height="150px" width="auto" margin= "10px" alt="Netlify Logo" className='piconcard' /> 
          </a>
          <a href='https://github.com/WeepingSleepwalker/chat-test' target='_blank' className="ghost-button">Click for Git</a>
          </div>
          <div className='card'>

          <a href="https://dogmapper.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="minititle">
          Dogmapper </a>
          <p>This is React Google Maps app. It works with the Maps api to mark dogs. </p>
          <a href="https://dogmapper.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="/dogwalk.png" height="150px" width="auto" margin= "10px" alt="Netlify Logo" className='piconcard' /> 
          </a>
          <a href='https://github.com/WeepingSleepwalker/dogplacer' target='_blank' className="ghost-button">link to code</a>
          </div>
        </div>

        <div className='row1'>
 
          <div className='card'>
          <a href="/ResumeFrancis.pdf" download>
      
          <img src="/resumethumb.png" height="150px" width="auto" margin= "10px" alt="Netlify Logo" className='piconcard' /> 
          </a>
          <a href="/ResumeFrancis.pdf" target='_blank' className="ghost-button" download>PDF for you</a>
          </div>
        </div>

        
      </main>

      <Footer />
    </div>
  )
}
