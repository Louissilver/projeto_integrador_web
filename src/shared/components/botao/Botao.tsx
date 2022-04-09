import { Button } from '@mui/material';

interface IBotaoProps {
  label: string;
}

const Botao: React.FC<IBotaoProps> = ({ label }) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        width: '40%',
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
