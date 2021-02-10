import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHARACTER_FETCH } from '../../redux/actionTypes';
import Progress from '../UI/Progress';
import AlertApp from '../UI/Alert';
import Pagination from '../UI/Pagination';
import List from '../UI/List';
import ListItem from './ListItem';
import Select from '../UI/Select';
import Grid from '@material-ui/core/Grid';
  
const Characters = () => {
  const [page, setPage] = useState(1);
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  
  const dispatch = useDispatch();

  const pending = useSelector(state => state.all.pending);
  const error = useSelector(state => state.all.error);
  const pages = useSelector(state => state.character.pages);
  const count = useSelector(state => state.character.count);
  const results = useSelector(state => state.character.results); // []
// debugger

  useEffect(() => {
    dispatch({type: CHARACTER_FETCH, page, species, status, gender})
  }, [page, species, status, gender]);

  // filter
  const speciesArr = ['Human', 'Humanoid', 'Alien', 'Poopybutthole', 'Animal', 'Cronenberg', 'Disease', 'unknown'];
  const statusArr = ['Alive', 'Dead', 'unknown'];
  const genderArr = ['Female', 'Male', 'Genderless', 'unknown'];

  return (
    <main>
      {pending ? (<Progress />) : error ? (<AlertApp />) : (<>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Select arr={speciesArr} 
              title='Species' 
              subTitle='Filter by species' 
              setValue={setSpecies}
              value={species} 
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select arr={statusArr} 
              title='Status' 
              subTitle='Filter by status' 
              setValue={setStatus}
              value={status} 
            />    
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select arr={genderArr} 
              title='Sender' 
              subTitle='Filter by gender' 
              setValue={setGender}
              value={gender} 
            />  
          </Grid>
        </Grid>

        <List>
          {results.map(el => (<React.Fragment key={el.id} >
              <ListItem  imgSrc={el.image}
                imgAlt={el.name} 
                title={el.name} 
                textBold={el.species} 
                text={el.location.name} 
                subTitle={el.status} 
                date={el.created}
                text1={`The species of the character: ${el.species}`}
                text2={`The gender of the character: ${el.gender}`}
                text3={`Name and link to the character's origin location: ${el.origin.name}`}
                text4={`Name and link to the character's last known location endpoint: ${el.location.name}`}
              />   
            </React.Fragment>))}
        </List>
      
        <Pagination page={page} setPage={setPage} maxPage={pages}/>
      </>)}
    </main>
  ); 
}
export default Characters;