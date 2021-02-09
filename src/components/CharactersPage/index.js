import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHARACTER_FETCH } from '../../redux/actionTypes';
import Progress from '../UI/Progress';
import AlertApp from '../UI/Alert';
import Pagination from '../UI/Pagination';
import List from '../UI/List';
import ListItem from '../UI/ListItem';
import Select from '../UI/Select';
import Modal from '../UI/Modal';
import Card from '../UI/Card';


  
const Characters = () => {
  const [page, setPage] = useState(1);
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  
  const dispatch = useDispatch();

  const pending = useSelector(state => state.character.pending);
  const error = useSelector(state => state.character.error);
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

  // // modal
  // const [openModal, setOpenModal] = React.useState(false);
  // const handleModalOpen = () => {
  //   setOpenModal(true);
  // };
  // const handleModalClose = () => {
  //   setOpenModal(false);
  // };


  return (
    <div>
      {pending ? (<Progress />) : error ? (<AlertApp />) : (<>

        <Select arr={speciesArr} 
          title='Species' 
          subTitle='Filter by species' 
          setValue={setSpecies}
          value={species} 
        />
        
        <Select arr={statusArr} 
          title='Status' 
          subTitle='Filter by status' 
          setValue={setStatus}
          value={status} 
        />      

        <Select arr={genderArr} 
          title='Sender' 
          subTitle='Filter by gender' 
          setValue={setGender}
          value={gender} 
        />        


        <List>
          {results.map(el => (<React.Fragment key={el.id} >
              {/* <ListItem  imgSrc={el.image}
                imgAlt={el.name} 
                title={el.name} 
                textBold={el.species} 
                text={el.location.name} 
                onClick={handleModalOpen}
              /> */}
              {/* <Modal onClose={handleModalClose} open={openModal}> */}
              <ListItem  imgSrc={el.image}
                imgAlt={el.name} 
                title={el.name} 
                textBold={el.species} 
                text={el.location.name} 
                // onClick={handleModalOpen}
                subTitle={el.status} 
                date={el.created}
                text1={el.species}
                text2={el.gender}
                text3={el.origin.name}
                text4={el.location.name}
                ell={el}
              />   
                {/* <Modal onClose={handleModalClose}> */}
                {/* <Modal>
                  <Card imgSrc={el.image} 
                    imgAlt={el.name}
                    title={el.name} 
                    subTitle={el.status} 
                    date={el.created}
                    text1={el.species}
                    text2={el.gender}
                    text3={el.origin.name}
                    text4={el.location.name}
                  />
                </Modal> */}
              {/* </ListItem> */}



            </React.Fragment>))}
        </List>
      
        <Pagination page={page} setPage={setPage} maxPage={pages}/>

      </>)}
    </div>
  ); 
}

export default Characters;