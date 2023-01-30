import { useId } from 'react';
import { IconButton, Box } from "@mui/material";
import { 
  KeyboardArrowRightOutlined as ArrowRight,
  CloudDone as DoneIcon
} from "@mui/icons-material";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import axios from 'axios';

export default function Upload(selectionProps) {
  const {
    label,
    fileName,
    progress,
    placholder = "Выберите файл...",
    //eslint-disable-next-line
    optionChange
  } = selectionProps;
  const htmlKey = useId();
  const isUploaded = function(fileName) {
    if (fileName !== "" && progress === 100) {
      return true;
    } else if (!fileName && progress !== 100) {
      return false;
    }
  }(fileName, progress);

  const handleChangeUpload = async (event) => {
    const serverAPI = "https://eximerp-production.up.railway.app/api/v1/upload_file/upload"
    const uploadedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', uploadedFile);

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   }, 
    // };

    const response = await axios.post(serverAPI, formData);
    console.log(response);
  }

  return (
    <div className="content__submit">
      <h4>{label}</h4>
      <div className="content__submit--selection">
        <label className="submit-upload" htmlFor={htmlKey}>
          { isUploaded ? (
            <h4 className="text-white w-100">
              Загружено! <span className={"color-orange"}>{fileName}</span>
            </h4>
          ) : (
            <span className="submit-upload--label">{placholder}</span>
          )}
          <input
            id={htmlKey}
            type={"file"}
            className="submit-upload--input"
            onChange={handleChangeUpload}
          />
        </label>
        { !isUploaded && (
          <Box sx={{ width: "100%" }} className={`submit-upload--progress`}>
            <LinearProgressWithLabel value={progress ? progress : 0}/>
          </Box>
        )}
        <IconButton className="submit-button">
          <label htmlFor={htmlKey}>
            { isUploaded ? (
              <DoneIcon/>
            ) : (
              <ArrowRight/>
            )}
          </label>
        </IconButton>
      </div>
    </div>
  );
}
