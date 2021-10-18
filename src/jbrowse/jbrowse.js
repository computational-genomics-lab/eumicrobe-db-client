// import React from 'react'
// import 'fontsource-roboto'
// import {
//   createViewState,
//   JBrowseLinearGenomeView,
// } from '@jbrowse/react-linear-genome-view'

// import fasta from '../genome_data/Phyag_NZFS3770.fna'
// import fai from '../genome_data/Phyag_NZFS3770.fna.fai'
// import ssrbw from '../genome_data/Phyag_NZFS3770.ssr.bw'

// const assembly = {
//   name: 'Phyag_NZFS3770',
//   sequence: {
//     type: 'ReferenceSequenceTrack',
//     trackId: 'GRCh38-ReferenceSequenceTrack',
//     adapter: {
//       type: 'IndexedFastaAdapter',
//       fastaLocation: {
//         uri: fasta,
          
//       },
//       faiLocation: {
//         uri: fai,
//       },
      
//     },
//   },
//   aliases: ['hg38'],
// }

// const tracks = [
//   {
//     type: 'FeatureTrack',
//     trackId: 'ncbi_refseq_109_hg38',
//     name: 'NCBI RefSeq (GFF3Tabix)',
//     assemblyNames: ['Phyag_NZFS3770'],
//     category: ['Annotation'],
//     adapter: {
//       type: 'Gff3TabixAdapter',
//       gffGzLocation: {
//         uri:
//           'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
//       },
//       index: {
//         location: {
//           uri:
//             'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi',
//         },
//       },
//     },
//   },
//   /*
//   {
//     trackID: "SSR_phy",
//     name: "SSR",
//     assemblyNames:["Phyag_NZFS3770"],
//     type: "QuantitativeTrack",
//     adapter: {
//             type: "BigWig",
//             bigWigLocation: { uri: ssrbw },
//     }

//   },
//   */
// ]

// const defaultSession = {
//   name: 'My session',
//   view: {
//     id: 'linearGenomeView',
//     type: 'LinearGenomeView',
//     tracks: [
//       {
//         type: 'ReferenceSequenceTrack',
//         configuration: 'GRCh38-ReferenceSequenceTrack',
//         displays: [
//           {
//             type: 'LinearReferenceSequenceDisplay',
//             configuration:
//               'GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay',
//           },
//         ],
//       },
//       {
//         type: 'FeatureTrack',
//         configuration: 'ncbi_refseq_109_hg38',
//         displays: [
//           {
//             type: 'LinearBasicDisplay',
//             configuration: 'ncbi_refseq_109_hg38-LinearBasicDisplay',
//           },
//         ],
//       },
//     ],
//   },
// }

// function View() {
//   const state = createViewState({
//     assembly,
//     tracks,
//     defaultSession,
//   })
//   return (
//     <div>
//       <JBrowseLinearGenomeView viewState={state} />
//     </div>
//     )
// }

// export default View

import React from 'react'
import 'fontsource-roboto'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'

import fasta from '../genome_data/Phyag_NZFS3770.fna'
import fai from '../genome_data/Phyag_NZFS3770.fna.fai'
import gff from '../genome_data/Phyag_NZFS3770.sorted.gff.gz'
import gfftbi from '../genome_data/Phyag_NZFS3770.sorted.gff.gz.tbi'
import ssrbw from '../genome_data/Phyag_NZFS3770.ssr.bw'

const assembly = {
  name: 'Phyag_NZFS3770',
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
  aliases: ['hg38'],
}

const tracks = [
  {
    type: 'FeatureTrack',
    trackId: 'Phyag_NZFS3770_gff',
    name: 'Phyag_NZFS3770 (GFF3Tabix)',
    assemblyNames: ['Phyag_NZFS3770'],
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
    assemblyNames:["Phyag_NZFS3770"],
    type: "QuantitativeTrack",
    adapter: {
            type: "BigWigAdapter",
            bigWigLocation: { uri: ssrbw },
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
        configuration: 'Phyag_NZFS3770_gff',
        displays: [
          {
            type: 'LinearBasicDisplay',
            configuration: 'Phyag_NZFS3770_gff-LinearBasicDisplay',
          },
        ],
      },
    ],
  },
}

function View() {
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

export default View
