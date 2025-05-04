from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import requests as req
import numpy as np
import json
from PIL import Image  
from io import BytesIO
import base64
import os
from dotenv import load_dotenv
# from google import genai
# import google.generativeai as genai



# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

from random import randrange


disease_class_names= ['Apple___Apple_scab',
 'Apple___Black_rot',
 'Apple___Cedar_apple_rust',
 'Apple___healthy',
 'Blueberry___healthy',
 'Cherry___healthy',
 'Cherry___Powdery_mildew',
 'Corn___Cercospora_leaf_spot Gray_leaf_spot',
 'Corn___Common_rust',
 'Corn___healthy',
 'Corn___Northern_Leaf_Blight',
 'Grape___Black_rot',
 'Grape___Esca_(Black_Measles)',
 'Grape___healthy',
 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
 'Orange___Haunglongbing_(Citrus_greening)',
 'Peach___Bacterial_spot',
 'Peach___healthy',
 'Pepper,_bell___Bacterial_spot',
 'Pepper,_bell___healthy',
 'Potato___Early_blight',
 'Potato___healthy',
 'Potato___Late_blight',
 'Raspberry___healthy',
 'Soybean___healthy',
 'Squash___Powdery_mildew',
 'Strawberry___healthy',
 'Strawberry___Leaf_scorch',
 'Tomato___Bacterial_spot',
 'Tomato___Early_blight',
 'Tomato___healthy',
 'Tomato___Late_blight',
 'Tomato___Leaf_Mold',
 'Tomato___Septoria_leaf_spot',
 'Tomato___Spider_mites Two-spotted_spider_mite',
 'Tomato___Target_Spot',
 'Tomato___Tomato_mosaic_virus',
 'Tomato___Tomato_Yellow_Leaf_Curl_Virus']


def upload_file(file, url="http://localhost:8000/classify"):
    with BytesIO() as buf:
      file.save(buf, 'jpeg')
      image_bytes = buf.getvalue()

      files = {"image": image_bytes}
      response = req.post(url, files=files)

    return response.json()

class Detect(Resource):
    def get(self):
        return {
        'message': "Detect Get"
        }

    def post(self):
        print(self)
        
        res =  request.json["files"]

        img = Image.open(BytesIO(base64.b64decode(res))).convert("RGB")

        # url = "https://seyf1elislam-test-test.hf.space/classify"
        url = "https://missingbreath-growth.hf.space/classify"

        try:
            response = upload_file(img,url)
            prediction = response["prediction"]
        except:
            print("error")
            prediction = randrange(38)
        
        try:
            info_url = "https://missingbreath-growth.hf.space/RAG"
            data = {
                "disease": disease_class_names[prediction],
                "severity": "severe"
            }
            response = req.post(info_url, json=data)
            response = response.json()
            info = response["answer"]
        except:
            info = ""
        return {"output":prediction,"info":info}

load_dotenv()  # Load environment variables from .env file
API = os.getenv("GOOGLE_API")
if not API:
    raise ValueError("GOOGLE_API environment variable is not set")


# client = genai.Client(api_key=API)
# Set API key
# genai.configure(api_key=API)
disease_info_text = "This comprehensive report details prevalent plant diseases affecting key crops in Algeria, along with organic and chemical treatment options. Tomato Diseases: Fusarium Wilt: Caused by Fusarium oxysporum f. sp. lycopersici (FOL) and F. oxysporum f. sp. radicis-lycopersici (FORL). Prevalent in North Algeria (Tlemcen, Oran, Mostaganem, Guelma, Sekikda) from 2012-2016. FOL races 2 and 3 identified. FORL common in Mediterranean countries, including Algeria. Early Blight: Caused by Alternaria solani and A. grandis. Prevalent in northwestern Algeria. Favored by warm, wet conditions. Tomato Leaf Curl New Delhi Virus (ToLCNDV): First reported in Algeria (Biskra) in 2019, affecting zucchini, melon, and cucumber. Stemphylium Leaf Spot: Caused by Stemphylium spp. Over 30% infection rate in northwestern Algeria (2018). Five species identified, including new reports for Algeria. Often co-occurs with Alternaria spp. Late Blight: Caused by Phytophthora infestans. Major clonal lineages (EU_13_A2, EU_2_A1, EU_23_A1) present. Linked to warm, rainy periods. Bacterial Canker: Caused by Clavibacter michiganensis subsp. michiganensis. Primarily in the Mediterranean area, including Algeria. Seed-borne. Tomato Brown Rugose Fruit Virus (ToBRFV): Causes black spots on fruits and leaf changes. Limited information on prevalence and management in the text. Date Palm Diseases: Bayoud Disease: Caused by Fusarium oxysporum f. sp. albedinis (Foa). Severe threat in western and central Algerian Sahara (Bechar, Adrar). Destroyed millions of palms. Black Scorch: Caused by Thielaviopsis punctulata. Manifests as hard, black lesions. Can cause neck bending and death. Brittle Leaf Disease: Lethal disease first reported in Biskra. Leaves become brittle, linked to manganese deficiency. Inflorescence Rot (Khamedj): Caused by fungi like Mauginiella scaetae and Thielaviopsis paradoxa. Causes brown rot of inflorescences, reducing fruit development. Wheat Diseases: Powdery Mildew, Yellow Rust, Brown Rust: Common foliar fungal diseases causing significant yield losses. Fungicide applications (azoxystrobin, cyproconazole, propiconazole) at stem elongation, booting, and heading stages are effective (up to 91.66% reduction in yellow rust severity with three applications). Fusarium Head Blight (FHB) and Fusarium Crown Rot (FCR): FCR causes yield losses in most wheat-growing areas. FHB can lead to mycotoxin contamination. Seed treatment with triazoles (tebuconazole, fludioxonil + difenoconazole) is effective. Biological control agents like Pseudomonas azotoformans and Trichoderma gamsii show potential against FCR. Ascochyta Leaf Spot: Caused by Ascochyta tritici. Favored by rainy, humid conditions. Control includes healthy, treated seeds, crop rotation, and foliar fungicides. Biological control agents (Trichoderma spp., Pseudomonas fluorescens, Bacillus spp.) show promise. Barley Yellow Dwarf Virus (BYDV): Destructive viral disease. Surveys (2014-2016) in seven regions revealed BYDV-PAV in barley, durum wheat, soft wheat, and oats. Can cause 20-80% yield loss in severe infections. Bipolaris Root Rot and Leaf Spot: Caused by Bipolaris sorokiniana. Affects all parts of the plant, limiting yield and quality. Citrus Diseases: Citrus Tristeza Virus (CTV): Serious threat. Severe VT genotype identified in Chlef Valley. Causes decline, stem pitting, and leaf yellowing. Management focuses on eradication and aphid vector control. Scaly Bark Psorosis, Concave Gum-Blind Pocket, Infectious Variegation: Widespread viral or virus-like diseases causing decline in Mediterranean citrus areas, including Algeria. Colletotrichum Anthracnose: Caused by Colletotrichum gloeosporioides. First report on citrus in Algeria, causing wither-tip on sweet orange and lemon. Potato Diseases: Potato Cyst Nematodes: Globodera pallida and G. rostochiensis present in Algeria. Early Blight: Caused by Alternaria grandis and A. protenta. Severe in northwestern Algeria. Fusarium Wilt and Tuber Dry Rot: Caused by Fusarium spp. (F. sambucinum particularly aggressive). Late Blight: Caused by Phytophthora infestans. Epidemics linked to rainy periods. Bacterial Soft Rot: Caused by Pectobacterium carotovorum. Reported in Western Algeria. Other Vegetable Diseases: Tomato Yellow Leaf Curl Bigeminivirus: Occurs in Algeria. Corn Leaf Spot and Leaf Blight: Caused by Bipolaris and Exserohilum spp. Several species newly identified in Algeria as causal agents. Downy Mildew of Cucurbits: Potential concern requiring specialized fungicides."
class Chat(Resource):
    def get(self):
        return {
        'message': "chat Get"
        }

    def post(self):
        print(self)
        context = ""

        question =  request.json["question"]

        # response = client.models.generate_content(
        #     model="gemini-2.0-flash",
        #     contents="Explain how AI works",
        # )
        
        # genai.configure(api_key=API)
        # # Select a model
        # model = genai.GenerativeModel("gemini-2.0-flash")
  
        # # Generate a response
        # response = model.generate_content(question)

        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API}"

        headers = {
            "Content-Type": "application/json"
        }

        data = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": "You are a chatbot called Growth, and you assist users with plant leaf disease identification and solutions. You should answer user questions based on the information provided in this text: "+disease_info_text+", the application features are: Extend Beyond Detection: Add Decision Support 2. Real-Time Multi-Plant Monitoring System 3. Offline Capability for Remote Farmers 4. Geo-AI for Regional Disease Prediction 5. Explainable AI (XAI)6. Community Reporting & AI Feedback Loop 7. Multi-Disease and Multi-Plant Support. The user's question is:" + question
                        }
                    ]
                }
            ]
        }

        response = req.post(url, headers=headers, json=data)
        
        data = json.loads(response.text)
        
        # return {"output":response.text}
        return {"output":data["candidates"][0]["content"]["parts"][0]["text"]}