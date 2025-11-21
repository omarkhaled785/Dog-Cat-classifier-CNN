🐶🐱 Dog vs Cat Image Classifier (Flask + CNN)

This project is a deep learning image classifier that determines whether an uploaded image contains a Dog or a Cat.
The model is trained using a Convolutional Neural Network (CNN) and deployed through a Flask web application.

🚀 Features

Upload image (file upload or drag & drop)

Preview the image before classification

Backend prediction using a trained TensorFlow model

Confidence score output

Responsive UI with smooth animations

Full frontend integration using HTML, CSS, and JavaScript

🧠 Tech Stack
Backend

Python 3.10

Flask

TensorFlow / Keras

Pillow (image processing)

NumPy

Frontend

HTML + CSS (custom)

Vanilla JavaScript

📂 Project Structure
project/
│── app.py                 # Flask backend
│── model.h5               # Trained CNN model (ignored in repo)
│── requirements.txt
│── README.md
│
├── static/
│   ├── css/style.css
│   └── js/app.js
│
├── templates/
│   └── index.html
│
└── images/
    ├── cat.webp
    └── dog.webp

⚙️ Installation Guide
1️⃣ Clone repository
git clone https://github.com/omarkhaled785/Dog-Cat-classifier-CNN
cd Dog-Cat-classifier-CNN

2️⃣ Create a virtual environment
python -m venv venv
venv\Scripts\activate     # Windows

3️⃣ Install dependencies
pip install -r requirements.txt

4️⃣ Add your model

GitHub does not allow files over 100MB, so add your model manually:

/project_root/
   model.h5

5️⃣ Run the app
python app.py


Then open:

http://localhost:5000

📸 Demo Interface Preview

Upload image

Click Classify Image

See prediction + confidence score instantly

🚀 Deployment

You can deploy this Flask app easily on:

Render

Railway

PythonAnywhere

Heroku (via Docker)

If you want, I can prepare Procfile, render.yaml, or Dockerfile for deployment.

🎓 Author

Omar Khaled
CNN-based Dog vs Cat Classifier
Flask + Deep Learning Project