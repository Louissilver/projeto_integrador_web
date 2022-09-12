import { Box, List, ListItem, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';


export const Sobre: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column" sx={{
        backgroundImage: 'url("./nossoproposito.svg")',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: mdDown ? 'cover' : '75%',
        backgroundPosition: mdDown ? '20vw' : 'right',
        mb: 3,
        minHeight: '70vh',
        paddingLeft: smDown ? '2rem' : '5rem',
        paddingTop: smDown ? '2rem' : '5rem',
        boxSizing: 'border-box'
      }}>
        <Typography
          margin="0 0 2rem 0"
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{ fontWeight: 'bold' }}
          fontSize='2rem'
        >
          Nosso Propósito
        </Typography>
        <Typography
          margin="0 0 1rem 0"
          variant="h4"
          fontSize='2rem'
          color={theme.palette.primary.main}
          sx={{ fontWeight: 'bold', paddingRight: '3rem', width: mdDown ? '70%' : '30%' }}
        >{<i>Provocar mudanças que transformam vidas</i>}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" sx={{
        mb: 3,
        minHeight: '70vh',
        paddingLeft: smDown ? '2rem' : '5rem',
        paddingTop: smDown ? '2rem' : '5rem',
        boxSizing: 'border-box'
      }}>
        <Typography
          margin="0 0 2rem 0"
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{ fontWeight: 'bold' }}
          fontSize='2rem'
        >
          Nossos Valores
        </Typography>
        <Box>
          <List
            sx={{
              display: 'flex',
              flexDirection: mdDown ? 'column' : 'row',
              listStyleType: 'disc',
              pl: 1,
              pb: mdDown ? 0 : 3,
              '& .MuiListItem-root': {
                display: 'list-item',
              },
            }}>
            <ListItem>
              <Typography
                margin="0 0 1rem 0"
                variant="h5"
                fontSize='1.5rem'
                color={theme.palette.primary.main}
                sx={{ fontWeight: 'bold', paddingRight: '3rem' }}
              >
              <i>Protagonismo</i>
              </Typography>
            </ListItem>
            <ListItem sx={{ color: theme.palette.primary.main }}>
              <Typography
                margin="0 0 1rem 0"
                variant="h5"
                fontSize='1.5rem'
                color={theme.palette.primary.main}
                sx={{ fontWeight: 'bold', paddingRight: '3rem' }}
              >
              <i>Liberdade</i>
              </Typography>
              <Typography
                variant="caption"
                color={theme.palette.primary.main}
                sx={{ fontWeight: '', paddingRight: '3rem' }}
              >
              (de tempo, geográfica e financeira)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                margin="0 0 1rem 0"
                variant="h5"
                fontSize='1.5rem'
                color={theme.palette.primary.main}
                sx={{ fontWeight: 'bold', paddingRight: '3rem' }}
              >
              <i>Aprendizado</i>
              </Typography>
            </ListItem>
          </List>
          <List
            sx={{
              display: 'flex',
              flexDirection: mdDown ? 'column' : 'row',
              listStyleType: 'disc',
              pl: 1,
              '& .MuiListItem-root': {
                display: 'list-item',
              },
            }}>
            <ListItem>
              <Typography
                margin="0 0 1rem 0"
                variant="h5"
                fontSize='1.5rem'
                color={theme.palette.primary.main}
                sx={{ fontWeight: 'bold', paddingRight: '3rem' }}
              >
              <i>Transparência</i>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                margin="0 0 1rem 0"
                variant="h5"
                fontSize='1.5rem'
                color={theme.palette.primary.main}
                sx={{ fontWeight: 'bold', paddingRight: '3rem' }}
              >
              <i>Empatia</i>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                margin="0 0 1rem 0"
                variant="h5"
                fontSize='1.5rem'
                color={theme.palette.primary.main}
                sx={{ fontWeight: 'bold', paddingRight: '3rem' }}
              >
              <i>Foco</i>
              </Typography>
            </ListItem>
          </List>
        </Box>

      </Box>
      <Box display="flex" flexDirection="column" sx={{
        backgroundImage: 'url("./mapa.png")',
        backgroundColor: theme.palette.primary.main,
        backgroundRepeat: 'no-repeat',
        backgroundSize: mdDown ? 'cover' : '70%',
        backgroundPosition: mdDown ? '20vw' : 'right',
        mb: 3,
        minHeight: '70vh',
        paddingLeft: smDown ? '2rem' : '5rem',
        paddingTop: smDown ? '2rem' : '5rem',
        boxSizing: 'border-box'
      }}>
        <Typography
          margin="0 0 2rem 0"
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{ fontWeight: 'bold' }}
          fontSize='2rem'
        >
          Nossa Visão
        </Typography>
        <Typography
          margin="0 0 2rem 0"
          variant="h5"
          fontSize='1rem'
          color={theme.palette.primary.contrastText}
          sx={{ fontWeight: 'light', lineHeight: '2rem', paddingRight: '3rem', width: mdDown ? '300%' : '30%' }}
        >
          Atingir 100 franquias no Brasil até 2026,<br></br>
          gerando oportunidades e capacitando<br></br>
          o setor imobiliário do 1º imóvel.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" sx={{
        mb: 3,
        minHeight: '70vh',
        paddingLeft: smDown ? '2rem' : '5rem',
        paddingTop: smDown ? '2rem' : '5rem',
        boxSizing: 'border-box'
      }}>
        <Typography
          margin="0 0 2rem 0"
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{ fontWeight: 'bold' }}
          fontSize='2rem'
        >
          Nossa Missão
        </Typography>
        <Box padding={0} margin={0} display='flex' flexDirection='column' minHeight='40vh'>

          <Typography
            variant="h5"
            fontSize='1rem'
            color={theme.palette.primary.main}
            sx={{ paddingRight: '3rem', marginTop: '0.5rem' }}
          >
            {<b>1.</b>} Entregar a oportunidade de todo brasileiro viver com qualidade
          </Typography>


          <Typography
            variant="h5"
            fontSize='1rem'
            color={theme.palette.primary.main}
            sx={{ paddingRight: '3rem', marginTop: '0.5rem' }}
          >
            {<b>2.</b>} Impulsionar...
          </Typography>


          <Typography
            variant="h5"
            fontSize='1rem'
            color={theme.palette.primary.main}
            sx={{ paddingRight: '3rem', marginTop: '0.5rem' }}
          >
            {<b>3.</b>} Entregar oportunidade de viver melhor ao povo brasileiro
          </Typography>


          <Typography
            variant="h5"
            fontSize='1rem'
            color={theme.palette.primary.main}
            sx={{ paddingRight: '3rem', marginTop: '0.5rem' }}
          >
            {<b>4.</b>} Mover as pessoas às melhores oportunidades de viver melhor
          </Typography>


          <Typography
            variant="h5"
            fontSize='1rem'
            color={theme.palette.primary.main}
            sx={{ paddingRight: '3rem', marginTop: '0.5rem' }}
          >
            {<b>5.</b>} Entregar a melhor oportunidade a todo brasileiro de viver melhor
          </Typography>


          <Typography
            variant="h5"
            fontSize='1rem'
            color={theme.palette.primary.main}
            sx={{ paddingRight: '3rem', marginTop: '0.5rem' }}
          >
            {<b>6.</b>} Resolver o problema de moradia do brasileiro
          </Typography>

        </Box>

      </Box>
    </Box>
  );
};