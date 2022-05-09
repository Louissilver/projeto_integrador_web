import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Box,
  ButtonProps,
  Card,
  CardActionArea,
  Icon,
  IconButton,
  Modal,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CardMedia } from '@mui/material';

type IItemProps = ButtonProps & {
  nome: string;
  descricao: string;
  imagem: string;
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

const Item: React.FC<IItemProps> = ({ imagem, ...rest }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CardActionArea {...rest} onClick={handleOpen}>
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
      </CardActionArea>

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
              right: 2,
              top: 2,
              color: 'white',
              textShadow: '3px 2px 2px black',
            }}
            onClick={handleClose}
          >
            <Icon>close</Icon>
          </IconButton>
          <CardMedia
            sx={{ width: '100%', height: '100%', borderRadius: 2 }}
            component="img"
            image={imagem}
            alt="green iguana"
          />
        </Box>
      </Modal>
    </>
  );
};

export default Carrossel;
