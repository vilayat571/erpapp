import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Selectform from '../../components/Newcontract/Selectform';
import Layout from '../../layout/Layout';
import Goback from '../../parts/Goback';
import { getUsers } from '../../redux/reducers/newcontractReducer';

function Newcontract() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Layout>
      <Goback />
      <Selectform />
    </Layout>
  )
}

export default Newcontract;