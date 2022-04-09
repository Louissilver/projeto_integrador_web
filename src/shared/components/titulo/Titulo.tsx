import { Typography, useTheme } from '@mui/material';

interface ITituloProps {
  titulo: string;
}

const Titulo: React.FC<ITituloProps> = ({ titulo }) => {
  const theme = useTheme();

  return (
    <Typography
      margin="0 0 2rem 0"
      variant="h4"
      color={theme.palette.primary.main}
      textAlign="center"
    >
      {titulo}
    </Typography>
  );
};

export default Titulo;
