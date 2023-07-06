import { useRef } from "react";

export const Preview = () => {

    const previewImage = (event) => {
        const imageFiles = event.target.files;
        const imageFilesLength = imageFiles.length;
        if (imageFilesLength > 0) {
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            const imagePreviewElement = document.querySelector(
                "#preview-selected-image"
            );
            imagePreviewElement.src = imageSrc;
            imagePreviewElement.style.display = "block";
        }
    };

    const hiddenFileInput = useRef(null);

    const handleClick = () => {
  
      hiddenFileInput.current.click();
    };

    return{previewImage,hiddenFileInput,handleClick}
}




