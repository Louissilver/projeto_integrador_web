import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, useTheme } from '@mui/material';

interface IAcordeaoProps {
  questoes: IQuestoesContent[];
}

interface IQuestoesContent {
  id: string;
  titulo: string;
  resposta: string;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: '0 0 1rem 0',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.grey[400]}`,
}));

const Acordeao: React.FC<IAcordeaoProps> = ({ questoes }) => {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column">
      {questoes.map((questao) => {
        return (
          <Accordion
            key={questao.id}
            expanded={expanded === questao.id}
            onChange={handleChange(questao.id)}
          >
            <AccordionSummary
              aria-controls={`${questao.id}-content`}
              id={`${questao.id}-header`}
            >
              <Typography color={theme.palette.background.paper}>
                {questao.titulo}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={theme.palette.background.paper}>
                {questao.resposta}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default Acordeao;
