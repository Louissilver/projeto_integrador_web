import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Box,
  Card,
  CardActionArea,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CardMedia } from '@mui/material';

interface IItemProps {
  nome: string;
  descricao: string;
  imagem: string;
}

interface ICarrosselProps {
  items: IItemProps[];
}

const Carrossel: React.FC<ICarrosselProps> = ({ items }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box width={mdDown ? '200%' : '100%'} margin="2rem auto ">
      <Carousel
        fullHeightHover
        navButtonsAlwaysVisible
        autoPlay
        indicators
        cycleNavigation
        duration={200}
      >
        {items.map((item, i) => (
          <Item
            key={i}
            nome={item.nome}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </Carousel>
    </Box>
  );
};

const Item: React.FC<IItemProps> = ({ imagem }) => {


  return (
    <Card
      sx={{
        width: '100%',
      }}
    >
      
        <CardMedia
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
            height: '50vh',
          }}
          component="img"
          image={imagem}
          alt="green iguana"
        />
    </Card>
  );
};

export default Carrossel;
