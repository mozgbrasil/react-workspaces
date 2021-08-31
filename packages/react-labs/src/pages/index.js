import Loadable from "@loadable/component";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
// import _ from "lodash";
import React, { useState, useEffect } from "react";
import { SpinnerFlexButton as Loading } from "../components/Util";

const CodepenIoTinypolyworldthreejsExperiements = Loadable(
  () => import("codepen.io/tinypolyworldthreejs-experiements"),
  {
    fallback: <Loading />,
  }
);

const CodepenIoTheFranticRunOfTheValorousRabbit = Loadable(
  () => import("codepen.io/the-frantic-run-of-the-valorous-rabbit"),
  {
    fallback: <Loading />,
  }
);

const CodepenIoRocketAnimationWithGsap = Loadable(
  () => import("codepen.io/rocket-animation-with-gsap"),
  {
    fallback: <Loading />,
  }
);

const CodepenIoSimpleCssWavesMobileFullWidth = Loadable(
  () => import("codepen.io/simple-css-waves-mobile-full-width"),
  {
    fallback: <Loading />,
  }
);

const CodepenIoSpaceGlobethreeJs = Loadable(
  () => import("codepen.io/space-globethree-js"),
  {
    fallback: <Loading />,
  }
);

const cards = [
  {
    title: "Construa mais rápido",
    description:
      "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
  },
  {
    title: "Declarativo",
    description:
      "React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.",
  },
  {
    title: "Baseado em componentes",
    description:
      "Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas. Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM. ",
  },
];

const BootstrapCard = Loadable(() => import("@mozg/common/baunilha/Card"), {
  fallback: <Loading />,
});

const CodepenIoClashOfClansCards = Loadable(
  () => import("codepen.io/clash-of-clans-cards"),
  {
    fallback: <Loading />,
  }
);

//

function randomize(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function Test() {
  return <div>Test</div>;
}

function CodepenIo_SpaceGlobethreeJs_SimpleCssWavesMobileFullWidth_CodepenIoRocketAnimationWithGsap() {
  return (
    <div className='bg-primary border-secondary bg-night'>
      <div className=''>
        <div className='layers'>
          <div className='layer'>
            <CodepenIoSpaceGlobethreeJs />
          </div>
          <div className='layer'>
            <CodepenIoSimpleCssWavesMobileFullWidth />
          </div>
          <div className='layer'>
            <CodepenIoRocketAnimationWithGsap />
          </div>
        </div>
      </div>
    </div>
  );
}

//

var arrMainHeads = [
  //   <Test />,
  <CodepenIoTinypolyworldthreejsExperiements />,
  //   <CodepenIo_SpaceGlobethreeJs_SimpleCssWavesMobileFullWidth_CodepenIoRocketAnimationWithGsap />,
  <CodepenIoTheFranticRunOfTheValorousRabbit />,
];

let RandomMainHeads = randomize(arrMainHeads);

var arrCards = [
  //   <Test />,
  <BootstrapCard itens={cards} />,
  <CodepenIoClashOfClansCards itens={cards} />,
];

let RandomCards = randomize(arrCards);

//

// https://getbootstrap.com/docs/4.4/components/toasts/

function BootstrapToasts(props) {
  const [count, setCount] = useState(0);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    console.log("BootstrapToasts:useEffect");
  }, [count]); // Apenas re-execute o efeito quando o count mudar

  return (
    <>
      <div className='position-fixed bottom-0 end-0 p-3'>
        <div
          id='liveToast'
          className='toast hide'
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div className='toast-header'>
            <span style={{ color: "red" }}>
              <i className='fas fa-star'></i>
            </span>
            <strong className='me-auto'>&nbsp;</strong>
            <small>&nbsp;</small>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          </div>
          <div className='toast-body'>React Versão: {React.version}</div>
        </div>
      </div>
    </>
  );
}

//

function Home(props) {
  console.log("Index:", props);

  return (
    <>
      {/* <div className='jumbotron'>
        <div className='container'>
          <h1>Sobre</h1>
          <p>
            Este projeto foi criado por{" "}
            <a
              href='https://mozg.com.br/curriculum/'
              target='_blank'
              className=' '
              rel='noopener noreferrer'
            >
              Marcio dos Santos Amorim
            </a>{" "}
            desenvolvedor de softwares desde 1999.
            <br />
            Desde meados de 2018 venho explorando o universo Node.js e adotando
            ferramentas como o React® e ExpressJs, para visualizar os diversos
            projetos acesse o menu Projetos
          </p>
        </div>
      </div> */}

      {RandomMainHeads}

      <div className=' clearfix'></div>

      {RandomCards}

      <BootstrapToasts />
    </>
  );
}

export default Home;
