import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
    return (
      <>
         <Form currentId={currentId} setCurrentId={setCurrentId} />
         
              <Posts setCurrentId={setCurrentId} />
          
            
            
        
              </> 
    );
  };
  
  export default Home;
  