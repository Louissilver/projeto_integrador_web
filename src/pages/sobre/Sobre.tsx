import { Box } from '@mui/material';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const secoes = [
  {
    titulo: 'Quem baba?',

    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: './empreendimento.jpg',
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: undefined,
    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: 'Valores',
    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: undefined,
    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: 'Princípios',
    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: 'Nossa história',
    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: undefined,
    botao: undefined,
    textAlign: 'justify',
  },
  {
    titulo: undefined,
    texto: `Nunc a libero at magna viverra molestie. Etiam mi urna, euismod id
    purus a, lacinia congue turpis. Vestibulum rhoncus at velit id
    sodales. Suspendisse dignissim sem ex, eget ultricies lectus efficitur
    et. Morbi ac diam nunc. Fusce sodales consectetur dolor, ut tristique
    odio pharetra eu. Maecenas ultrices, tortor ac pretium molestie,
    lectus lorem lacinia eros, varius facilisis mauris sem nec ipsum.
    Mauris purus eros, porta ut mollis non, sagittis at turpis. Ut
    venenatis lacus purus, mattis pretium dui convallis sit amet. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
    per conubia nostra, per inceptos himenaeos. Suspendisse maximus
    vestibulum luctus. Donec viverra, dui eu lobortis eleifend, lorem
    dolor accumsan lorem, ut lacinia libero nunc sed lectus. Aliquam ipsum
    diam, egestas condimentum lacinia tempus, aliquet sed quam. Class
    aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos. Fusce tempor mauris tristique, pellentesque magna
    a, accumsan tortor.`,
    imagem: './historia.jpeg',
    botao: undefined,
    textAlign: 'justify',
  },
];

export const Sobre: React.FC = () => {
  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
        {secoes.map(({ titulo, texto, imagem, botao, textAlign }, index) => {
          return (
            <Secao
              key={'secao-' + index}
              titulo={titulo}
              texto={texto}
              imagem={imagem}
              labelBotao={botao}
              textAlign={textAlign === 'justify' ? 'justify' : 'center'}
            />
          );
        })}
      </Box>
    </LayoutBaseDePagina>
  );
};
