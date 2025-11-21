from flask import Flask, render_template, request, jsonify
import numpy as np
from tensorflow import keras
from PIL import Image
import io
import base64

app = Flask(__name__)

# Load your model (change the path to your model file)
model = keras.models.load_model('model.h5')  # or 'model.keras'

def preprocess_image(image):
    """Preprocess image for the model"""
    # Resize image to model's expected input size (adjust if different)
    img = image.resize((128, 128))
    
    # Convert to array
    img_array = np.array(img)
    
    # Normalize pixel values to [0, 1]
    img_array = img_array / 255.0
    
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    
    return img_array

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get image from request
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        # Read and preprocess image
        image = Image.open(file.stream).convert('RGB')
        processed_image = preprocess_image(image)
        
        # Make prediction
        prediction = model.predict(processed_image)[0][0]
        
        # Determine class (adjust threshold if needed)
        if prediction > 0.5:
            result = 'Cat'
            confidence = prediction * 100
        else:
            result = 'Dog'
            confidence = (1 - prediction) * 100
        
        return jsonify({
            'prediction': result,
            'confidence': f'{confidence:.2f}'
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)