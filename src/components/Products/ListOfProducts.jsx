import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useContext} from 'react';
import {useState} from 'react';
import { AppContext } from '../../App';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { recipesActions } from '../../store/store';
import store from '../../store/store';

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
  const [expanded, setExpanded] = React.useState('');
  const [expanded1, setExpanded1] = React.useState('');
  const [expanded2, setExpanded2] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange1 = (panel) => (event, newExpanded) => {
    setExpanded1(newExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };
  const  searchHandler = () => {
   context.setCurrentProducts((prev) => {return [...prev, ...context.products.filter(e => e.value == true).map(e => {return e.title}) ]});
  }

  React.useEffect(() => {
    getData(context.currentProducts)(dispatch);
    dispatch(recipesActions.setLoading());
  }, [context.currentProducts]);

  const getData = (products) => async (dispatch) => {
    if (products) {
      fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${products.join(",+")}&number=2&ignorePantry=true&apiKey=8dbf3f3eb9894749829f44b3ea57a34d`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          dispatch(recipesActions.setRecipes({data: data}));
          dispatch(recipesActions.setLoaded());
        });
    }
    return;
    };
  return ( 
  <div className="products">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Meat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products.filter(e => e.type === 'meat').map(e => {
                return <span key={e.title}>
                <Button variant="outlined" style={{background: e.value == true ? "pink" : "white"}}
                onClick={(b) => {
                    b.target.style.background === 'white' ? b.target.style.background = "pink" : b.target.style.background = "white";
                    e.value = !e.value;
                    }}
                >{e.title}</Button>
                </span>
            })}
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion expanded={expanded1 === 'panel2'} onChange={handleChange1('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Fruits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products.filter(e => e.type === 'fruits').map(e => {
                return <span key={e.title}>
                  <Button variant="outlined" style={{background: e.value == true ? "pink" : "white"}}
                onClick={(b) => {
                    b.target.style.background === 'white' ? b.target.style.background = "pink" : b.target.style.background = "white";
                    e.value = !e.value;}}
                >{e.title}</Button>
                </span>
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded2 === 'panel3'} onChange={handleChange2('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Vegetables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.products.filter(e => e.type === 'vegetables').map(e => {
                return <span key={e.title}>
                 <Button variant="outlined" style={{background: e.value == true ? "pink" : "white"}}
                onClick={(b) => {
                    b.target.style.background === 'white' ? b.target.style.background = "pink" : b.target.style.background = "white";
                    e.value = !e.value;}}
                >{e.title}</Button>
                </span>
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained"
      onClick={searchHandler}>Search</Button>
    </div>
  );
}
