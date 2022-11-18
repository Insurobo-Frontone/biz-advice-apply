import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from "react-daum-postcode";
import Popup from '../Popup';
import Button from '../Button'
import Title from '../Title';
import { useForm } from 'react-hook-form';

import searchIcon from '../../assets/icon/search-icon.png';
import checkicon from '../../assets/icon/checkbox-icon.png';

const DATA = [
  { id: 1, label: '법률', name: 'CNSUT_LAW'},
  { id: 2, label: '세무·회계', name: 'CNSUT_TAX'},
  { id: 3, label: '고용지원', name: 'CNSUT_EMPLYM'},
  { id: 4, label: '정부지원자금', name: 'CNSUT_GVRN'},
  { id: 5, label: 'R&D 지원', name: 'CNSUT_RD'},
  { id: 6, label: '부동산', name: 'CNSUT_ESTATE'},
  { id: 7, label: '국세환급', name: 'CNSUT_NLT'},
];

const ApplyContainer = styled.form`
  position: relative;
  padding-bottom: 61px;

  ${(props) => props.theme.window.mobile} {
    padding-bottom: 92px;
  }
`;

const InputContainer = styled.div`
  padding: 0 34px;

  ${(props) => props.theme.window.mobile} {
    padding: 0 24px;
  }
`;

const CheckList = styled.ul`
  width: 100%;
`;

const CheckInputGroup = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D8D8D8;

  label {
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

  ${props => props.theme.window.mobile} {
    display: none;
  }
`;

const InputGrop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  ${props => props.theme.window.mobile} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.theme.window.mobile} {
    height: 35px;
    margin-bottom: 20px;
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
`;

const Label = styled.label`
  color: #585858;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 12px;
  display: block;
  width: 100%;
  ${props => props.theme.window.mobile} {
    margin-bottom: 8px;
  }
`;


const ButtonContainer = styled.div`
  position: absolute;
  bottom: -120px;
  width: 100%;
  margin-top: 47px;

  ${(props) => props.theme.window.mobile} {
    padding: 0 24px;
    position: static;
    margin-top: 42px;
  }
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
    bottom: 30px;
  }
`;

const SumInput = styled.div`
  position: relative;
  &::after {
    content: '원';
    display: block;
    position: absolute;
    right: 9px;
    bottom: 19px;
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.color.GRAY};
  }
`;

const RadioBox = styled.div`
  position: relative;
  display: flex;
  width: 48.3%;

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

`;


const FormComponent = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [postValue, setPostValue] = useState(null);
  // const { update } = useFieldArray({ name: 'BPLC_ADRES' });
  const onSubmit = async(data) => {
    await fetch(data)
    console.log(data)
  }
  const openPostCode = () => {
    setIsPopupOpen(true);

  }

  const closePostCode = () => {
    setIsPopupOpen(false)
  }


  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "10%",
    width: "600px",
    height: "600px",
    padding: "7px",

  };
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
      console.log(data)
      console.log(fullAddress)
      console.log(data.zonecode)
      setValue('BPLC_ADRES', fullAddress)
      closePostCode();
  }
   
  return (
    <ApplyContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>

        <InputGrop>
          <InputBox>
            <Title title='기업명'/>
            <Input type='text' name='ENTRPRS_NM' {...register('ENTRPRS_NM')} />
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Title title='사업자등록번호'/>
            <Input type='number' name='BUSINESS_NUMBER' {...register('BUSINESS_NUMBER')} />
          </InputBox>
        </InputGrop>

        <InputGrop>
          <InputBox>
            <Title title='대표자' />
            <Input type='text' name='RPRSNTV' {...register('RPRSNTV')} />
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Title title='대표자연락처' />
            <Input type='phone' name='RPRSNTV_TELNO' {...register('RPRSNTV_TELNO')} />
          </InputBox>
        </InputGrop>

        <InputGrop>
          <InputBox>
            <Title title='사업장 주소' />
            <SearchInput>
              <Input type='text' name='BPLC_ADRES' {...register("BPLC_ADRES")} readOnly/>
              <SearchButton onClick={openPostCode} />
            </SearchInput>
            
          </InputBox>
        </InputGrop>

        {isPopupOpen && (
          <Popup onClick={closePostCode}>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
          </Popup>
        )}

        <Title title='사업장' />
        <InputGrop>
          <RadioBox>
            <input type='radio' id='1' value='자가' name='BPLC' {...register('BPLC', { required: true })} checked/>
            <label htmlfor='1'>
              자가
            </label>
          </RadioBox>
          <RadioBox>
            
            <input type='radio' id='2' value='임대' name='BPLC' {...register('BPLC', { required: true })} />
            <label htmlfor='2'>
              임대
              
            </label>
          </RadioBox>
        </InputGrop>

        <Title title='담당자' padding />
        <InputGrop>
          <InputBox>      
            <Label>이름</Label>
            <Input type='text' name='CHARGER' {...register('CHARGER')} />
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Label>연락처</Label>
            <Input type='phone' name='CHARGER_TELNO' placeholder='‘-’없이 숫자만 입력해주세요' {...register('CHARGER_TELNO')} />
          </InputBox>
        </InputGrop>

        <InputGrop>
          <InputBox>
            <Title title='설립일' />
            <Input type='text' name='FOND_DATE' {...register('FOND_DATE')} />
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Title title='종업원 수' />
            <Input type='number' name='EMPLY' {...register('EMPLY')} />
          </InputBox>
        </InputGrop>

        <InputGrop>
          <InputBox>
            <Title title='업 태' />
            <Input type='number' name='BIZCND' {...register('BIZCND')} />
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Title title='주 업 종' />
            <Input type='number' name='INDUTY' {...register('INDUTY')} />
          </InputBox>
        </InputGrop>

        <InputGrop>
          <InputBox>
            <Title title='인증 및 지적재산권' />
            <Input type='number' name='ILLT' {...register('ILLT')} />
          </InputBox>
        </InputGrop>

        <Title title='총자산' subTitle='(백만원)' padding />
        <InputGrop>
          <InputBox>
            <Label>2021년</Label>
            <SumInput>
              <Input type='number' name='ASSETS1' placeholder='1,000,000' {...register('ASSETS1')} />
            </SumInput>
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Label>2020년</Label>
            <SumInput>
              <Input type='number' name='ASSETS2' placeholder='1,000,000' {...register('ASSETS2')} />
            </SumInput>
          </InputBox>
          <PaddingBox />
          <InputBox label='2019년'>
            <Label>2019년</Label>
            <SumInput>
              <Input type='number' name='ASSETS3' placeholder='1,000,000' {...register('ASSETS3')} />
            </SumInput>
          </InputBox>
        </InputGrop>

        <Title title='매출액' subTitle='(백만원)' padding/>
        <InputGrop>
          <InputBox>
            <Label>2021년</Label>
            <SumInput>
              <Input type='number' name='SALAMT1' placeholder='1,000,000' {...register('SALAMT1')} />
            </SumInput>
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Label>2020년</Label>
            <SumInput>
              <Input type='number' name='SALAMT2' placeholder='1,000,000' {...register('SALAMT2')} />
            </SumInput>
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Label>2019년</Label>
            <SumInput>
              <Input type='number' name='SALAMT3' placeholder='1,000,000' {...register('SALAMT3')} />
            </SumInput>
          </InputBox>
        </InputGrop>

        <Title title='영업이익' subTitle='(백만원)' padding />
        <InputGrop>
          <InputBox>
            <Label>2021년</Label>
            <SumInput>
              <Input type='number' name='BSN_PROFIT1' placeholder='1,000,000' {...register('BSN_PROFIT1')} />
            </SumInput>
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Label>2020년</Label>
            <SumInput>
              <Input type='number' name='BSN_PROFIT2' placeholder='1,000,000' {...register('BSN_PROFIT2')} />
            </SumInput>
          </InputBox>
          <PaddingBox />
          <InputBox>
            <Label>2019년</Label>
            <SumInput>
              <Input type='number' name='BSN_PROFIT3' placeholder='1,000,000' {...register('BSN_PROFIT3')} />
            </SumInput>
          </InputBox>
        </InputGrop>

          <InputGrop>
            <InputBox>
              <Title title='기업등급' />
              <Input type='text' name='ENTRPRS_GRAD' {...register('ENTRPRS_GRAD')} />
            </InputBox>
          </InputGrop>

          <InputGrop>
            <InputBox>
              <Title title='대출기관1' />
              <Input type='text' name='LON_INSTT1' {...register('LON_INSTT1')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>여신기관</Label>
              <Input type='text' name='LON_GVRD1' {...register('LON_GVRD1')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>대출금액</Label>
              <Input type='text' name='LON_AMOUNT1' {...register('LON_AMOUNT1')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>대출금리</Label>
              <Input type='number' name='LON_GVRD1' {...register('LON_INRST1')} />
            </InputBox>
          </InputGrop>

          <InputGrop>
            <InputBox>
              <Title title='대출기관2' />
              <Input type='text' name='LON_INSTT1' {...register('LON_INSTT2')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>여신기관</Label>
              <Input type='text' name='LON_GVRD2' {...register('LON_GVRD2')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>대출금액</Label>
              <Input type='text' name='LON_AMOUNT2' {...register('LON_AMOUNT2')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>대출금리</Label>
              <Input type='number' name='LON_GVRD2' {...register('LON_INRST2')} />
            </InputBox>
          </InputGrop>

          <InputGrop>
            <InputBox>
              <Title title='대출기관3' />
              <Input type='text' name='LON_INSTT3' {...register('LON_INSTT3')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>여신기관</Label>
              <Input type='text' name='LON_GVRD3' {...register('LON_GVRD3')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>대출금액</Label>
              <Input type='text' name='LON_AMOUNT3' {...register('LON_AMOUNT3')} />
            </InputBox>
            <PaddingBox />
            <InputBox>
              <Label>대출금리</Label>
              <Input type='number' name='LON_GVRD3' {...register('LON_INRST3')} />
            </InputBox>
          </InputGrop>
          
          <InputGrop>
            <InputBox>
              <Title title='희망자금(시설)' />
              <Input type='number' name='CPTAL1' {...register('CPTAL1')} />
            </InputBox>
          </InputGrop>
          <InputGrop>
            <InputBox>
              <Title title='희망자금(운전)' />
              <Input type='number' name='CPTAL2' {...register('CPTAL2')} />
            </InputBox>
          </InputGrop>

          <Title title='자문분야' />
          <CheckList>
            {DATA.map((dt) => (
              <CheckInputGroup key={dt.id}>
                <label for={dt.id}>{dt.label}</label>
                <input type='checkbox' name={dt.name} id={dt.id} {...register(dt.name)} />
              </CheckInputGroup>
            ))}
          </CheckList>  
        </InputContainer>
        <ButtonContainer>
          <Button title='가입신청' type='submit' />
        </ButtonContainer>
      </ApplyContainer>
  )
}

export default FormComponent;
