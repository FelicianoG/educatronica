import { styled } from "styled-components";

export const ModulosStylesWrapper = styled.div`
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

  .module-logo-bg {
    position: absolute;
    z-index: -2;
    width: 600px;
    left: calc(-80px);
    top: 400px;
  }
  #module-container {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: center;
  }
  .module-alt-nav {
    display: none;
  }
  #module-container h1 {
    font-size: 6rem;
    color: black;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
  }
  #module-container h2 {
    font-size: x-large;
    font-weight: 900;
    color: black;
  }
  #module-container h3 {
    font-size: large;
    color: var(--color);
  }
  #module-container h4 {
    font-size: large;
    margin-top: 40px;
  }
  .module-cuadros-stack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
  }
  .module-cuadro-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    padding: 0 0 50px;
  }
  .module-title {
    margin-top: 30px;
  }

  .module-cuadro-item {
    background-color: #ddd;
    border: solid 1px #ccc;
    border-radius: 20px;
    /* min-width: 288px; */
    max-width: 280px;
    min-height: 403px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 5px 40px 40px;
    margin: 10px 10px;
    flex-direction: column;
    flex-basis: 288px;
    text-align: left;
    box-shadow: 3px 3px 2px rgb(195, 195, 195);
  }

  .module-cuadro-item p {
    color: black;
    font-size: 1.5em;
    font-weight: 700;
  }
  .module-cuadro-item ul {
    padding: 0;
    margin: 0;
  }
  .module-cuadro-item li {
    text-decoration: none;
    list-style: none;
    font-size: calc(10px + 0.2vw);
    margin: 15px 0px 0;
    font-weight: 700;
  }
  .module-cuadro-item a,
  .module-cuadro-item h5 {
    color: rgb(72, 72, 72);
    margin: 3px 0;
    font-weight: 600;
    font-size: calc(10px + 0.2vw);
    transition: all 0.2s;
    cursor: pointer;
  }
  .module-cuadro-item a:hover,
  .module-cuadro-item h5:hover {
    color: white;
  }

  .module-footer {
    background-color: var(--color);
    padding: 50px 0 80px 0;
    width: 100%;
  }
  .module-footer button {
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

  .module-footer button:hover {
    background-color: white;
  }

  .module-footer button:last-child {
    padding: 10px 30px;
  }
  #module-container .side-nav {
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
  #module-container .side-nav:nth-child(2) {
    padding-left: 20px;
  }
  #module-container .side-nav:last-child {
    padding-right: 20px;
  }
  .module-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 1050px) {
    .module-logo-bg {
      z-index: -2;
      width: 300px;
      top: 90px;
      position: absolute;
    }
    .module-title-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: relative;
      top: 30px;
    }
    #module-container {
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: black;
      text-align: center;
    }

    #module-container h1 {
      font-size: 3rem;
      color: black;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
    #module-container h2 {
      font-size: x-large;
      font-weight: 900;
      color: black;
    }
    #module-container h3 {
      font-size: large;
      color: var(--color);
      padding: 0 40px;
    }
    #module-container h4 {
      font-size: large;
      padding: 8% 10% 0 10%;
      line-height: 150%;
      margin-top: 40px;
    }

    #module-container .side-nav {
      display: none;
    }
    .module-alt-nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      top: -10px;
      position: absolute;
      user-select: none;
    }
    .module-alt-nav-sides {
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
  }

  @media (max-width: 540px) {
    #module-container h1 {
      font-size: 2rem;
      color: rgb(0, 0, 0);
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
    #module-container h2 {
      font-size: large;
      font-weight: 900;
      color: black;
    }

    .module-cuadro-item li {
      font-size: medium;
    }
    .module-cuadro-item a,
    .module-cuadro-item h5 {
      margin: 10px 0;
      font-size: medium;
    }
    .module-cuadro-item {
      overflow: revert;
    }
  }
`;
