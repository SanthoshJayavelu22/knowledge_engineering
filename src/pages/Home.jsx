
import AutoCarousel from '../components/HomeComponents/AutoCarousel'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import AboutSection from '../components/HomeComponents/AboutSection'
import HomeTabs from '../components/HomeComponents/HomeTabs'
import AchievementCounter from '../components/HomeComponents/AchievementCounter'
import GalleryArea from '../components/HomeComponents/GalleryArea'
import RegistrationForm from '../components/HomeComponents/Registration'
import BlogSection from '../components/HomeComponents/BlogSection'

const Home = () => {

   const slides = [
    {
      image: img1,
      title: 'Talent is Made, Not Born.',
      description: '"Every child is a fresh bloom and an integral part of the gardens of the world."',
    },
    {
      image: img3,
      title: 'We offer insights',
      description: 'step-by-step plans to help children reach their potential',
    },
   
       {
      image: img4,
      title: 'our focus is on partnering with you',
      description: 'to deliver an exceptional you-yet cost effective to showcase your talents to the world',
    },

  ];
  
  return (
    <div>
   
      <AutoCarousel slides={slides} interval={5000}/>
      <AboutSection/>
     
      <HomeTabs/>
       <AchievementCounter/>
       <GalleryArea/>
       <RegistrationForm/>
       <BlogSection/>
    </div>
  )
}

export default Home
