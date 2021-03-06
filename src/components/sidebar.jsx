import React, { Component } from 'react'
import authorImg from './images/about.JPEG'
import cf1 from './images/cf1.ico'
import cf2 from './images/cf2.ico'
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className = "aboutImg">
                <view>
                  <img src = {authorImg} alt = "poonam"/>
                </view>
              </div>
              {/* <img src = "assets/about.jpg" alt  = "poonam"></img> */}
              <h1 id="colorlib-logo"><a href="index.html">Poonam Poonia</a></h1>
              <span className="email"><i className="icon-mail"></i> ppoonia381@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/poonam.poonia.714" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/PoonamPoonia09" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/_poonam_poonia/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/poonam09/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/poonam9009" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@poonam_11720025" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
                <li><a href="https://codeforces.com/profile/outofleague" target="_blank" rel="noopener noreferrer"><img src = {cf1} alt = "Codeforces"></img></a></li>
                <li><a href="https://www.codechef.com/users/poonam0908_" target="_blank" rel="noopener noreferrer"><img src = {cf2} alt ="codechef"/></a></li>

              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
