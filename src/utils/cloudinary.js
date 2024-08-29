import {v2 as cloudinary} from "cloudinary"
import fs from"fs"
cloudinary.config({ 
  cloud_name: 'dr7tqzl2x', 
  api_key: '836915189347927', 
  api_secret: 'L42bzpnEMg4MjPCtIVrBFZIxyac' // Click 'View API Keys' above to copy your API secret
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
      if (!localFilePath) return null
      //upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
          resource_type: "auto"
      })
      // file has been uploaded successfull
      //console.log("file is uploaded on cloudinary ", response.url);
      fs.unlinkSync(localFilePath)
      return response;

  } catch (error) {
      fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
      return null;
  }
}



export {uploadOnCloudinary}