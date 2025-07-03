import { useState } from "react";
import { storage, db } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ImageManager() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `gallery/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        console.error("Upload error:", error);
        alert("Upload failed. Please try again.");
        setUploading(false);
      },
      () => {
        // Upload completed successfully, now get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log("File available at", url);

          await addDoc(collection(db, "gallery"), {
            imageUrl: url,
            createdAt: serverTimestamp(),
          });

          // Reset state after successful upload
          setProgress(0);
          setFile(null);
          setPreview(null);
          setUploading(false);
          alert("Image uploaded successfully");
        });
      }
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Optional: validate file type
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }

      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload Image</h2>

      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-black file:text-white
          hover:file:bg-gray-800"
        />
      </div>

      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="Preview"
            className="rounded-xl w-full object-cover max-h-64 border"
          />
        </div>
      )}

      {progress > 0 && (
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-black h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{progress}%</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`w-full py-2 rounded-xl text-white ${
          uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-gray-800"
        } transition duration-200`}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}
