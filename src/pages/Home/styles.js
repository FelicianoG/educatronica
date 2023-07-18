import { styled } from "styled-components";

export const HomeStyles = styled.div`
  .main-logo {
    width: 80%;
    max-width: 1500px;
  }

  .main-page-container {
    background-color: rgb(21, 50, 76);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    z-index: 0;
    padding: 0;
    margin: 0;
    position: relative;
    scroll-snap-align: start;
  }

  .contact-info {
    width: 100%;
    text-align: center;
    margin-top: auto;
  }

  .main-page,
  .programa,
  .contacto {
    scroll-snap-align: start;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0);
    z-index: 0;
    position: relative;
    padding: 0;
    margin: 0;
    height: 100vh;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .contacto {
    background-color: var(--color-one);
    height: 100vh;
  }

  .main-page {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    box-shadow: 8px 0px 20px 10px rgba(0, 0, 0, 0.1);
  }

  .programa,
  .contacto {
    width: 100%;
    align-items: center;
    padding: 0;
    color: white;
  }
  .main-page p,
  .programa p,
  .contacto p {
    color: black;
    padding: 0;
    width: 60%;
    max-width: 900px;
    margin: 4vw auto 4vw auto;
    font-size: x-large;
    font-weight: 700;
    text-align: center;
    letter-spacing: 6px;
    line-height: 35px;
  }
  .programa a {
    font-size: x-large;
    color: white;
    padding: 20px;
    margin-top: 1vw;
    font-weight: 600;
    cursor: pointer;
    background-color: var(--color-two);
    border-radius: 1rem;
  }
  .cuadritos {
    display: flex;
    justify-content: space-around;
    z-index: 1;
    width: 60%;
  }

  .cuadritos-title {
    font-size: xxx-large;
    margin-bottom: 120px;
    margin-top: 0;
  }

  .cuadritos .a {
    width: 15vw;
    height: 12vw;
    background-color: var(--color-one);
    border-radius: 12px;
  }
  .cuadritos .b {
    width: 15vw;
    height: 12vw;
    background-color: var(--color-two);
    border-radius: 12px;
  }
  .cuadritos .c {
    width: 15vw;
    height: 12vw;
    background-color: var(--color-three);
    border-radius: 12px;
  }
  .main-page button {
    background-color: rgb(64 175 228);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: auto;
    border-radius: 8px;
  }
  .main-page-footer {
    display: flex;
    justify-content: center;
    margin-top: auto;
    align-items: center;
    background-color: white;
    width: 100%;
    box-shadow: 8px 0px 20px 10px rgba(0, 0, 0, 0.1);
    z-index: 3;
  }
  .footer-logo-container {
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  .footer-logo-container img {
    width: 10vw;
  }
  .cuadritos img {
    width: 60%;
  }
  .cuadro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.2s;
  }
  .cuadro:hover,
  .main-page button:hover {
    transform: scale(1.08);
  }

  h2 {
    padding: 0;
    margin: 0;
    font-size: medium;
  }
`;
