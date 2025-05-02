import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../Styles/TabStyle.css"
import { Avatar } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import EmblaCarousel from '../Components/EmblaCarousel'
import { useTranslation } from "react-i18next";
import '../Styles/embla.css'
import Image from "next/image";
// Apple
import Apple0 from "../Images/GC/Apple___Apple_scab/img3.jpg";
import Apple1 from "../Images/GC/Apple___Black_rot/img5.jpg";
import Apple2 from "../Images/GC/Apple___Cedar_apple_rust/img9.jpg";
import Apple3 from "../Images/GC/Apple___healthy/img1.jpg";
import Apple4 from "../Images/GC/Apple___Apple_scab/img7.jpg";
import Apple5 from "../Images/GC/Apple___Black_rot/img10.jpg";
import Apple6 from "../Images/GC/Apple___Cedar_apple_rust/img6.jpg";
import Apple7 from "../Images/GC/Apple___healthy/img2.jpg";
import Apple8 from "../Images/GC/Apple___Black_rot/img8.jpg";
import Apple9 from "../Images/GC/Apple___Apple_scab/img4.jpg";

// Blueberry
import Blueberry0 from "../Images/GC/Blueberry___healthy/img2.jpg";
import Blueberry1 from "../Images/GC/Blueberry___healthy/img6.jpg";
import Blueberry2 from "../Images/GC/Blueberry___healthy/img1.jpg";
import Blueberry3 from "../Images/GC/Blueberry___healthy/img9.jpg";
import Blueberry4 from "../Images/GC/Blueberry___healthy/img10.jpg";
import Blueberry5 from "../Images/GC/Blueberry___healthy/img3.jpg";
import Blueberry6 from "../Images/GC/Blueberry___healthy/img5.jpg";
import Blueberry7 from "../Images/GC/Blueberry___healthy/img4.jpg";
import Blueberry8 from "../Images/GC/Blueberry___healthy/img7.jpg";
import Blueberry9 from "../Images/GC/Blueberry___healthy/img8.jpg";

// Cherry
import Cherry0 from "../Images/GC/Cherry___healthy/img3.jpg";
import Cherry1 from "../Images/GC/Cherry___Powdery_mildew/img5.jpg";
import Cherry2 from "../Images/GC/Cherry___Powdery_mildew/img9.jpg";
import Cherry3 from "../Images/GC/Cherry___healthy/img1.jpg";
import Cherry4 from "../Images/GC/Cherry___healthy/img10.jpg";
import Cherry5 from "../Images/GC/Cherry___Powdery_mildew/img2.jpg";
import Cherry6 from "../Images/GC/Cherry___healthy/img6.jpg";
import Cherry7 from "../Images/GC/Cherry___Powdery_mildew/img4.jpg";
import Cherry8 from "../Images/GC/Cherry___healthy/img8.jpg";
import Cherry9 from "../Images/GC/Cherry___Powdery_mildew/img7.jpg";

// Corn
import Corn0 from "../Images/GC/Corn___Common_rust/img2.jpg";
import Corn1 from "../Images/GC/Corn___healthy/img5.jpg";
import Corn2 from "../Images/GC/Corn___Northern_Leaf_Blight/img8.jpg";
import Corn3 from "../Images/GC/Corn___Cercospora_leaf_spot Gray_leaf_spot/img6.jpg";
import Corn4 from "../Images/GC/Corn___Common_rust/img1.jpg";
import Corn5 from "../Images/GC/Corn___healthy/img9.jpg";
import Corn6 from "../Images/GC/Corn___Northern_Leaf_Blight/img10.jpg";
import Corn7 from "../Images/GC/Corn___Common_rust/img4.jpg";
import Corn8 from "../Images/GC/Corn___healthy/img3.jpg";
import Corn9 from "../Images/GC/Corn___Cercospora_leaf_spot Gray_leaf_spot/img7.jpg";

// Grape
import Grape0 from "../Images/GC/Grape___Black_rot/img4.jpg";
import Grape1 from "../Images/GC/Grape___healthy/img2.jpg";
import Grape2 from "../Images/GC/Grape___Esca_(Black_Measles)/img5.jpg";
import Grape3 from "../Images/GC/Grape___Leaf_blight_(Isariopsis_Leaf_Spot)/img7.jpg";
import Grape4 from "../Images/GC/Grape___healthy/img10.jpg";
import Grape5 from "../Images/GC/Grape___Black_rot/img8.jpg";
import Grape6 from "../Images/GC/Grape___Esca_(Black_Measles)/img1.jpg";
import Grape7 from "../Images/GC/Grape___Leaf_blight_(Isariopsis_Leaf_Spot)/img4.jpg";
import Grape8 from "../Images/GC/Grape___Black_rot/img6.jpg";
import Grape9 from "../Images/GC/Grape___healthy/img3.jpg";

// Orange
import Orange0 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img1.jpg";
import Orange1 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img5.jpg";
import Orange2 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img7.jpg";
import Orange3 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img9.jpg";
import Orange4 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img3.jpg";
import Orange5 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img2.jpg";
import Orange6 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img6.jpg";
import Orange7 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img4.jpg";
import Orange8 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img10.jpg";
import Orange9 from "../Images/GC/Orange___Haunglongbing_(Citrus_greening)/img8.jpg";

// Potato
import Potato0 from "../Images/GC/Potato___Early_blight/img1.jpg";
import Potato1 from "../Images/GC/Potato___Late_blight/img3.jpg";
import Potato2 from "../Images/GC/Potato___healthy/img6.jpg";
import Potato3 from "../Images/GC/Potato___Early_blight/img9.jpg";
import Potato4 from "../Images/GC/Potato___Late_blight/img4.jpg";
import Potato5 from "../Images/GC/Potato___healthy/img1.jpg";
import Potato6 from "../Images/GC/Potato___Early_blight/img5.jpg";
import Potato7 from "../Images/GC/Potato___Late_blight/img10.jpg";
import Potato8 from "../Images/GC/Potato___healthy/img3.jpg";
import Potato9 from "../Images/GC/Potato___Early_blight/img2.jpg";

// Tomato
import Tomato0 from "../Images/GC/Tomato___Bacterial_spot/img3.jpg";
import Tomato1 from "../Images/GC/Tomato___Early_blight/img6.jpg";
import Tomato2 from "../Images/GC/Tomato___healthy/img9.jpg";
import Tomato3 from "../Images/GC/Tomato___Late_blight/img10.jpg";
import Tomato4 from "../Images/GC/Tomato___Leaf_Mold/img2.jpg";
import Tomato5 from "../Images/GC/Tomato___Septoria_leaf_spot/img1.jpg";
import Tomato6 from "../Images/GC/Tomato___Spider_mites Two-spotted_spider_mite/img8.jpg";
import Tomato7 from "../Images/GC/Tomato___Target_Spot/img5.jpg";
import Tomato8 from "../Images/GC/Tomato___Tomato_mosaic_virus/img7.jpg";
import Tomato9 from "../Images/GC/Tomato___Tomato_Yellow_Leaf_Curl_Virus/img4.jpg";

import Peach0 from "../Images/GC/Peach___Bacterial_spot/img6.jpg";
import Peach1 from "../Images/GC/Peach___healthy/img3.jpg";
import Peach2 from "../Images/GC/Peach___Bacterial_spot/img8.jpg";
import Peach3 from "../Images/GC/Peach___healthy/img9.jpg";
import Peach4 from "../Images/GC/Peach___Bacterial_spot/img1.jpg";
import Peach5 from "../Images/GC/Peach___healthy/img5.jpg";
import Peach6 from "../Images/GC/Peach___Bacterial_spot/img2.jpg";
import Peach7 from "../Images/GC/Peach___healthy/img7.jpg";
import Peach8 from "../Images/GC/Peach___Bacterial_spot/img10.jpg";
import Peach9 from "../Images/GC/Peach___healthy/img1.jpg";

import Pepper0 from "../Images/GC/Pepper,_bell___Bacterial_spot/img3.jpg";
import Pepper1 from "../Images/GC/Pepper,_bell___healthy/img5.jpg";
import Pepper2 from "../Images/GC/Pepper,_bell___Bacterial_spot/img9.jpg";
import Pepper3 from "../Images/GC/Pepper,_bell___healthy/img2.jpg";
import Pepper4 from "../Images/GC/Pepper,_bell___Bacterial_spot/img6.jpg";
import Pepper5 from "../Images/GC/Pepper,_bell___healthy/img10.jpg";
import Pepper6 from "../Images/GC/Pepper,_bell___Bacterial_spot/img2.jpg";
import Pepper7 from "../Images/GC/Pepper,_bell___healthy/img8.jpg";
import Pepper8 from "../Images/GC/Pepper,_bell___Bacterial_spot/img1.jpg";
import Pepper9 from "../Images/GC/Pepper,_bell___healthy/img4.jpg";

import Raspberry0 from "../Images/GC/Raspberry___healthy/img1.jpg";
import Raspberry1 from "../Images/GC/Raspberry___healthy/img4.jpg";
import Raspberry2 from "../Images/GC/Raspberry___healthy/img7.jpg";
import Raspberry3 from "../Images/GC/Raspberry___healthy/img2.jpg";
import Raspberry4 from "../Images/GC/Raspberry___healthy/img5.jpg";
import Raspberry5 from "../Images/GC/Raspberry___healthy/img10.jpg";
import Raspberry6 from "../Images/GC/Raspberry___healthy/img3.jpg";
import Raspberry7 from "../Images/GC/Raspberry___healthy/img6.jpg";
import Raspberry8 from "../Images/GC/Raspberry___healthy/img8.jpg";
import Raspberry9 from "../Images/GC/Raspberry___healthy/img9.jpg";

import Soybean0 from "../Images/GC/Soybean___healthy/img9.jpg";
import Soybean1 from "../Images/GC/Soybean___healthy/img3.jpg";
import Soybean2 from "../Images/GC/Soybean___healthy/img6.jpg";
import Soybean3 from "../Images/GC/Soybean___healthy/img1.jpg";
import Soybean4 from "../Images/GC/Soybean___healthy/img2.jpg";
import Soybean5 from "../Images/GC/Soybean___healthy/img10.jpg";
import Soybean6 from "../Images/GC/Soybean___healthy/img4.jpg";
import Soybean7 from "../Images/GC/Soybean___healthy/img8.jpg";
import Soybean8 from "../Images/GC/Soybean___healthy/img7.jpg";
import Soybean9 from "../Images/GC/Soybean___healthy/img5.jpg";

import Squash0 from "../Images/GC/Squash___Powdery_mildew/img1.jpg";
import Squash1 from "../Images/GC/Squash___Powdery_mildew/img7.jpg";
import Squash2 from "../Images/GC/Squash___Powdery_mildew/img3.jpg";
import Squash3 from "../Images/GC/Squash___Powdery_mildew/img9.jpg";
import Squash4 from "../Images/GC/Squash___Powdery_mildew/img6.jpg";
import Squash5 from "../Images/GC/Squash___Powdery_mildew/img10.jpg";
import Squash6 from "../Images/GC/Squash___Powdery_mildew/img2.jpg";
import Squash7 from "../Images/GC/Squash___Powdery_mildew/img5.jpg";
import Squash8 from "../Images/GC/Squash___Powdery_mildew/img4.jpg";
import Squash9 from "../Images/GC/Squash___Powdery_mildew/img8.jpg";

import Strawberry0 from "../Images/GC/Strawberry___healthy/img2.jpg";
import Strawberry1 from "../Images/GC/Strawberry___Leaf_scorch/img9.jpg";
import Strawberry2 from "../Images/GC/Strawberry___healthy/img1.jpg";
import Strawberry3 from "../Images/GC/Strawberry___Leaf_scorch/img3.jpg";
import Strawberry4 from "../Images/GC/Strawberry___healthy/img7.jpg";
import Strawberry5 from "../Images/GC/Strawberry___Leaf_scorch/img5.jpg";
import Strawberry6 from "../Images/GC/Strawberry___healthy/img10.jpg";
import Strawberry7 from "../Images/GC/Strawberry___Leaf_scorch/img2.jpg";
import Strawberry8 from "../Images/GC/Strawberry___healthy/img4.jpg";
import Strawberry9 from "../Images/GC/Strawberry___Leaf_scorch/img6.jpg";

// Apple
const apple_List = [
  { img: Apple0 }, { img: Apple1 }, { img: Apple2 }, { img: Apple3 }, { img: Apple4 },
  { img: Apple5 }, { img: Apple6 }, { img: Apple7 }, { img: Apple8 }, { img: Apple9 }
];

// Blueberry
const blueberry_List = [
  { img: Blueberry0 }, { img: Blueberry1 }, { img: Blueberry2 }, { img: Blueberry3 }, { img: Blueberry4 },
  { img: Blueberry5 }, { img: Blueberry6 }, { img: Blueberry7 }, { img: Blueberry8 }, { img: Blueberry9 }
];

// Cherry
const cherry_List = [
  { img: Cherry0 }, { img: Cherry1 }, { img: Cherry2 }, { img: Cherry3 }, { img: Cherry4 },
  { img: Cherry5 }, { img: Cherry6 }, { img: Cherry7 }, { img: Cherry8 }, { img: Cherry9 }
];

// Corn
const corn_List = [
  { img: Corn0 }, { img: Corn1 }, { img: Corn2 }, { img: Corn3 }, { img: Corn4 },
  { img: Corn5 }, { img: Corn6 }, { img: Corn7 }, { img: Corn8 }, { img: Corn9 }
];

// Grape
const grape_List = [
  { img: Grape0 }, { img: Grape1 }, { img: Grape2 }, { img: Grape3 }, { img: Grape4 },
  { img: Grape5 }, { img: Grape6 }, { img: Grape7 }, { img: Grape8 }, { img: Grape9 }
];

// Orange
const orange_List = [
  { img: Orange0 }, { img: Orange1 }, { img: Orange2 }, { img: Orange3 }, { img: Orange4 },
  { img: Orange5 }, { img: Orange6 }, { img: Orange7 }, { img: Orange8 }, { img: Orange9 }
];

// Peach
const peach_List = [
  { img: Peach0 }, { img: Peach1 }, { img: Peach2 }, { img: Peach3 }, { img: Peach4 },
  { img: Peach5 }, { img: Peach6 }, { img: Peach7 }, { img: Peach8 }, { img: Peach9 }
];

// Pepper
const pepper_List = [
  { img: Pepper0 }, { img: Pepper1 }, { img: Pepper2 }, { img: Pepper3 }, { img: Pepper4 },
  { img: Pepper5 }, { img: Pepper6 }, { img: Pepper7 }, { img: Pepper8 }, { img: Pepper9 }
];

// Potato
const potato_List = [
  { img: Potato0 }, { img: Potato1 }, { img: Potato2 }, { img: Potato3 }, { img: Potato4 },
  { img: Potato5 }, { img: Potato6 }, { img: Potato7 }, { img: Potato8 }, { img: Potato9 }
];

// Raspberry
const raspberry_List = [
  { img: Raspberry0 }, { img: Raspberry1 }, { img: Raspberry2 }, { img: Raspberry3 }, { img: Raspberry4 },
  { img: Raspberry5 }, { img: Raspberry6 }, { img: Raspberry7 }, { img: Raspberry8 }, { img: Raspberry9 }
];

// Soybean
const soybean_List = [
  { img: Soybean0 }, { img: Soybean1 }, { img: Soybean2 }, { img: Soybean3 }, { img: Soybean4 },
  { img: Soybean5 }, { img: Soybean6 }, { img: Soybean7 }, { img: Soybean8 }, { img: Soybean9 }
];

// Squash
const squash_List = [
  { img: Squash0 }, { img: Squash1 }, { img: Squash2 }, { img: Squash3 }, { img: Squash4 },
  { img: Squash5 }, { img: Squash6 }, { img: Squash7 }, { img: Squash8 }, { img: Squash9 }
];

// Strawberry
const strawberry_List = [
  { img: Strawberry0 }, { img: Strawberry1 }, { img: Strawberry2 }, { img: Strawberry3 }, { img: Strawberry4 },
  { img: Strawberry5 }, { img: Strawberry6 }, { img: Strawberry7 }, { img: Strawberry8 }, { img: Strawberry9 }
];

// Tomato
const tomato_List = [
  { img: Tomato0 }, { img: Tomato1 }, { img: Tomato2 }, { img: Tomato3 }, { img: Tomato4 },
  { img: Tomato5 }, { img: Tomato6 }, { img: Tomato7 }, { img: Tomato8 }, { img: Tomato9 }
];

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 16
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ClassGenerator = (Food_List = Food_List) =>{
  return (
    <EmblaCarousel slides={Food_List.map(product => {
      return(
        <div className='d-flex flex-column productDisplayer justify-content-center align-items-center w-100 h-100'>
            <div className='w-100 h-75'>
            <Image src={product.img} alt="" className='vs-img'
            objectFit="cover" height={250} width={250}/>
            </div>
        </div>
      );
    })} options={OPTIONS} />
  );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
            {/* <Typography></Typography> */}
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsHolder = () => {
    const [value, setValue] = React.useState(0);
    const { t, i18n } = useTranslation();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
   
    <Box sx={{ width: '100%' }}>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs  value={value} onChange={handleChange} centered  >
        <Tab label={t("Apple")} {...a11yProps(0)} className='Tab' />
        <Tab label={t("Blueberry")} {...a11yProps(1)} className='Tab'/>
        <Tab label={t("Cherry")} {...a11yProps(2)} className='Tab'/>
        <Tab label={t("Corn")} {...a11yProps(3)} className='Tab'/>
        <Tab label={t("Grape")} {...a11yProps(4)} className='Tab'/>
        <Tab label={t("Orange" )}{...a11yProps(5)} className='Tab'/>
        <Tab label={t("Peach")} {...a11yProps(6)} className='Tab'/>
        <Tab label={t("Pepper bell")} {...a11yProps(7)} className='Tab'/>
        <Tab label={t("Potato")} {...a11yProps(8)} className='Tab'/>
        <Tab label={t("Raspberry")} {...a11yProps(9)} className='Tab'/>
        <Tab label={t("Soybean")} {...a11yProps(10)} className='Tab'/>
        <Tab label={t("Squash")} {...a11yProps(11)} className='Tab'/>
        <Tab label={t("Strawberry")} {...a11yProps(12)} className='Tab'/>
        <Tab label={t("Tomato")} {...a11yProps(13)} className='Tab'/>
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>{ClassGenerator(apple_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={1}>{ClassGenerator(blueberry_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={2}>{ClassGenerator(cherry_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={3}>{ClassGenerator(corn_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={4}>{ClassGenerator(grape_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={5}>{ClassGenerator(orange_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={6}>{ClassGenerator(peach_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={7}>{ClassGenerator(pepper_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={8}>{ClassGenerator(potato_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={9}>{ClassGenerator(raspberry_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={10}>{ClassGenerator(soybean_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={11}>{ClassGenerator(squash_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={12}>{ClassGenerator(strawberry_List)}</CustomTabPanel>
      <CustomTabPanel value={value} index={13}>{ClassGenerator(tomato_List)}</CustomTabPanel>

    </Box>
    </>

  )
}

export default TabsHolder