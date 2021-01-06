import React from 'react';
import styled from 'styled-components'


const Avatar = ({ imageSource }) => {
  return (
    <Container>
      <Image source={imageSource} />
    </Container>
  );
};

const Container = styled.View`
  width: 64px;
  height: 64px;
`;
const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;
export default Avatar;