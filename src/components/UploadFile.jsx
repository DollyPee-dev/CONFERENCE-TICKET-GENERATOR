import { useState, useRef } from 'react'
import uploadImg from '/assets/images/icon-upload.svg'


const uploadFile = ({ setAvatar }) => {
    const [preview, setPreview] = useState(null);


    const fileInputRef = useRef();

    function allowedFile(file){
        const allowed = ["image/jpeg", "image/png"];

        if(!allowed.includes(file.type)) return alert("File type not supported");
        if(file.size > 500 * 1024) return alert("Max file size 500kb");

        const reader = new FileReader();

        reader.onload = () => {
            setPreview(reader.result);
            setAvatar(reader.result);
        }

        reader.readAsDataURL(file);
    }

    const handleFileChange = (e) => {
        e.preventDefault();

        const file = e.target.files?.[0];
        if(!file) return

        allowedFile(file);
    }

    const handleDrop = (e) => {
        const file = e.dataTransfer.files?.[0]
        if(!file) return

        allowedFile(file);
    }

    const handleDragover = (e) => {
        e.preventDefault();
    }


    const removeImage = () => {
        setPreview(null);
        setAvatar(null);
        fileInputRef.current.value = "";
    }

    return (
        <div
            className='
          relative cursor-pointer 
          border border-dashed border-white/40 
          p-3 flex items-center justify-center flex-col rounded-lg
          bg-neutralC-0/10'

            onDrop={handleDrop}
            onDragover={handleDragover}
            onClick={() => fileInputRef.current.click()}
        >
            {!preview ? (
                <>
                    <div
                        className='p-2 border 
          border-white/20 bg-neutralC-300/10 
            rounded-lg mb-2'
                    >
                        <img
                            src={uploadImg}
                            className='pointer-events-none'
                            alt=""
                        />
                    </div>
                    <p>Drag and drop or click to upload</p>
                </>
            ) :
                (
                    <>
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-[40px] h-[40px] object-cover rounded-lg"
                        />

                        <div className="flex gap-3 mt-3">
                            <button
                                onClick={
                                    (e) => {
                                        e.stopPropagation();
                                        removeImage()
                                    }
                                }

                                className="underline imgUploadBtn"
                            >
                                Remove image
                            </button>
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="imgUploadBtn"
                            >
                                Change image
                            </button>
                        </div>
                    </>
                )
            }
            <input
                id="avatar"
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/png, image/jpeg"
                required
            />
        </div>
    )
}

export default uploadFile