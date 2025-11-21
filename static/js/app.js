const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const previewContainer = document.getElementById('previewContainer');
        const imagePreview = document.getElementById('imagePreview');
        const classifyBtn = document.getElementById('classifyBtn');
        const loading = document.getElementById('loading');
        const result = document.getElementById('result');
        const errorDiv = document.getElementById('error');
        const predictionText = document.getElementById('predictionText');
        const confidenceText = document.getElementById('confidenceText');

        let selectedFile = null;

        // Handle file selection
        function handleFile(file) {
            if (!file || !file.type.startsWith('image/')) {
                showError('Please select a valid image file.');
                return;
            }

            selectedFile = file;
            const reader = new FileReader();
            
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                previewContainer.style.display = 'block';
                result.style.display = 'none';
                errorDiv.style.display = 'none';
            };
            
            reader.readAsDataURL(file);
        }

        // Show error message
        function showError(message) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            setTimeout(() => {
                errorDiv.style.display = 'none';
            }, 5000);
        }

        // Classify image
        async function classifyImage() {
            if (!selectedFile) {
                showError('Please select an image first.');
                return;
            }

            loading.style.display = 'block';
            result.style.display = 'none';
            errorDiv.style.display = 'none';
            classifyBtn.disabled = true;

            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch('/predict', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    const isCat = data.prediction === 'Cat';
                    predictionText.textContent = isCat ? '🐱 It\'s a Cat!' : '🐶 It\'s a Dog!';
                    confidenceText.textContent = `Confidence: ${data.confidence}%`;
                    
                    result.className = `result ${isCat ? 'cat' : 'dog'}`;
                    result.style.display = 'block';
                } else {
                    showError(data.error || 'Error classifying image');
                }
            } catch (error) {
                showError('Error connecting to server: ' + error.message);
            } finally {
                loading.style.display = 'none';
                classifyBtn.disabled = false;
            }
        }

        // Event listeners
        uploadArea.addEventListener('click', () => fileInput.click());
        
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });

        classifyBtn.addEventListener('click', classifyImage);

        // Drag and drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                handleFile(e.dataTransfer.files[0]);
            }
        });