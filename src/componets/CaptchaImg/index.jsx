import React, { useState } from 'react'
import styled from 'styled-components';
import { ContainerCube } from '../ContainerCube'
import { CubeImg } from '../CubeImg'
import { DirectionsCaptchaImg } from '../DirectionsCaptchaImg'
const StyledCaptchaImg = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  border: 1px solid white;
`;
export const CaptchaImg = () => {
  // const data = getRandomFacts()
  let data
  data = {
    category: "cats",
    images: [
      {category:"cats", url:"https://i.ibb.co/j5D8xwq/cat1.jpg"},
      {category:"cats", url:"https://i.ibb.co/s9CcNg1/cat2.jpg"},
      {category:"cats", url:"https://i.ibb.co/mSYBwgC/cat3.jpg"},
      {category:"cats", url:"https://i.ibb.co/XtGxmJ7/cat4.jpg"},
      {category:"mouse", url:"https://i.ibb.co/TwxBcZ8/cat5.jpg"},
      {category:"dogs", url:"https://i.ibb.co/b2RNzdh/cat6.jpg"},
      {category:"dogs", url:"https://i.ibb.co/ZL4ZSCD/cat7.jpg"},
      {category:"dogs", url:"https://i.ibb.co/T1knJvT/cat8.jpg"},
      {category:"dogs", url:"https://i.ibb.co/DgLwd9x/cat9.jpg"},
  ]}
  const {images, category} =data
  const [selected, setSelected] = useState(new Array(0))
  const handlerSubmit = (e) => {
    e.preventDefault()
    // console.log(selected.length)
    console.log(selected)
    if(selected.length < 4) return alert('Select 4 images at least')
  }
  const toggleSelect = (boxSelected) => {
    const alreadyExist = data.images.filter((row) => {
      return row.url
    })
    console.log(alreadyExist)
    // agrega todo seleccionado
    setSelected([...selected,boxSelected])

    // !alreadyExist 
    //   ? setSelected([...selected,boxSelected])
    //   : console.log("ya existe")
    // console.log(boxSelected)
    // const newSelected = selectedboxSelected)
    // console.log()
    
  }
  return (
    <StyledCaptchaImg>
      <h1>Select all the {category} pictures</h1>
      <form onSubmit={handlerSubmit}>
        <ContainerCube>
        {images.map((image, id) =>
          <CubeImg
            key={id}
            {...image}
            toggleSelect={toggleSelect}
            />
        )}
        </ContainerCube>
        <input type="submit" value="Send Response" />
      </form>

      <DirectionsCaptchaImg />
    </StyledCaptchaImg>
  )
}//rafc
