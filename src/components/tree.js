import React from "react";
import TreeMenu from 'react-simple-tree-menu';
const treeData = {
  'first-level-node-1': {               // key
    label: 'Phytophthora agathicida',
    index: 0, // decide the rendering order on the same level
       // any other props you need, e.g. url
    nodes: {
      'Phyag_NZFS3770': {
        label: 'Phyag_NZFS3770',
        index: 0, },
        'Phyag_NZFS3772':{
          label: 'Phyag_NZFS3772',
          index:0,
        }
    },
   
  },
  'first-level-node-2': {
    label: 'Phytophthora aleatoria',
    index: 1,
    nodes:{
      'Phyal_NZFS4037': {
        label: 'Phyal_NZFS4037',
        index: 2, },
  },},
  'first-level-node-3': {
    label: 'Phytophthora boehmeriae',
    index: 2,
    nodes:{
      'Phybo_SCRP23': {
        label: 'Phybo_SCRP23',
        index: 2, },
    }
  },
  'first-level-node-4': {
     label: 'Phytophthora cactorum',
     index: 3,
     nodes:{
       'Phyca_P404': {
         label: 'Phyca_P404',
       index: 3, },
       'Phyca_4032': {
        label: 'Phyca_4032',
      index: 3, },
      'Phyca_2003-3': {
        label: 'Phyca_2003-3',
      index: 3, },
      'Phyca_4040': {
        label: 'Phyca_4040',
      index: 3, },
      'Phyca_62471': {
        label: 'Phyca_62471',
      index: 3, },


     }},
  //     
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },  
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },
  //       'Phyca_4032':{
  //         label: 'Phyca_4032',
  //         index:3,
  //       },

  //   }

};
function Trees(){return(
  <TreeMenu data={treeData} />
)}
export default Trees;