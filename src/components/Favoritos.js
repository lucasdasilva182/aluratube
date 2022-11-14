import styled from "styled-components";

export const StyledFavoritos = styled.div`
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
    width: 68px;
    height: 68px;
    border-radius: 50%;
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
      grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(100px,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        span {
          padding-top: 8px;
          display: block;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;