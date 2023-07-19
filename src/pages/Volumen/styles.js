import { styled } from "styled-components";

export const VolumenStylesWrapper = styled.div`
  .green,
  .hovergreen:hover {
    --color: var(--color-one);
  }

  .orange,
  .hoverorange:hover {
    --color: var(--color-two);
  }

  .blue,
  .hoverblue:hover {
    --color: var(--color-three);
  }

  .App {
    width: 100%;
    overflow: hidden;
  }

  @media (min-width: 1050px) {
    /* PC */

    .logo-bg {
      position: absolute;
      z-index: -2;
      width: 600px;
      left: calc(-80px);
      top: 400px;
    }
    #volume-container {
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      text-align: center;
    }
    .alt-nav {
      display: none;
    }
    #volume-container h1 {
      font-size: 6rem;
      color: black;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
    #volume-container h2 {
      font-size: x-large;
      font-weight: 900;
      color: black;
    }
    #volume-container h3 {
      font-size: large;
      color: var(--color);
    }
    #volume-container h4 {
      font-size: large;
      margin-top: 40px;
    }
    .cuadros-stack {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 530px;
      height: fit-content;
      min-height: 500px;
      margin: 50px 0 80px 0;
    }
    .cuadro-row {
      display: flex;
      height: 50%;
      margin: 10px;
      align-items: center;
      justify-content: space-evenly;
    }

    .cuadro-item {
      background-color: var(--color);
      border-radius: 20px;
      width: 15vw;
      width: 45%;
      height: 90%;
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
      flex-direction: column;
      transition: all 0.2s;
    }
    .cuadro-item-lg {
      background-color: var(--color);
      border-radius: 20px;
      width: 93%;
      height: 90%;
      display: flex;
      justify-content: center;
      padding: 0;
      flex-direction: column;
      transition: all 0.2s;
    }

    .cuadro-item:hover,
    .cuadro-item-lg:hover {
      transform: scale(1.08);
    }
    .cuadro-item p,
    .cuadro-item-lg p {
      color: white;
      padding-bottom: 10px;
    }
    .cuadro-item img {
      width: 50%;
      position: relative;
      top: 10px;
      margin: auto;
      align-self: flex-end;
    }
    .cuadro-item-lg img {
      width: 20%;
      position: relative;
      top: 10px;
      margin: auto;
      align-self: flex-end;
    }
    .volume-footer {
      background-color: var(--color);
      padding: 50px 0 80px 0;
      width: 100%;
    }
    .volume-footer button {
      background-color: black;
      border-style: none;
      color: var(--color);
      padding: 20px 60px;
      margin: 20px;
      border-radius: 50px;
      font-size: 15px;
      width: 170px;
      transition: all 0.2s;
    }
    .volume-footer button:hover {
      background-color: rgb(255, 255, 255);
    }

    .volume-footer button:last-child {
      padding: 10px 30px;
    }
    #volume-container .side-nav {
      font-size: 40px;
      color: rgb(151, 151, 151);
      top: 90px;
      left: 2vw;
      border-style: none none solid none;
      border-color: var(--color);
      border-width: 12px;
      padding: 0 0 20px 0;
      user-select: none;
    }
    #volume-container .side-nav:nth-child(2) {
      padding-left: 20px;
    }
    #volume-container .side-nav:last-child {
      padding-right: 20px;
    }
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }

  @media (max-width: 1050px) {
    /* Smartphone */
    .logo-bg {
      z-index: -2;
      width: 300px;
      top: 90px;
      position: absolute;
    }
    #volume-container {
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      text-align: center;
    }
    .title-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: relative;
      top: 30px;
    }

    .alt-nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      top: -10px;
      position: absolute;
      user-select: none;
    }
    .alt-nav-sides {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: x-large;
      font-weight: 900;
      background-color: var(--color);
      width: 10%;
      height: 80px;
    }
    #volume-container h1 {
      font-size: 3rem;
      color: black;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
    #volume-container h2 {
      font-size: x-large;
      font-weight: 900;
      color: black;
    }
    #volume-container h3 {
      font-size: large;
      color: var(--color);
    }
    #volume-container h4 {
      font-size: large;
      padding: 8% 10% 0 10%;
      line-height: 150%;
      margin-top: 40px;
    }
    .cuadros-stack {
      display: flex;
      flex-direction: column;
      width: 530px;
      height: fit-content;
      min-height: 500px;
      margin: 50px 0 80px 0;
      z-index: 3;
    }
    .cuadro-row {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
      justify-content: space-evenly;
    }
    .cuadro-item {
      background-color: var(--color);
      border-radius: 20px;
      width: 45%;
      height: 80%;
      display: flex;
      padding: 0;
      margin: 10px;
      flex-direction: column;
    }
    .cuadro-item-lg {
      background-color: var(--color);
      border-radius: 20px;
      width: 46%;
      height: 210px;
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 10px 0 0 0;
      flex-direction: column;
    }
    .cuadro-item:hover,
    .cuadro-item-lg:hover {
      transform: translateX(5px) translateY(-5px) scale(1.02);
      box-shadow: -3px 3px 4px rgb(228, 228, 228);
    }
    .cuadro-item-lg img {
      width: 60%;
      position: relative;
      top: 10px;
      margin: auto;
      align-self: flex-end;
    }
    .cuadro-item p,
    .cuadro-item-lg p {
      color: white;
    }
    .cuadro-item img {
      width: 70%;
      position: relative;
      top: 10px;
      margin: auto;
      align-self: flex-end;
    }
    .volume-footer {
      background-color: var(--color);
      padding: 50px 0 80px 0;
      width: 100%;
    }

    .volume-footer button {
      background-color: black;
      border-style: none;
      color: var(--color);
      padding: 20px 60px;
      margin: 20px;
      border-radius: 50px;
      font-size: 20px;
      cursor: pointer;
    }
    .volume-footer button:last-child {
      padding: 10px 30px;
    }
    #volume-container .side-nav {
      display: none;
      font-size: 40px;
      color: rgb(151, 151, 151);
      top: 90px;
      left: 2vw;
      border-style: none none solid none;
      border-color: var(--color);
      border-width: 12px;
      padding: 0 0 20px 0;
    }
    #volume-container .volume-footer h4 {
      margin-top: 0;
    }
  }
`;
