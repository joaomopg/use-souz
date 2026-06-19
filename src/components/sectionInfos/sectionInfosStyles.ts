import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    height: auto;
    padding: 30px 200px;
    box-sizing: border-box;
    display: flex;
    gap: 80px;
`

export const Card = styled.div`
    width: calc(100% / 4);
    min-width: 150px;
    height: 200px;
    padding: 50px 20px 20px 20px;
    border-bottom: 1px solid rgba(16,16,18,1);
    border-radius: 12px 12px 0px 0px;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    position: relative;

  &::before {
    content: "";

    position: absolute;

    width: 70%;
    height: 50%;

    background: white;

    filter: blur(60px);

    top: -60%;

    z-index: 1;
  }

  &::after {
    content: "";

    position: absolute;

    inset: 2px;

    border-radius: inherit;

    z-index: 2;
  }
`

export const CardIcon = styled.div`
    width: 40px;
    height: 40px;
`

export const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    box-sizing: border-box;
    z-index: 3;
`

export const Title = styled.div`
    font-size: 24px;
    color: white;
    margin-bottom: 6px;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const SubTitle = styled.div`
    font-size: 16px;
    color: white;
    font-weight: 400;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`