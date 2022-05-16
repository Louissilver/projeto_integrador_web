import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Box,
  Card,
  CardActionArea,
  Icon,
  IconButton,
  Modal,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CardMedia } from '@mui/material';

type IItemProps = {
  imagem: string;
  alt: string;
  height?: string;
};

type ICarrosselProps = {
  items: IItemProps[];
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  height: '95%',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 0,
  boxSizing: 'border-box',
};

const Carrossel: React.FC<ICarrosselProps> = ({ items }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box width={mdDown ? '200%' : '100%'} margin="2rem auto ">
        <CardActionArea onClick={handleOpen}>
          <Carousel
            fullHeightHover={false}
            navButtonsAlwaysVisible
            autoPlay
            indicators
            cycleNavigation
            duration={200}
          >
            {items.map((item, i) => (
              <Item key={i} imagem={item.imagem} alt={item.alt} />
            ))}
          </Carousel>
        </CardActionArea>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              position: 'absolute',
              zIndex: 2,
              right: 2,
              top: 2,
              color: 'white',
            }}
            onClick={handleClose}
          >
            <Icon>disabled_by_default</Icon>
          </IconButton>
          <Carousel
            fullHeightHover={false}
            navButtonsAlwaysVisible
            autoPlay
            indicators={false}
            cycleNavigation
            duration={200}
          >
            {items.map((item, i) => (
              <Item key={i} imagem={item.imagem} alt={item.alt} height="95vh" />
            ))}
          </Carousel>
        </Box>
      </Modal>
    </>
  );
};

const Item: React.FC<IItemProps> = ({ imagem, alt, height }) => {
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
          height: height || '50vh',
        }}
        component="img"
        image={imagem}
        alt={alt}
      />
    </Card>
  );
};

export default Carrossel;
