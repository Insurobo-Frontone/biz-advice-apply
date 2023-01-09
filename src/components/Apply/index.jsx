import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import DaumPostcode from "react-daum-postcode";
import Popup from '../Popup';
import Title from '../Title';
import { useForm } from 'react-hook-form';

import selectIcon from '../../assets/icon/select-icon.png';
import selectIconRevers from '../../assets/icon/select-icon-revers.png';
import searchIcon from '../../assets/icon/search-icon.png';
import selectIconMb from '../../assets/icon/select-icon-mb.png';
import selectIconReversMb from '../../assets/icon/select-icon-revers-mb.png';
import checkicon from '../../assets/icon/checkbox-icon.png';
import checkedIcon from '../../assets/icon/checkedIcon.png';

const CHECK_DATA = [
  { id: 1, name: 'CNSUT_LAW', label: '법률', checked: true},
  { id: 2, name: 'CNSUT_TAX', label: '세무·회계', checked: false},
  { id: 3, name: 'CNSUT_EMPLYM', label: '고용지원', checked: false},
  { id: 4, name: 'CNSUT_GVRN', label: '정부지원자금', checked: false},
  { id: 5, name: 'CNSUT_RD', label: 'R&D 지원', checked: false},
  { id: 6, name: 'CNSUT_ESTATE', label: '부동산', checked: false},
  { id: 7, name: 'CNSUT_NLT', label: '국세환급', checked: false},
];

const ApplyContainer = styled.form`
  position: relative;
  padding-bottom: 61px;

  ${(props) => props.theme.window.mobile} {
    padding: 0 26px 45px;
  }
`;

const InputContainer = styled.div`
  padding: 0 34px;

  ${(props) => props.theme.window.mobile} {
    padding: 0;
  }
`;

const CheckList = styled.ul`
  width: 100%;
  margin-bottom: 30px;

  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
  }
`;

const CheckInputGroup = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D8D8D8;
  
  > label {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.color.GRAY};
    font-size: 15px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    appearance: none;
  }

  input[type="checkbox"]::after {
    content: '';
    display: flex;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
  }

  input[type="checkbox"]:checked::after {
    background-image: url(${checkicon});
    background-size: 100%;
    border: none;
  }


  ${props => props.theme.window.mobile} {
    label {
      font-size: 13px;
    }
  }
`;


const PaddingBox = styled.div`
  width: 7.8%;
  > span {
    width: 100%;
    display: flex;
    font-size: 15px;
    color: #D8D8D8;
    justify-content: center;
    line-height: 50px;
  }


  ${props => props.theme.window.mobile} {
    width: 20.6%;
    > span {
      line-height: 35px;
      font-size: 13px;
    }
    display: none;

    ${props => props.dash && css`
      display: block;
      
    `}
  }
`;

const InputGrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${props => props.theme.window.mobile} {
    flex-direction: column;
    
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input[type="date"] {
    width: 100%;
    padding: 13px 16px;
    height: 50px;
    border: 1px solid #D8D8D8;
    border-radius: 5px;
    font-size: 13px;
    box-sizing: border-box;
    background: none;
    position: relative;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-clear-button {
    display: none;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }
  input[type="date"]::before {
    content: attr(data-placeholder);
    width: 100%;
  }
  input[type="date"]:valid::before {
    display: none;
  }

  ${props => props.theme.window.mobile} {
    margin-bottom: 20px;

    ${props => props.last && css`
      margin-bottom: 0;
    `}

    input[type="date"] {
      padding: 7px;
      height: 35px;
    }
  }
`;



const Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  height: 50px;
  border: 1px solid #D8D8D8;
  border-radius: 5px;
  font-size: 13px;
  box-sizing: border-box;
  background: none;
  ::placeholder {
    color: ${(props) => props.theme.color.INPUT_GRAY};
  }

  ${props => props.theme.window.mobile} {
    padding: 7px;
    height: 35px;
  }
`;

const Label = styled.label`
  color: #585858;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 12px;
  display: block;
  width: 100%;

  ${props => props.margin && css`
    margin-bottom: 21px;
  `}
  ${props => props.theme.window.mobile} {
    margin-bottom: 8px;
  }
`;

const Button = styled.div`
  position: absolute;
  bottom: -120px;
  width: 100%;
  height: 70px;
  margin-top: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.color.PRIMARY};

  > span {
    cursor: pointer;
    color: ${(props) => props.theme.color.WHITE};
    font-size: 15px;
    font-weight: 500;
  }


  ${(props) => props.theme.window.mobile} {
    height: 50px;
    bottom: 0;
    position: relative;
    margin-top: 40px;

    ${props => props.short && css`
    margin-top: 57px;
    `}
  }
`;

const ButtonValue = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: transparent;
  cursor: pointer;
  display: block;
`;

const SearchInput = styled.div`
  position: relative;
`;

const SearchButton = styled.a`
  display: block;
  background-image: url(${searchIcon});
  background-position: center;
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 12px;
  bottom: 12.5px;

  ${props => props.theme.window.mobile} {
    width: 16px;
    height: 16px;
    background-size: contain;
    right: 12px;
    top: 10px;
  }
`;

const SumInput = styled.div`
  position: relative;
  &::after {
    content: '원';
    display: block;
    position: absolute;
    right: 13px;
    bottom: 35%;
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.color.GRAY};
  }

  ${props => props.theme.window.mobile} {
    &::after {
      bottom: 30%;
    }
  }
`;

const RadioGrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

const RadioBox = styled.div`
  position: relative;
  display: flex;
  width: 48.3%;
  margin-bottom: 30px;

  input[type="radio"] {
    position: absolute;
    left: -1000%;
  }

  input[type="radio"] + label {
    font-size: 13px;
    color: #dadada;
    width: 100%;
    border: 1px solid #dadada;
    background-color: #FFF;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
  }
  input[type="radio"]:checked + label {
    color: #FFF;
    background-color: ${(props) => props.theme.color.PRIMARY};
  }

  ${props => props.theme.window.mobile} {
    width: 47%;
    margin-bottom: 20px;
    
    input[type="radio"] + label {
      line-height: 35px;
    }
  }
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 13px 16px;
  height: 50px;
  border: 1px solid #D8D8D8;
  border-radius: 5px;
  font-size: 13px;
  box-sizing: border-box;
  background: none;
  color: ${(props) => props.theme.color.GRAY};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${selectIcon}) no-repeat 95% 50%;
  :focus {
    background: url(${selectIconRevers}) no-repeat 95% 50%;
  }

  ${props => props.theme.window.mobile} {
    height: 35px;
    padding: 7px;
    background: url(${selectIconMb}) no-repeat 95% 50%;
    :focus {
      background: url(${selectIconReversMb}) no-repeat 95% 50%;
    }
  }
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  line-height: 18px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING};
`;

const CalenderTitle = styled.div`
  display: flex;

`;

const SubCheckGroup = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 11px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    appearance: none;
    border: 1px solid #D8D8D8;
    margin: 0;
  }

  input[type="checkbox"]:checked {
    background-image: url(${checkedIcon});
    background-color: #5974FF;
    background-repeat: no-repeat;
    background-position: center;
    border-color: #5974FF;
  }

  label {
    font-size: 15px;
    color: #D8D8D8;
    margin-left: 8px;
    font-weight: 350;
    letter-spacing: 0.5px;
    /* transform: scaleY(1.1); */
  }

  ${props => props.theme.window.mobile} {
    label {
      font-size: 13px;
    }
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #D8D8D8;
  resize: none;
  width: 100%;
  border-radius: 5px;
  height: 190px;
  box-sizing: border-box;
  padding: 13px 16px;

  ${props => props.theme.window.mobile} {
    height: 130px;
    padding: 7px;
  }
`;

const FormComponent = ({detail, short}) => {
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch,
    trigger,
    reset, 
    formState: { errors }} = useForm({
      mode: 'onBlur',
    });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [date, setDate] = useState(false);

  // 데이터 전송
  const onSubmit = (data) => {
    console.log(watch())
    console.log(JSON.stringify(data), data)
    
    const jsonData = JSON.stringify(data);
    
    fetch('https://insrb.com/bizAdvice/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonData
    }).then((res) => {
      if (res.status == 417) {
        alert('처리중 오류가 발생하였습니다. 잠시 후 다시 신청해 주시기 바랍니다.')
        // reset()
      }
      if (res.status == 404) {
        alert('처리중 오류가 발생하였습니다. 잠시 후 다시 신청해 주시기 바랍니다.')
        // reset()
      }
      else {
        alert('신청이 완료되었습니다.')
        reset()
      }
    })
  }
  
  const checkValid = () => {
    if (!watch('CNSUT_EMPLYM') &&
    !watch('CNSUT_ESTATE') &&
    !watch('CNSUT_GVRN') &&
    !watch('CNSUT_LAW') &&
    !watch('CNSUT_NLT') &&
    !watch('CNSUT_RD') &&
    !watch('CNSUT_TAX')) {
      return false
    }
    return true
  }

  const onError = (error) => {
    console.log(error);
  }
  const openPostCode = () => {
    setIsPopupOpen(true);
  }

  const closePostCode = () => {
    setIsPopupOpen(false)
  }

  const postStyle = {
    width: '600px',
    height: '600px',
    position: 'absolute',
    top: '15%'
  }

  const mbPostStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '5%',
  }

  // 주소검색
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
      
    console.log(fullAddress)
    console.log(data.zonecode)
    setValue('BPLC_ADRES', fullAddress);
    trigger('BPLC_ADRES')
    closePostCode();
  }


  // 사업자등록번호
  const validateBizNum = (value) => {
    var number = value
    console.log(value)
    var numberMap = number.replace(/-/gi, '').split('').map(function (d){
      return parseInt(d, 10);
    });

    if(numberMap.length === 10){
      var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
      var chk = 0;
  
      keyArr.forEach(function(d, i){
        chk += d * numberMap[i];
      });
  
      chk += parseInt((keyArr[8] * numberMap[8])/ 10, 10);
      return Math.floor(numberMap[9]) === ( (10 - (chk % 10) ) % 10);
    }
    return false;
  }

  // 주민번호
  const juminCheck = () => {
    const reg1 = watch("RPRSNTV_RRN1"); 
    const reg2 = watch("RPRSNTV_RRN2");

    const totalJumin = reg1+reg2
    console.log('totalJumi', totalJumin)

    const arrNum1 = new Array();
	  const arrNum2 = new Array();

    for (var i = 0; i < reg1.length; i++) {
      arrNum1[i] = reg1.charAt(i);
    }
    for (var i = 0; i < reg2.length; i++) {
      arrNum2[i] = reg2.charAt(i);
    }

    var tempSum = 0;
    for (var i = 0; i < reg1.length; i++) {
      tempSum += arrNum1[i] * (2 + i);
    }

    for (var i = 0; i < reg2.length - 1; i++) {
      if (i >= 2) {
        tempSum += arrNum2[i] * i;
      } else {
        tempSum += arrNum2[i] * (8 + i);
      }
    }

    if (arrNum2[0] == 1 ||
      arrNum2[0] == 2 ||
      arrNum2[0] == 3 ||
      arrNum2[0] == 4 ||
      arrNum2[0] == 0 ||
      arrNum2[0] == 9) {
      if ((11 - (tempSum % 11)) % 10 != arrNum2[6]) {
        return false;
      } else {
        return true
      }
    }
  }
  const dateDefault = () => {
    setDate(!date);
    if (!date) {
      setValue('HOPE_SCHDUL', '미정')
    }
  }

  return (
    <>
    {isPopupOpen && (
      <Popup onClick={closePostCode}>
        <DaumPostcode
          onComplete={handlePostCode}
          style={window.innerWidth < 768 ? mbPostStyle : postStyle }
        />
      </Popup>
    )}
    <ApplyContainer>
      {detail && (
        <>
          <InputContainer>
             <InputGrop>
               <InputBox>
                 <Title title='기업명' />
                 <Input type='text' name='ENTRPRS_NM' {...register('ENTRPRS_NM', {
                   required: '*필수 입력 항목입니다.'
                 })} />
                 {errors.ENTRPRS_NM?.message && (<ErrorMessage>{errors.ENTRPRS_NM?.message}</ErrorMessage>)} 
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Title title='사업자등록번호'/>
                 <Input type='number' name='BUSINESS_NUMBER' {...register('BUSINESS_NUMBER', {
                   required: '*필수 입력 항목입니다.',
                   validate: {
                     check: (value) => validateBizNum(value) ? true : '유효하지 않은 사업자등록번호입니다'
                   }
                 })} />
                 {errors?.BUSINESS_NUMBER?.message && (<ErrorMessage>{errors?.BUSINESS_NUMBER?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <InputGrop>
               <InputBox>
                 <Title title='대표자' />
                 <Input type='text' name='RPRSNTV' {...register('RPRSNTV', {
                   required: '*필수 입력 항목입니다.',
                 })} />
                 {errors.RPRSNTV?.message && (<ErrorMessage>{errors.RPRSNTV?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Title title='대표자 연락처' />
                 <Input type='phone' name='RPRSNTV_TELNO' placeholder='‘-’없이 숫자만 입력해주세요' {...register('RPRSNTV_TELNO', {
                   required: '*필수 입력 항목입니다.',
                   pattern: {
                     value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                     message: '잘못된 전화번호'
                   }
                 })} />
                 {errors.RPRSNTV_TELNO?.message && (<ErrorMessage>{errors.RPRSNTV_TELNO?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <Title title='대표자 주민번호' />
             <RadioGrop>
               <InputBox>
                 <Input 
                   type='number' 
                   name='RPRSNTV_RRN1'
                   {...register('RPRSNTV_RRN1', {
                     required: '*필수 입력 항목입니다.',
                     validate: {
                       regCheck: () => juminCheck() ? true : '잘못된 주민번호 입니다.'
                     }
                   })} 
                 />
                 {errors.RPRSNTV_RRN1?.message && (<ErrorMessage>{errors.RPRSNTV_RRN1?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox dash><span>-</span></PaddingBox>
               <InputBox>
                 <Input 
                   type='number'
                   name='RPRSNTV_RRN2'
                   {...register('RPRSNTV_RRN2', {
                     required: '*필수 입력 항목입니다.',
                     validate: {
                       regCheck: () => juminCheck() ? trigger('RPRSNTV_RRN1') : '잘못된 주민번호 입니다.'
                     }
                   })}
                 />
                 {errors.RPRSNTV_RRN2?.message && (<ErrorMessage>{errors.RPRSNTV_RRN2?.message}</ErrorMessage>)}
               </InputBox>
             </RadioGrop>
             
             <InputGrop>
               <InputBox>
                 <Title title='사업장 주소' />
                 <SearchInput>
                   <Input 
                     type='text' 
                     name='BPLC_ADRES'
                     placeholder='도로명주소, 건물명 또는 지번입력'
                     readOnly
                     {...register('BPLC_ADRES', {
                       required: '*필수 입력 항목입니다.'
                     })} 
                   />
                   <SearchButton 
                     onClick={openPostCode}
                   />
                 </SearchInput>
                 {errors.BPLC_ADRES?.message && (<ErrorMessage>{errors.BPLC_ADRES?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
    
             <Title title='사업장'/>
             <RadioGrop >
               <RadioBox>
                 <input type='radio' id='1' value='자가' name='BPLC' {...register('BPLC')} defaultChecked />
                 <label for='1'>
                   자가
                 </label>
               </RadioBox>
               <RadioBox>
                 <input type='radio' id='2' value='임대' name='BPLC' {...register('BPLC')} />
                 <label for='2'>
                   임대 
                 </label>
               </RadioBox>
             </RadioGrop>
     
             <Title title='담당자' padding />
             <InputGrop>
               <InputBox>      
                 <Label>이름</Label>
                 <Input type='text' name='CHARGER' {...register('CHARGER', {
                   required: '*필수 입력 항목입니다.',
                 })} />
                 {errors.CHARGER?.message && (<ErrorMessage>{errors.CHARGER?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Label>연락처</Label>
                 <Input type='phone' name='CHARGER_TELNO' placeholder='‘-’없이 숫자만 입력해주세요' {...register('CHARGER_TELNO', {
                   required: '*필수 입력 항목입니다.',
                   pattern: {
                     value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                     message: '잘못된 전화번호 입니다.'
                   }
                 })} />
                 {errors.CHARGER_TELNO?.message && (<ErrorMessage>{errors.CHARGER_TELNO?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <InputGrop>
               <InputBox>
                 <Title title='설립일' />
                 <input
                   data-placeholder='설립일'
                   type='date' 
                   name='FOND_DATE'
                   {...register('FOND_DATE', {
                     required: '*필수 입력 항목입니다.',
                   })} 
                   />
                   {errors.FOND_DATE?.message && (<ErrorMessage>{errors.FOND_DATE?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Title title='종업원 수' />
                 <Input type='number' name='EMPLY' {...register('EMPLY', {
                   required: '*필수 입력 항목입니다.',
                 })} />
                 {errors.EMPLY?.message && (<ErrorMessage>{errors.EMPLY?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <InputGrop>
               <InputBox>
                 <Title title='업 태' />
                 <SelectBox 
                   name='BIZCND' 
                   {...register('BIZCND', {
                     required: '*필수 선택 항목입니다.',
                   })}
                 >
                   <option value=''></option>
                   <option value='제조업'>제조업</option>
                   <option value='도매 및 소매업'>도매 및 소매업</option>
                   <option value='건설업'>건설업</option>
                   <option value='숙박 및 음식점업'>숙박 및 음식점업</option>
                   <option value='예술, 스포츠 및 여가관련 서비스업'>예술, 스포츠 및 여가관련 서비스업</option>
                   <option value='정보통신업'>정보통신업</option>
                   <option value='교육 서비스업'>교육 서비스업</option>
                   <option value='금융 및 보험업'>금융 및 보험업</option>
                   <option value='보건업 및 사회복지 서비스업'>보건업 및 사회복지 서비스업</option>
                   <option value='부동산업'>부동산업</option>
                   <option value='사업시설 관리,사업 지원 및 임대 서비스업'>사업시설 관리,사업 지원 및 임대 서비스업</option>
                   <option value='운수 및 창고업'>운수 및 창고업</option>
                   <option value='광업'>광업</option>
                   <option value='농업,임업 및 어업'>농업,임업 및 어업</option>
                   <option value='수도, 하수 폐기물 처리, 완료 재생업'>수도, 하수 폐기물 처리, 완료 재생업</option>
                   <option value='전기,가스,증기 및 공업 조절 공급업'>전기,가스,증기 및 공업 조절 공급업</option>
                   <option value='전문,과학 및 기술 서비스업'>전문,과학 및 기술 서비스업</option>
                 </SelectBox>
                 {errors.BIZCND?.message && (<ErrorMessage>{errors.BIZCND?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Title title='주 업 종' />
                 <Input type='text' name='INDUTY' {...register('INDUTY', {
                   required: '*필수 입력 항목입니다.',
                 })} />
                 {errors.INDUTY?.message && (<ErrorMessage>{errors.INDUTY?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <InputGrop>
               <InputBox>
                 <Title title='인증' />
                 <Input type='text' name='CRTFC' {...register('CRTFC', {
                   required: '*필수 입력 항목입니다.',
                 })} />
                 {errors.CRTFC?.message && (<ErrorMessage>{errors.CRTFC?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Title title='지적재산권' />
                 <Input type='number' name='ILLT' {...register('ILLT', {
                   required: '*필수 입력 항목입니다.',
                 })} />
                 {errors.ILLT?.message && (<ErrorMessage>{errors.ILLT?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <Title title='총자산' subTitle='(백만원)' padding />
             <InputGrop short>
               <InputBox>
                 <Label>2021년</Label>
                 <SumInput>
                   <Input type='number' name='ASSETS1' placeholder='1,000,000' {...register('ASSETS1', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.ASSETS1?.message && (<ErrorMessage>{errors.ASSETS1?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Label>2020년</Label>
                 <SumInput>
                   <Input type='number' name='ASSETS2' placeholder='1,000,000' {...register('ASSETS2', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.ASSETS2?.message && (<ErrorMessage>{errors.ASSETS2?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox label='2019년'>
                 <Label>2019년</Label>
                 <SumInput>
                   <Input type='number' name='ASSETS3' placeholder='1,000,000' {...register('ASSETS3', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.ASSETS3?.message && (<ErrorMessage>{errors.ASSETS3?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>
     
             <Title title='매출액' subTitle='(백만원)' padding />
               <InputBox>
                 <Label>2021년</Label>
                 <SumInput>
                   <Input type='number' name='SALAMT1' placeholder='1,000,000' {...register('SALAMT1', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.SALAMT1?.message && (<ErrorMessage>{errors.SALAMT1?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Label>2020년</Label>
                 <SumInput>
                   <Input type='number' name='SALAMT2' placeholder='1,000,000' {...register('SALAMT2', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.SALAMT2?.message && (<ErrorMessage>{errors.SALAMT2?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Label>2019년</Label>
                 <SumInput>
                   <Input type='number' name='SALAMT3' placeholder='1,000,000' {...register('SALAMT3', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.SALAMT3?.message && (<ErrorMessage>{errors.SALAMT3?.message}</ErrorMessage>)}
              </InputBox>
  
             <Title title='영업이익' subTitle='(백만원)' padding short />
             <InputGrop>
               <InputBox>
                 <Label>2021년</Label>
                 <SumInput>
                   <Input type='number' name='BSN_PROFIT1' placeholder='1,000,000' {...register('BSN_PROFIT1', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.BSN_PROFIT1?.message && (<ErrorMessage>{errors.BSN_PROFIT1?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Label>2020년</Label>
                 <SumInput>
                   <Input type='number' name='BSN_PROFIT2' placeholder='1,000,000' {...register('BSN_PROFIT2', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.BSN_PROFIT2?.message && (<ErrorMessage>{errors.BSN_PROFIT2?.message}</ErrorMessage>)}
               </InputBox>
               <PaddingBox />
               <InputBox>
                 <Label>2019년</Label>
                 <SumInput>
                   <Input type='number' name='BSN_PROFIT3' placeholder='1,000,000' {...register('BSN_PROFIT3', {
                     required: '*필수 입력 항목입니다.',
                     })} 
                   />
                 </SumInput>
                 {errors.BSN_PROFIT3?.message && (<ErrorMessage>{errors.BSN_PROFIT3?.message}</ErrorMessage>)}
               </InputBox>
             </InputGrop>

            <InputGrop>
              <InputBox>
                <Title title='기업등급' />
                <Input 
                  type='text' 
                  name='ENTRPRS_GRAD'
                  placeholder='ex) bbb-2022.11.16'
                  {...register('ENTRPRS_GRAD', {
                    required: '*필수 입력 항목입니다.',
                  })}
                />
                {errors.ENTRPRS_GRAD?.message && (<ErrorMessage>{errors.ENTRPRS_GRAD?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>

            <InputGrop>
              <InputBox>
                <Title title='대출기관1' />
                <Input type='text' name='LON_INSTT1' {...register('LON_INSTT1', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_INSTT1?.message && (<ErrorMessage>{errors.LON_INSTT1?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>여신기관</Label>
                <Input type='text' name='LON_GVRD1' {...register('LON_GVRD1', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_GVRD1?.message && (<ErrorMessage>{errors.LON_GVRD1?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>대출금액</Label>
                <Input type='number' name='LON_AMOUNT1' {...register('LON_AMOUNT1', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_AMOUNT1?.message && (<ErrorMessage>{errors.LON_AMOUNT1?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>대출금리</Label>
                <Input type='number' name='LON_INRST1' {...register('LON_INRST1', {
                  required: '*필수 입력 항목입니다.',
                   })} />
                {errors.LON_INRST1?.message && (<ErrorMessage>{errors.LON_INRST1?.message}</ErrorMessage>)}  
              </InputBox>
            </InputGrop>

            <InputGrop>
              <InputBox>
                <Title title='대출기관2' />
                <Input type='text' name='LON_INSTT1' {...register('LON_INSTT2', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_INSTT1?.message && (<ErrorMessage>{errors.LON_INSTT1?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>여신기관</Label>
                <Input type='text' name='LON_GVRD2' {...register('LON_GVRD2', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_GVRD2?.message && (<ErrorMessage>{errors.LON_GVRD2?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>대출금액</Label>
                <Input type='number' name='LON_AMOUNT2' {...register('LON_AMOUNT2', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_AMOUNT2?.message && (<ErrorMessage>{errors.LON_AMOUNT2?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>대출금리</Label>
                <Input type='number' name='LON_INRST2' {...register('LON_INRST2', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_INRST2?.message && (<ErrorMessage>{errors.LON_INRST2?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>
     
            <InputGrop>
              <InputBox bottom>
                <Title title='대출기관3' />
                <Input type='text' name='LON_INSTT3' {...register('LON_INSTT3', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_INSTT3?.message && (<ErrorMessage>{errors.LON_INSTT3?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>여신기관</Label>
                <Input type='text' name='LON_GVRD3' {...register('LON_GVRD3', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_GVRD3?.message && (<ErrorMessage>{errors.LON_GVRD3?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>대출금액</Label>
                <Input type='number' name='LON_AMOUNT3' {...register('LON_AMOUNT3', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_AMOUNT3?.message && (<ErrorMessage>{errors.LON_AMOUNT3?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label margin>대출금리</Label>
                <Input type='number' name='LON_INRST3' {...register('LON_INRST3', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.LON_INRST3?.message && (<ErrorMessage>{errors.LON_INRST3?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>

            <InputGrop>
              <InputBox>
                <Title title='희망자금(시설)' />
                <Input type='number' name='CPTAL1' {...register('CPTAL1', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.CPTAL1?.message && (<ErrorMessage>{errors.CPTAL1?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>
            <InputGrop>
              <InputBox>
                <Title title='희망자금(운전)' />
                <Input type='number' name='CPTAL2' {...register('CPTAL2', {
                  required: '*필수 입력 항목입니다.',
                })} />
                  {errors.CPTAL2?.message && (<ErrorMessage>{errors.CPTAL2?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>
     
            <Title title='자문분야' />
            <CheckList
              {...register('CNSUT', {
                validate: { check: () => checkValid() ? true : '*필수 체크 항목입니다' }})
              }>
              {CHECK_DATA.map((item) => (
                <CheckInputGroup key={item.id}>
                  <label for={item.id}>{item.label}</label>
                  <input
                    id={item.id}
                    type='checkbox'
                    onClick={() => trigger()}
                    defaultChecked={item.checked}
                    {...register(item.name)}
                  />
                </CheckInputGroup>
              ))}
            </CheckList>
            {errors.CNSUT?.message && (<ErrorMessage>{errors.CNSUT?.message}</ErrorMessage>)}
            
            <Title title='기 타' name='ETC' {...register('ETC')} />
            <TextArea />
          </InputContainer>
          <Button>
            <span>가입신청</span>
            <ButtonValue 
              name='VERSION'
              value={'D'}
              onClick={handleSubmit(onSubmit, onError)}
              {...register('VERSION')}  />
          </Button>
        </>
      )}

      {short && (
        <>
          <InputContainer>
            <InputGrop>
              <InputBox>
                <Title title='기업명' />
                <Input type='text' name='ENTRPRS_NM' {...register('ENTRPRS_NM', {
                  required: '*필수 입력 항목입니다.'
                  })} 
                />
                {errors.ENTRPRS_NM?.message && (<ErrorMessage>{errors.ENTRPRS_NM?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Title title='사업자등록번호'/>
                <Input type='number' name='BUSINESS_NUMBER' {...register('BUSINESS_NUMBER', {
                  required: '*필수 입력 항목입니다.',
                  validate: {
                    check: (value) => validateBizNum(value) ? true : '유효하지 않은 사업자등록번호입니다'
                  }})} />
                  {errors?.BUSINESS_NUMBER?.message && (<ErrorMessage>{errors?.BUSINESS_NUMBER?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>

            <InputGrop>
              <InputBox>
                <Title title='대표자' />
                <Input type='text' name='RPRSNTV' {...register('RPRSNTV', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.RPRSNTV?.message && (<ErrorMessage>{errors.RPRSNTV?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Title title='사업장 주소' />
                <SearchInput>
                <Input 
                  type='text' 
                  name='BPLC_ADRES'
                  placeholder='도로명주소, 건물명 또는 지번입력'
                  readOnly
                    {...register('BPLC_ADRES', {
                      required: '*필수 입력 항목입니다.'
                    })} 
                  />
                  <SearchButton 
                    onClick={openPostCode}
                  />
                 </SearchInput>
                 {errors.BPLC_ADRES?.message && (<ErrorMessage>{errors.BPLC_ADRES?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>

            <Title title='담당자' padding />
            <InputGrop>
              <InputBox>      
                <Label>이름</Label>
                <Input type='text' name='CHARGER' {...register('CHARGER', {
                  required: '*필수 입력 항목입니다.',
                })} />
                {errors.CHARGER?.message && (<ErrorMessage>{errors.CHARGER?.message}</ErrorMessage>)}
              </InputBox>
              <PaddingBox />
              <InputBox>
                <Label>연락처</Label>
                <Input type='phone' name='CHARGER_TELNO' placeholder='‘-’없이 숫자만 입력해주세요' {...register('CHARGER_TELNO', {
                  required: '*필수 입력 항목입니다.',
                  pattern: {
                    value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                    message: '잘못된 전화번호 입니다.'
                  }})} />
                  {errors.CHARGER_TELNO?.message && (<ErrorMessage>{errors.CHARGER_TELNO?.message}</ErrorMessage>)}
              </InputBox>
            </InputGrop>
            <InputGrop>
              <InputBox last>
                <CalenderTitle>
                  <Title title='희망일정' />
                  <SubCheckGroup>
                    <input id='TBD' type='checkbox' onClick={dateDefault} checked={date} /> 
                    <label for='TBD'>미정</label>
                  </SubCheckGroup>
                </CalenderTitle>
                <input
                  type='date'
                  name='HOPE_SCHDUL'
                  readOnly={date}
                  {...register('HOPE_SCHDUL')}
                />
              </InputBox>
            </InputGrop>
          </InputContainer>
          <Button short>
            <span>가입신청</span>
            <ButtonValue 
              name='VERSION'
              value={'S'}
              onClick={handleSubmit(onSubmit, onError)}
              {...register('VERSION')}  />
          </Button>
        </>
      )}
      </ApplyContainer>
    </>
  )
}

export default FormComponent;
