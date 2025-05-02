'use client'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/HomePage.css";
import { Button } from '@mui/material';
// import { BsArrowRight } from "react-icons/bs";
import introimg from "./Images/intro.jpg"
import plnt from "./Images/planet.jpg";
import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import CardShow from './Components/CardShow';
import lbb from "./Images/bb.png";
import TabsHolder from './Components/TabsHolder';
import CustomCard from './Components/CustomCard';
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.jpg";
import bg from "./Images/bg.jpg";
import { useTranslation } from "react-i18next";
import Link from 'next/link'
import Image from "next/image";
import "./Styles/App.css"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PieChartIcon from '@mui/icons-material/PieChart';
function Home() {
    const { t, i18n } = useTranslation();

    return (
        <div className='bb' style={{gap:"50px"}}>

        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center intro-page' >
        <Image
        src={introimg}
        alt="Intro Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Optimized quality
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>
       <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("🌱 Grow the Future")} </span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}>  {t("Detect Plant Diseases Early")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("Growth is your go-to platform for smart plant care. Get insights on disease types, how to treat them, and the benefits of early detection.")} 
            
            </div>
            
            <Link rel="prefetch"  href='/Detection' >
                <Button variant='contained' className='intro-button'> {t("Detect Now")} </Button>
            </Link>
            </div>
        </Container>

        <Container  className='d-flex flex-column justify-content-center align-items-center six-page text-center'>
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("So Much to do!")} </span>
            <div className='second-title text-center' style={{fontSize:"40px"}}>
                <span> {t("Different")}  <span style={{color:"var(--main)"}}>  {t("Benifits")}   </span>  {t("&")}   
                <span style={{color:"var(--main)"}}>  {t("Solutions")} </span> 
                 <span style={{color:"var(--main)"}}>  {t("To Discover")} .</span></span>
            </div>
            <div>
             {t("Dive deeper into plant health! Discover hidden symptoms, explore simple treatment tips, and grow healthier crops—one leaf at a time.")} 
            
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center h-100 w-100 mt-4' style={{gap:'15px'}}>
                <CardShow title={t('Detect')} text={t('Easily detect over 12 types of plant leaf diseases with a single image upload.')} link={"/Detect"} icon={<LocalFloristIcon style={{fontSize:"80px"}} />} />
                <CardShow title={t('Assistant')} text={t('Not sure about the disease? Use our AI assistant to guide your diagnosis.')} link={"/Assistant"} icon={<SmartToyIcon style={{fontSize:"80px"}} />} />
                <CardShow title={t('Explainable AI')} text={t('Visualize exactly where the disease is on the leaf with heatmap overlays.')} link={"/Explainable"} icon={<VisibilityIcon style={{fontSize:"80px"}} />} />
                <CardShow title={t('Disease Stats')} text={t('See the infection percentage and monitor severity at a glance.')} link={"/Statistics"} icon={<PieChartIcon style={{fontSize:"80px"}} />} />
                <CardShow title={t('Integrate')} text={t('Want to embed our model into your app or website? Contact us to learn more.')} link={"/Integrate"} icon={<PrecisionManufacturingIcon style={{fontSize:"80px"}} />} />
                <CardShow title={t('Contact')} text={t('Questions or suggestions? Reach out to our team for quick support.')} link={"/Contact"} icon={<GroupsIcon style={{fontSize:"80px"}} />} />
            </div>

            
        </Container>
            
        <Container fluid="x" className='d-flex flex-row page-three'>
            <Image src={plnt} alt=""  className='img-left' width={400} height={400}/>
            <div className='d-flex flex-column justify-content-start align-items-start p-5 text-start w-50 right-area' style={{gap:"25px"}}>
                <div className='second-title text-start w-100' style={{fontSize:"40px"}}>
                    <span> <span style={{color:"var(--main)"}}>  {t("Contact")}  </span>  {t("Us with your")}  
                    <span style={{color:"var(--main)"}}>  {t("Ideas")}  </span>  {t("&")}  <span style={{color:"var(--main)"}}> 
                     {t("Suggestions")} .</span></span>
                </div>
                <div>
                 {t("Got plant care ideas blooming? We want to hear them! Share your insights and suggestions to help us grow smarter, healthier crops together. Every voice counts in cultivating a greener future, one smart solution at a time. Let’s make plant health intelligent!")} 
                
                </div>
                <Link rel="prefetch"  href={"/Contact"} >
                <Button variant='outlined' className='intro-button'> {t("Contact us")} </Button>
            </Link>
            </div>
        </Container>

        <Container className='d-flex flex-column justify-content-center align-items-center fifth-page'>
        
            <div className='d-flex flex-row justify-content-center align-items-center rgb' style={{gap:"50px"}}>
                <div className='d-flex flex-column justify-content-start align-items-end  second-page-start'>
                <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Our Mission!")} </span>
                        <div className='second-title text-end'>
                        <span>  {t("We've a")} <span style={{color:"var(--main)"}}>   {t("Clear Objectives")} </span> 
                           {t("From this")} <span style={{color:"var(--main)"}}> {t("Tools")} </span></span>
                    </div>
                    <div className='w-75 content text-end'>
                     {t("We're on a mission to revolutionize plant health and empower you to make a lasting impact. Our user-friendly AI tools with clear insights guide you to detect, understand, and manage leaf diseases—making a real difference, one healthy plant at a time.")} 
                    

                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-items-center w-50' style={{gap:"35px"}}>
                <Image src={lbb} alt="" className='lbb-img'/>
                </div>
            </div>
        </Container>


        <Container>
        <div className='second-title text-end'>
                        <span> {t("What Can you")}  <span style={{color:"var(--main)"}}> 
                         {t("Detect")} 
                         </span></span>
                    </div>
            <TabsHolder></TabsHolder>
        </Container>
        

        <Container className='d-flex flex-column justify-content-center align-items-center'style={{gap:"15px"}}>
        <div className='second-title text-start w-100'>
                        <span> {t("Lastes")}  <span style={{color:"var(--main)"}}> 
                          {t("Events")} </span></span>
                    </div>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap cdcont'style={{gap:"35px"}}>
            <CustomCard icon={<Image src={event1} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t("Kasdi Merbah Ouargla")}  content1= {t('Planting approximately 50 shrubs at the three pole colleges and next to the university transportation bus stop.')} border={false} swap={true} link="https://www.facebook.com/FNTIC.ITI/posts/pfbid0L1WMSZQwGvHCXGJXtiqUej6bt6MHeWPTTEFkANt8PFXXwhBE1ixLVgWqAq6DpY2tl"></CustomCard>
            <CustomCard icon={<Image src={event2} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Ouargla Tramway')} content1= {t('Planting some areas of the institutions lands with seedlings and trees to develop and improve the aesthetic appearance of the institution.')} border={false} swap={true} link="https://www.facebook.com/snabel99/posts/pfbid02nSbdDd868qnjzV8VqP2vATKbThCXh5yJwkRS9vnSSvYnBDTyRBe9XWzE9yRyeY5yl"></CustomCard>
            <CustomCard icon={<Image src={event3} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Scout section')} content1= {t('A campaign to plant trees on the main street was also carried out, after which a meeting was held at the great Ramadan table of charity.')} border={false} swap={true} link="https://www.facebook.com/199412braim/posts/pfbid0F6aV92x312TYe8jwrqPTxRYxmAhVBuRF2qo91mXwxyofgTyapPxWovEqhYhtmSLvl"></CustomCard>

            </div>
        </Container>



        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center  intro-page' >
        <Image
        src={bg}
        alt="Intro Background"
        layout="fill"
        objectFit="cover"
        quality={100} // Optimized quality
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>

      <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t('Our Recycling Model')}</span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}> {t("We've Reached a Good Point")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("We've reached a breakthrough in plant disease detection! By combining multiple AI models and approaches, we've achieved strong performance in identifying various leaf diseases. While the final model is still evolving, our current system delivers accurate and fast results—empowering you to make informed plant care decisions in seconds.")} 
            
            </div>
            </div>
            
        </Container>

        </div>
    );
}

export default Home