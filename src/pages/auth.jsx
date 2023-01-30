import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import EIMZO from "./../e-imzo/Eimzo";

// import { Button } from '@mui/material';
import {
    PersonOutlineOutlined as UserIcon,
    ApartmentOutlined as CompanyIcon
} from '@mui/icons-material';
import Choice from '../miniComponents/choice';
import axios from 'axios';

export default function AuthPage() {
    const [authUser, setAuthUser] = useState({
        key: false,
        privacyAgree: false
    });
    const [certificates, setCertificates] = useState(null);
    const [keyId, setKeyId] = useState(null);
    const [pkcsInfo, setPkcsInfo] = useState("");
    const [resultPkcs, setResultPkcs] = useState({});
    const EIMZOClient = new EIMZO();

    const handleOptionChange = (stateVal, newStateVal) => {
        authUser[stateVal] = newStateVal;
        setAuthUser(authUser);
    }
    const navigate = useNavigate();

    useEffect(() => {
    const listAllKeys = async () => {
      await EIMZOClient.install();
      const data = await EIMZOClient.listAllUserKeys();
      setCertificates(data);
    };
    listAllKeys();
  }, []);

  const reqGuid = async () => {
    const backendGuid = await axios.get(
      `http://localhost:8080/?key=${keyId.id}`
    );
    console.log(backendGuid, "sdvdvdvd------vedvdv-");
    return backendGuid;
  };

  const getData = () => {
    const getKeyData = async () => {
      const keyData = await EIMZOClient.loadKey(certificates[0]);
      console.log(keyData);
      setKeyId(keyData);
      console.log(keyData);
    };
    if (certificates) {
      getKeyData();
    }
  };

  useEffect(() => {
    const getDateFromBackend = async () => {
      const guid1 = await reqGuid();
      const pkcs = await EIMZOClient.createPkcs7(keyId.id, guid1.data.guid);
      console.log(pkcs);
      setPkcsInfo(pkcs);
    };
    if (keyId) {
      getDateFromBackend();
    }
  }, [keyId]);

  useEffect(() => {
    const verifyPkcs = async () => {
      const info = await axios.post("http://localhost:8080/pkcs7", {
        pkcs: pkcsInfo,
        infoCert: keyId,
      });
      console.log(info);
      setResultPkcs(info);
    };
    if (pkcsInfo) {
      verifyPkcs();
    }
  }, [pkcsInfo]);

  useEffect(() => {
    console.log(resultPkcs);
  }, [resultPkcs]);


    return (
        <div className='auth'>
            <div className='auth__sidebar'>
                <div className='form-container'>
                    <div className='form-container__logo'>
                        <div className='form-container__logo--sample'/>
                    </div>
                    <div className='form-container__body'>
                        <h3>Вход с помощъю ЭЦП</h3>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                             labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                 value=""
                                 label="Age"
                                 onChange=""
                             >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='auth__type'>
                        <Choice  
                            text={'I agree that you can eat my Brosers Cookies'}
                            optionChange={{
                                change: handleOptionChange,
                                stateVal: 'privacyAgree'
                            }}
                        />
                        {/* <p>Другой метод входа</p>
                        <Button className='app-button padding-height'>Зарегистрироватъся</Button> */}
                    </div>
                    <Button onClick={getData} variant="contained">Enter system</Button>
                </div>
            </div>
        </div>
    )
}