import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      .eachVideo{
        position: relative;
        a {
          scroll-snap-align: start;
          span {
            padding-top: 8px;
            display: block;
            padding-right: 24px;
            color: ${({ theme }) => theme.textColorBase || "#222222"};
          }
        }
        button{
          opacity: 0.5 !important;
          position: absolute;
          top: 0px;
          right: -10px;
          width: 25px;
          height: 25px;
          border-radius: 50px;
          border: none;
          z-index: 2;
          span{
            font-size: 2rem;
            color: red;
            line-height: 20px;
          }
          &:hover{
            opacity: 1 !important;
          }
        }
      }
    }
    div::-webkit-scrollbar {
      width: 12px;
      height: 5px;
    }
  
    div::-webkit-scrollbar-track {
      display:none;
    }
  
    div::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.borderBase}; 
      border-radius: 20px; 
    }
  }
`;