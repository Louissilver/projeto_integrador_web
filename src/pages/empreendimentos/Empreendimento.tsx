import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Secao from '../../shared/components/secao/Secao';
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina';

const projetos = [
  {
    id: 'vivendas-do-vale',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'nilo-square',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'go-carlos-gomes',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'arte-country-club',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'hill-side',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'seen-boa-vista',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'go-rio-branco',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'botanique-residence',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
  {
    id: 'grand-park-lindoia',
    secoes: [
      {
        titulo: 'Vivendas do Vale',
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
        imagem:
          'https://melnick.com.br/uploads/projects/52f745ee2883a8d484cbaeafdd805046.jpeg',
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
    ],
  },
];

export const Empreendimento: React.FC = () => {
  const location = useLocation();

  return (
    <LayoutBaseDePagina>
      <Box display="flex" flexDirection="column">
        {projetos
          .filter(
            (item) =>
              item.id === location.pathname.replace('/empreendimentos/', '')
          )
          .map((projeto) =>
            projeto.secoes.map((secao, index) => (
              <Secao
                key={'secao-' + index}
                titulo={secao.titulo}
                texto={secao.texto}
                imagem={secao.imagem}
                labelBotao={secao.botao}
                textAlign={secao.textAlign === 'justify' ? 'justify' : 'center'}
              />
            ))
          )}
      </Box>
    </LayoutBaseDePagina>
  );
};
