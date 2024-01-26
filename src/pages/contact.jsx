
import Inputs from "../components/input"
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
const Contact = () => {
  return (
    <div>
    <div className="c-head">
        <h2 >
    <label className="c-head-text">CONTACT </label> <label className="c-head-text-us">US</label>
    </h2>
    </div>
    <div className="container">
        <div className="c-left">
            <h5>CONTACT INFORMATION</h5>
            <br />
            <p style={{color:'grey',fontSize:'16px'}}>Say something to start a live chat</p>
            <br />
            <br />
            <br />
            <div style={{display:'flex'}}>
                <div><PermPhoneMsgIcon></PermPhoneMsgIcon></div>
            <div><p style={{marginLeft:'10px'}}>+91 9876543210</p></div>    
            </div>    
            <br />
            <br />
            <div style={{display:'flex'}}>
                <div><MailIcon></MailIcon></div>
            <div><p style={{marginLeft:'10px'}}>demo@gmail.com</p></div>
            </div>

            <br />
            <br />
            <div style={{display:'flex'}}>
                <div><HomeIcon></HomeIcon></div>
            <div><p style={{marginLeft:'10px'}}>12b, Church street, Bangalore</p></div>
            </div>
            <div style={{marginLeft:'10px',display:'flex',marginTop:'80px'}}>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><div style={{color:'white'}}><InstagramIcon></InstagramIcon></div></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><div style={{marginLeft:'20px',color:'white'}}><XIcon></XIcon></div></a>
            </div>
            
            

        </div>
        <div className="c-right">
        <Inputs></Inputs>
        </div>
    </div>
    </div>
  )
}

export default Contact