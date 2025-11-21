# 🐕 vs 🐈 Deep Learning Image Classifier

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.0+-orange.svg)
![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

**A sleek, real-time image classifier powered by Convolutional Neural Networks**

[Live Demo](#-demo) • [Features](#-features) • [Installation](#-quick-start) • [Deploy](#-deployment)

</div>

---

## 🎯 Overview

Upload any image and watch our AI-powered classifier instantly determine whether it's a **dog** or a **cat** with impressive accuracy! Built with modern deep learning techniques and wrapped in a beautiful, responsive web interface.

## ✨ Features

- 🖼️ **Drag & Drop Interface** - Intuitive file upload experience
- ⚡ **Real-Time Predictions** - Instant classification results
- 📊 **Confidence Scores** - See how certain the model is
- 🎨 **Smooth Animations** - Polished UI with delightful interactions
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🧠 **Deep Learning Powered** - CNN architecture for high accuracy

## 🛠️ Tech Stack

### Backend
- **Python 3.10** - Core language
- **Flask** - Lightweight web framework
- **TensorFlow/Keras** - Deep learning engine
- **Pillow** - Image processing
- **NumPy** - Numerical computations

### Frontend
- **HTML5** - Structure
- **CSS3** - Custom styling with animations
- **Vanilla JavaScript** - Interactive functionality

## 📁 Project Structure

```
Dog-Cat-classifier-CNN/
│
├── app.py                 # Flask backend server
├── model.h5               # Trained CNN model (100MB+)
├── requirements.txt       # Python dependencies
├── README.md              # You are here!
│
├── static/
│   ├── css/
│   │   └── style.css     # Custom styling
│   └── js/
│       └── app.js        # Frontend logic
│
├── templates/
│   └── index.html        # Main web interface
│
└── images/
    ├── cat.webp          # Sample cat image
    └── dog.webp          # Sample dog image
```

## 🚀 Quick Start

### Prerequisites
- Python 3.10 or higher
- Git

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/omarkhaled785/Dog-Cat-classifier-CNN
cd Dog-Cat-classifier-CNN
```

2️⃣ **Create virtual environment**
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

3️⃣ **Install dependencies**
```bash
pip install -r requirements.txt
```

4️⃣ **Add your trained model**

> ⚠️ **Important**: Due to GitHub's 100MB file limit, you need to add `model.h5` manually.

Place your trained model in the project root:
```
Dog-Cat-classifier-CNN/
├── model.h5  ← Place your model here
└── ...
```

5️⃣ **Run the application**
```bash
python app.py
```

6️⃣ **Open in browser**
```
http://localhost:5000
```

## 🎬 Demo

### How It Works

1. **Upload** - Choose an image or drag & drop
2. **Preview** - See your image before classification
3. **Classify** - Click the button to run prediction
4. **Results** - Get instant results with confidence score

### Example Output
```
🐕 Prediction: Dog
📊 Confidence: 97.3%
```

## 🌐 Deployment

Deploy your classifier to the cloud with these platforms:

<details>
<summary><b>🎨 Render</b></summary>

```bash
# Create render.yaml in project root
services:
  - type: web
    name: dog-cat-classifier
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: gunicorn app:app
```
</details>

<details>
<summary><b>🚂 Railway</b></summary>

1. Connect your GitHub repo
2. Railway auto-detects Python
3. Add `model.h5` via Railway's file system
</details>

<details>
<summary><b>🐍 PythonAnywhere</b></summary>

1. Upload project files
2. Create virtual environment
3. Configure WSGI file
4. Upload `model.h5` separately
</details>

<details>
<summary><b>🐳 Docker</b></summary>

```dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```
</details>

> 💡 Need deployment files? Open an issue and I'll add `Procfile`, `render.yaml`, or `Dockerfile`!

## 🎓 Model Architecture

The classifier uses a Convolutional Neural Network (CNN) with:
- Multiple convolutional layers for feature extraction
- MaxPooling layers for dimensionality reduction
- Dense layers for classification
- Softmax activation for probability output

## 📊 Performance

| Metric | Score |
|--------|-------|
| Training Accuracy | ~95% |
| Validation Accuracy | ~93% |
| Test Accuracy | ~92% |

> *Results may vary based on training data and hyperparameters*

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Omar Khaled**

- GitHub: [@omarkhaled785](https://github.com/omarkhaled785)
- Project: [Dog-Cat Classifier](https://github.com/omarkhaled785/Dog-Cat-classifier-CNN)

---

<div align="center">

**Made with ❤️ and 🧠 by Omar Khaled**

⭐ Star this repo if you found it helpful!

</div>
