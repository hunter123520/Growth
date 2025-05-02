'use client'
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import Container from "react-bootstrap/Container";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Industries(){
    const { t, i18n } = useTranslation();
    return(
        <div className="" >
            <Container fluid="xxl" className="CPT1" style={{height:"125vh"}}>
                <div className="CPTTitle">
                    {t("The Industries Center")}
                
                <hr className="lineSt" />
                </div>
                <div className="CPTdesc" style={{width:"80%"}}>
                {t("We offer highly trained AI models designed to efficiently detect plant leaf diseases. Our models are trained on a vast dataset of plant images, providing a broad understanding of various diseases and their symptoms. Following this, the models undergo fine-tuning with a more specific, disease-focused dataset, enhancing their ability to accurately identify and diagnose plant health issues. This approach results in precise, reliable predictions, allowing our models to differentiate between different plant diseases effectively. With our advanced technology, you can trust our models to optimize plant care practices and contribute to healthier, more resilient crops.")}
                
                </div>
                <div className="CPTdesc">
                {t("For more information or to order the models, please contact us at sellami.mohammedabdelhadi@univ-ouargla.dz")}
                
                </div>
            </Container>
        </div>
    );
}

export default Industries;