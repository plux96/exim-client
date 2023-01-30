import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const [certificates, setCertificates] = useState([]);
    const [selectedCert, setSelectedCert] = useState({})
    const [keyId, setKeyId] = useState(null);
    const [pkcsInfo, setPkcsInfo] = useState("");
    const [resultPkcs, setResultPkcs] = useState({});
    const EIMZOClient = new EIMZO();

    const handleOptionChange = (stateVal, newStateVal) => {
        authUser[stateVal] = newStateVal;
        setAuthUser(authUser);
    }

    const handleSelectChange = (e) => {
      console.log(e.target.value)
      setSelectedCert(e.target.value)
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
      `http://localhost:8000/api/v1/user`
    );
    return backendGuid;
  };


  const getData = () => {
    const getKeyData = async () => {
      const keyData = await EIMZOClient.loadKey(certificates[selectedCert]);
      console.log(keyData);
      setKeyId(keyData);
      console.log(keyData);
    };
    if (selectedCert) {
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
      const info = await axios.post("http://localhost:8000/api/v1/user", {
        pkcs: pkcsInfo,
        infoCert: keyId,
      },{
        withCredentials:true
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
                       <select defaultValue="s" required onChange={handleSelectChange} value={certificates && certificates[selectedCert]}>
                       <option disabled hidden value="s">Select certificate</option>
                        {certificates ? (certificates.map((value, index) => {
                          return  <option key={index} value={index}>{value.CN}</option>
                        })): ""}
                       </select>
                    </div>
                    <div className='auth__type'>
                        {/* <Choice  
                            text={'I agree that you can eat my Brosers Cookies'}
                            optionChange={{
                                change: handleOptionChange,
                                stateVal: 'privacyAgree'
                            }}
                        /> */}
                       
                    </div>
                    <button onClick={() => getData()} variant="contained">Enter system</button>
                </div>
            </div>
        </div>
    )
}