import React from 'react'
import 'fontsource-roboto'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'


function trial(props) {

const fasta= require(`../genome_data/${props.id}.fna`)  
const fai= require(`../genome_data/${props.id}.fna.fai`)
const gff= require(`../genome_data/${props.id}.sorted.gff.gz`)
const gfftbi = require(`../genome_data/${props.id}.sorted.gff.gz.tbi`)
const ssrbw = require(`../genome_data/${props.id}.bw`)

const assembly ={
  name: '{props.id}',
  
sequence: {
  type: 'ReferenceSequenceTrack',
  trackId: 'GRCh38-ReferenceSequenceTrack',
  adapter: {
    type: 'IndexedFastaAdapter',
    fastaLocation: {
      uri: fasta,
        
    },
    faiLocation: {
      uri: fai,
    },
    
  },
},
aliases: ['hg38'],}


const tracks=[
  {
    type: 'FeatureTrack',
    trackId: '{props.id}_gff',
    name: '{props.id} (GFF3Tabix)',
    assemblyNames: ['{props.id}'],
    category: ['Genes'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri: gff,
      },
      index: {
        location: {
          uri: gfftbi,
        },
      },
    },
  },
  
  {
    trackId: "SSR_phy",
    name: "SSR",
    assemblyNames:["{props.id}"],
    type: "QuantitativeTrack",
    adapter: {
            type: "BigWigAdapter",
            bigWigLocation: { uri: ssrbw},
    }

  },
]
const defaultSession = {      
  name: 'My session',
  view: {
    id: 'linearGenomeView',
    type: 'LinearGenomeView',
    tracks: [
      {
        type: 'ReferenceSequenceTrack',
        configuration: 'GRCh38-ReferenceSequenceTrack',
        displays: [
          {
            type: 'LinearReferenceSequenceDisplay',
            configuration:
              'GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
          },
        ],
      },
      {
        type: 'FeatureTrack',
        configuration: '{props.id}_gff',
        displays: [
          {
            type: 'LinearBasicDisplay',
            configuration: '{props.id}_gff-LinearBasicDisplay',
          },
        ],
      },
    ],
  },
}



  const state = createViewState({
    assembly,
    tracks,
    defaultSession,
  })
  return (
    <div>
      <JBrowseLinearGenomeView viewState={state} />
    </div>
    )
}

export default trial;
