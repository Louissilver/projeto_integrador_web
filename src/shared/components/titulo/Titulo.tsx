import { Typography, useTheme } from '@mui/material';

interface ITituloProps {
  titulo: string;
  align?: 'justify' | 'center';
}

const Titulo: React.FC<ITituloProps> = ({ titulo, align }) => {
  const theme = useTheme();

  return (
    <Typography
      margin="0 0 1rem 0"
      variant="h4"
      color={theme.palette.primary.main}
      textAlign={align === 'justify' ? 'justify' : 'center'}
    >
      {titulo}
    </Typography>
  );
};

export default Titulo;
