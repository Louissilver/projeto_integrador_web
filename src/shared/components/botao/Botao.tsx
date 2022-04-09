import { Button, useMediaQuery, useTheme } from '@mui/material';

interface IBotaoProps {
  label: string;
}

const Botao: React.FC<IBotaoProps> = ({ label }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        width: mdDown ? '100%' : '40%',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        margin: '2rem auto',
      }}
    >
      {label}
    </Button>
  );
};

export default Botao;
