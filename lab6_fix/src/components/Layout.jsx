import '../components/Layout.css'
 import logo from '../img/logo.png'
 import bell from '../img/Bell 1.png'
 import question from '../img/Question 1.png'
 import avatar from '../img/Avatar 313.png'
 
 const Layout = () => {
     return (
         <div>
             
             <div className="container flex justify-center">
                 <div className="header flex justify-between">
 
                     <h2 className='flex mr-96'>Dashboard</h2>
 
                     <div className='flex gap-2.5'>
                     <input className='' style={{border: "1px solid black", width: "250px"}} type="text" name="" id=""  placeholder='Search'/>
                     <img src={bell} alt="" />
                     <img src={question} alt="" />
                     <img src={avatar} alt="" />
 
 
                     </div>
                    
                     </div>
                 <div className="menu">
                     <img src={logo} alt="" />
                     <a href="#">Dashboard</a><br />
                     <a href="#">Projects</a><br />
                     <a href="#">Teams</a> <br />
                 </div>
                 <div className="content">
                     <h3>Lorem Ipsum</h3>
                     <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p>
                 </div>
                 <div className="footer"><h4>Footer</h4></div>
             </div>
         </div>
     )
 }
 
 export default Layout