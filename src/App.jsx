import React from 'react'
import './App.jsx'
import './App.css'
import logo from './Main.png'
import logo2 from './logo2.png'
import circletick from './circletick.png'
import Element from './Element.png'
import sponsors from './sponsors.png'
import Apps from './Apps.png'
import Sri1 from './Group.png'
import Name from './Name-box1.png'
import Sri2 from './Group1.png'
import Name1 from './Name-box2.png'
import Name2 from './Name-box3.png'
import slider from './Slider.png'
import Icon from './App-icon.png'
import last from './Btm.png'
export default function Hero() {

  return (

    <>
      <div className='Bro1'>
        <div className='navigation'>
          <div className='logo'>
            <img src={logo} alt="Whitespace Logo" />
          </div>

          <ul className='nav-links'>
            <li><a className='A' href="#">Products</a></li>
            <li><a className='A' href="#">Solutions</a></li>
            <li><a className='A' href="#">Resources</a></li>
            <li><a className='A' href="#">Pricing</a></li>
          </ul>
          <button className='btn' style={{ backgroundColor: '#ffe492', color: '#043873' }}>Login</button>
          <button className='btn'>Try Whitespace free</button>
        </div>

        <div className='Bro'>


          <div className="hero">
            <div className='Asta'>

              <h1 className='title'>Get More Done with whitespace</h1>

              <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
              <button className='btn'>Try Whitespace free</button>

            </div>

            <div className='Royal'></div>

          </div>
        </div>
      </div>
      <div className='Bro2'>
        <div className='sub1'>
          <div className='Asta1'>
            <h1 className='title'>Project Management</h1>

            <p>Images, videos, PDFs and audio files are supported.
              Create math expressions and diagrams directly from the app.
              Take photos with the mobile app and save them to a note.</p>
            <button className='btn'>Get Started</button>

          </div>
          <div className='Royal'>

          </div>

        </div>
        <div className='sub2'>
          <div className='Royal11'>
            <img src={logo2} alt="Logo2" />
          </div>
          <div className='Asta1'>
            <h1 className='title'>Work together</h1>

            <p>With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.</p>
            <button className='btn'>Try it now</button>

          </div>
        </div>
      </div>
      <div className='Bro'>
        <div className="hero">
          <div className='Asta'>

            <h1 className='title'>Use as Extension</h1>

            <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
            <button className='btn'>Let's Go</button>

          </div>

          <div className='Royal'>

          </div>

        </div>
      </div>

      <div className='sub2'>
        <div className='Royal'>

        </div>
        <div className='Asta1'>
          <h1 className='title'>Customise it to your needs</h1>

          <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
            Or create your own scripts and plugins using the Extension API</p>
          <button className='btn'>Let's Go</button>

        </div>
      </div>
      <div className='Bro3'>
        <div className='Hero1'>
          <h1>Choose Your Plan</h1>
          <p>Whether you want to get organized,
            keep your personal life on track, or boost workplace productivity,
            Evernote has the</p>
          <p style={{ textAlign: 'center' }}>right plan for you.</p>

        </div>
        <div className='Hero2'>
          <div className='Raju'>
            <div className='mani1'>
              <h3>Free</h3><br />
              <h2>$0</h2><br />
              <p>Capture ideas and find them quickly</p><br />
            </div>
            <div className='mani2'>
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Sync unlimited devices</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>10 GB monthly uploads</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>200 MB max note size</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Customize Home dashboard and access extra Widgets</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Connect primary Google Calendar account</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Add due dates, reminders, and notifications to your tasks</p><br />
            </div>
            <div><button className='btn1'>Get Started</button></div>

          </div>
          <div className='vasu'>
            <div className='mani3'>
              <h3>Personal</h3><br />
              <h2 style={{ color: '#ffe492' }}>$11.99</h2><br />
              <p>Keep home and family on track</p><br />
            </div>
            <div className='mani4'>
              <p ><a className='checkmark'><img src={circletick} style={{ filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)' }} /></a>Sync unlimited devices</p><br />
              <p ><a className='checkmark'><img src={circletick} style={{ filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)' }} /></a>10 GB monthly uploads</p><br />
              <p ><a className='checkmark'><img src={circletick} style={{ filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)' }} /></a>200 MB max note size</p><br />
              <p ><a className='checkmark'><img src={circletick} style={{ filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)' }} /></a>Customize Home dashboard and access extra Widgets</p><br />
              <p ><a className='checkmark'><img src={circletick} style={{ filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)' }} /></a>Connect primary Google Calendar account</p><br />
              <p ><a className='checkmark'><img src={circletick} style={{ filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)' }} /></a>Add due dates, reminders, and notifications to your tasks</p><br />
            </div>
            <div><button className='btn2'>Get Started</button></div>
          </div>
          <div className='Raju'>
            <div className='mani1'>
              <h3>Organization</h3><br />
              <h2>$49.99</h2><br />
              <p>Capture ideas and find them quickly</p><br />
            </div>
            <div className='mani2'>
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Sync unlimited devices</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>10 GB monthly uploads</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>200 MB max note size</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Customize Home dashboard and access extra Widgets</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Connect primary Google Calendar account</p><br />
              <p ><a className='checkmark'><img src={circletick} alt="image" /></a>Add due dates, reminders, and notifications to your tasks</p><br />
            </div>
            <div><button className='btn1'>Get Started</button></div>

          </div>
        </div>

      </div>
      <div className='Bro4'>
        <div className='Hero3'>
          <h1>Your work, everywhere you are</h1><br />
          <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and </p>
          <p style={{ textAlign: 'center' }}>OneDrive. The app is available on Windows, macOS,
            Linux, Android and iOS. A terminal app is also available!</p>
        </div><br /><br />
        <div><button className='btn2'>Try Taskey</button></div>
      </div>
      <div className='sub3'>
        <div className='Asta1'>
          <h1 className='title'>100% your data</h1>

          <p>The app is open source and your notes are saved to an open format, so you'll always have access to them.
            Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them</p>
          <button className='btn'>Read more</button>

        </div>
        <div className='Element'>
          <img src={Element} alt="" />

        </div>

      </div>
      <div className='Bro5'>
        <div className='ram'>
          <h1>Our sponsors</h1>
        </div>
        <div className='sponsors'>
          <img src={sponsors} alt="sponsors" height={50} width={950} />

        </div>
      </div>
      <div className='Apps'>
        <div className='Royal11'>
          <img src={Apps} alt="APPS" />
        </div>
        <div className='Asta1'>
          <h1 className='title'>Work with Your Favorite Apps Using whitepace</h1>

          <p>Whitepace teams up with your favorite software.
            Integrate with over 1000+ apps with Zapler to have all the tools you need for your project success</p>
          <button className='btn'>Read more</button>

        </div>
      </div>
      <div className='Bro6'>
        <div className='Hero4'>
          <h1> What Our Clients Says  </h1>
        </div>
        <div className='Hero5'>
          <div className='sri2'>
            <div className='main5'>
              <img src={Sri1} alt="" height={50} width={75} /><br /><br /><br />
              <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
              <br />
              <br />
              <div className='k'></div><br /><br /><br /><br />
              <img src={Name} alt="" height={75} width={300} />
            </div>

          </div>
          <div className='sri2'>
            <div className='main4'>
              <img src={Sri2} alt="" height={50} width={75} /><br /><br /><br />
              <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
              <br />
              <br />
              <div className='j'></div><br /><br /><br /><br />

              <img src={Name1} alt="" height={75} width={300} />
            </div>
          </div>
          <div className='sri2'>
            <div className='main4'>
              <img src={Sri2} alt="" height={50} width={75} /><br /><br /><br />
              <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
              <br />
              <br />
              <div className='j'></div><br /><br /><br /><br />

              <img src={Name2} alt="" height={75} width={300} />
            </div>
          </div>
        </div>
        <div className='slider'>

          <img src={slider} alt="Slider" />
        </div>

      </div>
      <div className='Bro7'>
        <div className='Hero6'>
          <div className='villon'>
            <h1>Try Whitepace today</h1>
            <p>Get started for free.<br /> Add your whole team as your needs grow.</p><br />
            <div>
              <button className='btn'>Try Taskey free</button>
            </div>
            <br />

            <p>On a big team? Contact sales</p>
            <br />

            <img src={Icon} alt="" height={50} width={200} />
          </div>

        </div>
      </div>
      <div className='Bro8'>
        <div className='Hero7'>
          <div className='om1'>
            <img src={logo} alt="logo" height={30} width={150} /><br />
            <p>whitepace was created for the new ways we live and work.
              We make a better workspace around the world</p>
          </div>
          <div className='om2'>
            <h2>Product</h2><br />
            <ul className='nav-link'>
              <li><a className='B' href="#">Pricing</a></li><br />
              <li><a className='B' href="#">Customer Stories</a></li><br />
              <li><a className='B' href="#">Overview</a></li>
            </ul>
          </div>
          <div className='om2'>
            <h2>Resources</h2><br />
            <ul className='nav-link'>
              <li><a className='B' href="#">Blog</a></li><br />
              <li><a className='B' href="#">Guides & Tutorials</a></li><br />
              <li><a className='B' href="#">Help Center</a></li>
            </ul>
          </div>
          <div className='om2'>
            <h2>Company</h2><br />
            <ul className='nav-link'>
              <li><a className='B' href="#">About Us</a></li><br />
              <li><a className='B' href="#">Careers</a></li><br />
              <li><a className='B' href="#">Media kit</a></li>
            </ul>
          </div>
          <div className='om3'>
            <h1>Try It Today</h1><br />
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button className='btn'>Start today</button><br />
          </div>
        </div>
      </div>
      <div className='Bro9'>
        <img src={last} alt="" height={20} width={1400} />
      </div>

    </>
  )

}
