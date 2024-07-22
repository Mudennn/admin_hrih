document.getElementById('file-input').addEventListener('change', function(event) {
    const previewContainer = document.getElementById('preview-container');
    const placeholder = document.querySelector('.upload-placeholder');
    placeholder.style.display = 'none'; // Hide the placeholder
    
    previewContainer.innerHTML = ''; // Clear previous preview

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewContainer.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});