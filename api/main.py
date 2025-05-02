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
                            "text": question
                        }
                    ]
                }
            ]
        }

        response = req.post(url, headers=headers, json=data)
        
        data = json.loads(response.text)
        
        # return {"output":response.text}
        return {"output":data["candidates"][0]["content"]["parts"][0]["text"]}