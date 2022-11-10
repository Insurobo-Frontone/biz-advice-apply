import React from 'react'
import styled from 'styled-components';
import CheckBox from '../CheckBox';
import Input from '../Input';
import Select from '../Select';

const DATA = [
  { id: 1, label: '법률', name: 'law', checked: true},
  { id: 2, label: '세무·회계', name: 'tex', checked: false },
  { id: 3, label: '고용지원', name: 'tex', checked: false },
  { id: 4, label: '정부지원자금', name: 'tex', checked: false },
  { id: 5, label: 'R&D 지원', name: 'tex', checked: false },
  { id: 6, label: '부동산', name: 'tex', checked: false },
  { id: 7, label: '국세환급', name: 'tex', checked: false },
];

const FormContainer = styled.form`
  padding-top: 51px;
`;

const CheckList = styled.ul`
  width: 100%;
  

  > li {
    height: 50px;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FormComponent = () => {
  return (
    <>
      <FormContainer>
        <InputWrap>
          <Input title={'기업명'} width={'336px'} />
          <Input title={'사업자등록번호'} width={'336px'} />
        </InputWrap>
        <InputWrap>
          <Input title={'대표자'} width={'336px'} />
          <Input title={'지분구조'} width={'336px'} />
        </InputWrap>
        <InputWrap>
          <Input title={'사업장 주소'} />
        </InputWrap>
        <InputWrap>
          <Select title={'사업장'} placeholder={'자가, 임대중 선택'} >
            <option>자가</option>
            <option>임대</option>
          </Select>
        </InputWrap>
        <InputWrap>
          <Input title={'담당자'} width={'336px'} label={'이름'} />
          <Input width={'336px'} label={'연락처'} placeholder={'‘-’없이 숫자만 입력해주세요'}/>
        </InputWrap>
        <InputWrap>
          <Input title={'설립일'} width={'336px'} />
          <Input title={'종업원 수'} width={'336px'} />
        </InputWrap>
        <InputWrap>
          <Input title={'업태'} width={'336px'} />
          <Input title={'업종'} width={'336px'} />
        </InputWrap>
        <InputWrap>
          <Input title={'인증 및 지적재산권'} />
        </InputWrap>
        <InputWrap>
          <Input title={'총자산(백만원)'} width={'219px'} label={'2021년'} placeholder={'1,000,000'} />
          <Input width={'219px'} label={'2020년'} placeholder={'1,000,000'} />
          <Input width={'219px'} label={'2019년'} placeholder={'1,000,000'} />
        </InputWrap>
        <InputWrap>
          <Input title={'매출액(백만원)'} width={'219px'} label={'2021년'} placeholder={'1,000,000'} />
          <Input width={'219px'} label={'2020년'} placeholder={'1,000,000'} />
          <Input width={'219px'} label={'2019년'} placeholder={'1,000,000'} />
        </InputWrap>
        <InputWrap>
          <Input title={'영업이익(백만원)'} width={'219px'} label={'2021년'} placeholder={'1,000,000'} />
          <Input width={'219px'} label={'2020년'} placeholder={'1,000,000'} />
          <Input width={'219px'} label={'2019년'} placeholder={'1,000,000'} />
        </InputWrap>
        <InputWrap>
          <Input title={'기업등급'} />
        </InputWrap>
        <InputWrap>
          <Input title={'대출기관1'} width={'219px'} label={'여신기관'} />
          <Input width={'219px'} label={'대출금액'} />
          <Input width={'219px'} label={'대출금리'} />
        </InputWrap>
        <InputWrap>
          <Input title={'대출기관2'} width={'219px'} label={'여신기관'} />
          <Input width={'219px'} label={'대출금액'} />
          <Input width={'219px'} label={'대출금리'} />
        </InputWrap>
        <InputWrap>
          <Input title={'대출기관3'} width={'219px'} label={'여신기관'} />
          <Input width={'219px'} label={'대출금액'} />
          <Input width={'219px'} label={'대출금리'} />
        </InputWrap>
        <InputWrap>
          <CheckList>
            {DATA.map((dt) => (
              <li key={dt.id}><CheckBox label={dt.label} id={dt.id} name={dt.name} checked={dt.checked}/></li>
            ))}
          </CheckList>
        </InputWrap>
      </FormContainer>
    </>
  )
}

export default FormComponent;
