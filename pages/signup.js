//import Head from 'next/head'
//import Image from 'next/image'
import Copyrig from './komponen/komlogin/copyrig'
//import Login from './komponen/komlogin/login'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   
     <div className="container">
  
  <div className="row" id="pwd-container">
    <div className="col-md-4"></div>
    
    <div className="col-md-4">
      <section className="login-form">
        <form method="post" action="#" role="login">
          <img src="http://i.imgur.com/RcmcLv4.png" className="img-responsive" alt="" />
          <input type="text" name="email" placeholder="User" required className="form-control input-lg"  />
          
          <input type="password" className="form-control input-lg" id="password" placeholder="Password" required="" />
          
          
          <div className="pwstrength_viewport_progress"></div>
          
          
          <Link href="./conten"><button type="submit" name="go" className="btn btn-lg btn-primary btn-block">Sign up</button></Link>
          <div>
         
            
          </div>
          
        </form>
        
       
      </section>  
      </div>
      </div>
  
  
  
</div>

  )
}
