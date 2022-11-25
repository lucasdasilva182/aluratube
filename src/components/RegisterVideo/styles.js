import styled from "styled-components";

export const StyledModal = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
    margin-top: 16px;
  }
  .btn {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
    margin-top: 16px;
    &.btn-cancelar{
      background-color: #f9f9f9 !important;
      color: red !important;
      opacity: 0.5 !important;
    }
  }
  form, .modal-base {
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & .modal-add-video {
      flex: 1;
      border-radius: 8px;
      max-height: 420px;
      height: auto;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
    & .modal-confirmation{
      flex: 1;
      border-radius: 8px;
      height: 150px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      position: relative;
      flex-flow: column;
      padding: 16px;
      padding: 60px 20px;
      justify-content: center;
      align-items: center;
      p, a {
        text-align: center;
      }
      & .buttons-content{
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
      }
    }
  }
  select{
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  input {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
`;