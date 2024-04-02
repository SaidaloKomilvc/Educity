import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti porro sed neque cumque quos aliquid distinctio adipisci, iste dolor architecto officia. Optio quibusdam quo obcaecati debitis consequatur nostrum velit nulla!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id doloremque omnis nemo aspernatur est aut quod saepe. Ullam saepe incidunt voluptate nesciunt, cupiditate deleniti veniam id laudantium sit tenetur placeat!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sunt similique exercitationem, quia a nobis explicabo nemo facilis quo, velit ratione reprehenderit sapiente rem, dolor nulla corporis aspernatur at sed.</p>
            </div>
        </div>
    )
}

export default About
