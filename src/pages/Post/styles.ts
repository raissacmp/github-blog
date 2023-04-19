import styled from "styled-components";

export const MainPostContent = styled.section`
  max-width: 864px;
  width: 100%;
  height: 168px;
  display: flex;
  flex-direction: column;
  /*  background: ${(props) => props.theme["profile"]}; */
  background: white;
  position: relative;
  top: -106px;
  padding: 32px;
  border-radius: 10px;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style: none;
  }
`;
