import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../../App';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { recipesActions } from '../../store/store';
import store from '../../store/store';
import errorImg from '../../Assets/Imgs/error402.jpg';
import { Container } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ListOfProducts() {
  const context = useContext(AppContext);
  const theme = useSelector(state => state.ui.theme);
  const [expanded, setExpanded] = React.useState('');
  const [expanded1, setExpanded1] = React.useState('');
  const [expanded2, setExpanded2] = React.useState('');
  const [expanded3, setExpanded3] = React.useState('');
  const [expanded4, setExpanded4] = React.useState('');
  const [expanded5, setExpanded5] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (panel, handler) => (event, newExpanded) => {
    handler(newExpanded ? panel : false);
  };

  const searchHandler = () => {
    context.setCurrentProducts((prev) => {
      console.log(context.products);
      return [
        ...prev,
        ...context.products
          .filter((e) => e.value === true)
          .map((e) => {
            return e.title;
          }),
      ];
    });
  };

  const noneRecipe = [
    {
      id: 'test',
      title: 'Sorry. we"ve out of points :C',
      image: 'https://m.buro247.ua/images/2017/09/insta-of-the-week-sad-cat-luhu-17.jpg',
      description: 'Error 402',
      ingredient: ['garlic', 'apple', 'orange'],
    },
  ];

  React.useEffect(() => {
    if (context.currentProducts !== []) {
      getData(context.currentProducts)(dispatch);
      dispatch(recipesActions.setLoading());
    }
  }, [context.currentProducts, dispatch]);


  // 5a0abc362e76484ba29eeb96b16641a7
  // 8dbf3f3eb9894749829f44b3ea57a34d
  const getData = (products) => async (dispatch) => {
    if (products.length === 0) {
      return;
    }
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${products.map(
        (el) => el + ',+'
      )}&number=2&ignorePantry=true&apiKey=5a0abc362e76484ba29eeb96b16641a7`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.status === 'failure') {
          dispatch(recipesActions.setRecipes({ data: noneRecipe }));
          dispatch(recipesActions.setLoaded());
          return;
        }
        dispatch(recipesActions.setRecipes({ data: data }));
        dispatch(recipesActions.setLoaded());
      })
      .catch((err) => {
        console.error(err.message);
      });
    return;
  };

  return (
    <Container className='products' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#31708E'}}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1', setExpanded)}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#5085A5'}}>
          <Typography>Meat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products
              .filter((el) => el.type === 'meat')
              .map((e) => {
                return (
                  <span key={e.title}>
                    <Button
                      variant='outlined'
                      style={{ background: e.value == true ? 'pink' : 'white' }}
                      onClick={(b) => {
                        b.target.style.background === 'white'
                          ? (b.target.style.background = 'pink')
                          : (b.target.style.background = 'white');
                        e.value = !e.value;
                      }}>
                      {e.title}
                    </Button>
                  </span>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded1 === 'panel2'}
        onChange={handleChange('panel2', setExpanded1)}>
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#5085A5'}}>
          <Typography>Fruits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products
              .filter((e) => e.type === 'fruits')
              .map((e) => {
                return (
                  <span key={e.title}>
                    <Button
                      variant='outlined'
                      style={{ background: e.value == true ? 'pink' : 'white' }}
                      onClick={(b) => {
                        b.target.style.background === 'white'
                          ? (b.target.style.background = 'pink')
                          : (b.target.style.background = 'white');
                        e.value = !e.value;
                      }}>
                      {e.title}
                    </Button>
                  </span>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded2 === 'panel3'}
        onChange={handleChange('panel3', setExpanded2)}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#5085A5'}}>
          <Typography>Vegetables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products
              .filter((e) => e.type === 'vegetables')
              .map((e) => {
                return (
                  <span key={e.title}>
                    <Button
                      variant='outlined'
                      style={{ background: e.value == true ? 'pink' : 'white' }}
                      onClick={(b) => {
                        b.target.style.background === 'white'
                          ? (b.target.style.background = 'pink')
                          : (b.target.style.background = 'white');
                        e.value = !e.value;
                      }}>
                      {e.title}
                    </Button>
                  </span>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded3 === 'panel4'}
        onChange={handleChange('panel4', setExpanded3)}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#5085A5'}}>
          <Typography>Pasta</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products
              .filter((e) => e.type === 'pasta')
              .map((e) => {
                return (
                  <span key={e.title}>
                    <Button
                      variant='outlined'
                      style={{ background: e.value == true ? 'pink' : 'white' }}
                      onClick={(b) => {
                        b.target.style.background === 'white'
                          ? (b.target.style.background = 'pink')
                          : (b.target.style.background = 'white');
                        e.value = !e.value;
                      }}>
                      {e.title}
                    </Button>
                  </span>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded4 === 'panel5'}
        onChange={handleChange('panel5', setExpanded4)}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#5085A5'}}>
          <Typography>Groats</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products
              .filter((e) => e.type === 'groats')
              .map((e) => {
                return (
                  <span key={e.title}>
                    <Button
                      variant='outlined'
                      style={{ background: e.value == true ? 'pink' : 'white' }}
                      onClick={(b) => {
                        b.target.style.background === 'white'
                          ? (b.target.style.background = 'pink')
                          : (b.target.style.background = 'white');
                        e.value = !e.value;
                      }}>
                      {e.title}
                    </Button>
                  </span>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded5 === 'panel6'}
        onChange={handleChange('panel6', setExpanded5)}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header' sx={{backgroundColor: theme === 'bright' ? '#E7DBC6' : '#5085A5'}}>
          <Typography>Fish</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products
              .filter((e) => e.type === 'fish')
              .map((e) => {
                return (
                  <span key={e.title}>
                    <Button
                      variant='outlined'
                      style={{ background: e.value == true ? 'pink' : 'white' }}
                      onClick={(b) => {
                        b.target.style.background === 'white'
                          ? (b.target.style.background = 'pink')
                          : (b.target.style.background = 'white');
                        e.value = !e.value;
                      }}>
                      {e.title}
                    </Button>
                  </span>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button variant='contained' onClick={searchHandler}>
        Search
      </Button>
    </Container>
  );
}
