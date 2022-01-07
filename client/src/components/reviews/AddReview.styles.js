import styled from 'styled-components';
import { ButtonContainer } from './ReviewList.styles';

export const FormContainer = styled.form`
  padding: '15px';
`;

export const CloseButton = styled(ButtonContainer)`
  float: right;
  width: 6vw;
`;

export const ModalContainer = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

export const OverlayContainer = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};
