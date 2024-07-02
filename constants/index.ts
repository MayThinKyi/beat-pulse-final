import { IPlaylist, ISong } from "@/types";

export const genres=[
    {id:1,name:'All',value:'all'},
    {id:2,name:'K-Pop',value:'k-pop'},
    {id:3,name:'Latino',value:'latino'},
    {id:4,name:'Frunk',value:'frunk'},
    {id:5,name:'Hip-Hop',value:'hip-hop'},
    {id:6,name:'Indie',value:'indie'},
    {id:7,name:'Synth-wave',value:'synth-wave'},
    {id:8,name:'Old School',value:'oldschool'},
    {id:9,name:'R&B',value:'r&b'},
];

export const explore=[
  {id:1,img:'/explore1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
  {id:2,img:'/explore2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
  {id:3,img:'/explore3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
  {id:4,img:'/explore4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
  {id:5,img:'/explore5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
  {id:6,img:'/explore6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
  {id:7,img:'/explore7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
 ]

 export const forYous:ISong[]=[
  {id:1,artist:'SZA',duration:'2:32',genres:[{
    id: 6,
    name: "Indie",
    value: "indie"
    },
    {
    id: 7,
    name: "Synth-wave",
    value: "synth-wave"
    },
    {
      id: 9,
      name: "R&B",
      value: "r&b"
      }],img:'/fy1.png',new:true,title:'Saturn',text1:'68 BPM',text2:'C Maj'},
  {id:2,artist:'The Weekend',duration:'2:40',genres:[{
    id: 6,
    name: "Indie",
    value: "indie"
    },
    {
    id: 7,
    name: "Synth-wave",
    value: "synth-wave"
    },
    {
      id: 9,
      name: "R&B",
      value: "r&b"
      }],img:'/fy2.png',new:false,title:'One Of Girls',text1:'68 BPM',text2:'C Maj'},
  {id:3,artist:'Billie Ellish',duration:'3:32',genres:[{
    id: 6,
    name: "Indie",
    value: "indie"
    },
    {
    id: 7,
    name: "Synth-wave",
    value: "synth-wave"
    },
    {
      id: 9,
      name: "R&B",
      value: "r&b"
      }],img:'/fy3.png',new:false,title:'Birds of a Feather',text1:'68 BPM',text2:'C Maj'},
  ]

  export const playlists=[
    {id:1,name:'All',value:'all',playlists:[
      {id:1,img:'/explore1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/explore2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/explore3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/explore4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/explore5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/explore6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/explore7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/explore1.png',
          title:'Tale of a Star',
          artist:'William',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/explore1.png',
          title:'Tale of a Star',
          artist:'William',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/explore1.png',
          title:'Tale of a Star',
          artist:'William',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/ka1.png',name:'BTS'},
      {id:1,img:'/ka2.png',name:'BLACKPINK'},
      {id:1,img:'/ka3.png',name:'RED VELVET'},
      {id:1,img:'/ka4.png',name:'V'},
      {id:1,img:'/ka5.png',name:'JIN'},
     ] },
    {id:2,name:'K-Pop',value:'k-pop',playlists:[
      {id:1,img:'/k1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/k2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/k3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/k4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/k5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/k6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/k7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/k1.png',
          title:'Next Level',
          artist:'Aespa',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/k1.png',
          title:'Next Level',
          artist:'Aespa',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/k1.png',
          title:'Next Level',
          artist:'Aespa',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        }
    ] ,majorArtists:[
      {id:1,img:'/ka1.png',name:'BTS'},
      {id:1,img:'/ka2.png',name:'BLACKPINK'},
      {id:1,img:'/ka3.png',name:'RED VELVET'},
      {id:1,img:'/ka4.png',name:'V'},
      {id:1,img:'/ka5.png',name:'JIN'},
     ] },
     {id:3,name:'Latino',value:'latino',playlists:[
      {id:1,img:'/l1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/l2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/l3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/l4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/l5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/l6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/l8.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/l1.png',
          title:'Luna',
          artist:'Jacob',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/l1.png',
          title:'Luna',
          artist:'Jacob',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/l1.png',
          title:'Luna',
          artist:'Jacob',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/la1.png',name:'Maluma'},
      {id:1,img:'/la2.png',name:'Xavi'},
      {id:1,img:'/la3.png',name:'JBavlin'},
      {id:1,img:'/la4.png',name:'Bad Bunny'},
      {id:1,img:'/la5.png',name:'Raff'},
     ] },
     {id:4,name:'Frunk',value:'frunk',playlists:[
      {id:1,img:'/l1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/l2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/l3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/l4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/l5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/l6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/l8.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/l1.png',
          title:'Luna',
          artist:'Jacob',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/l1.png',
          title:'Luna',
          artist:'Jacob',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/l1.png',
          title:'Luna',
          artist:'Jacob',
          new:false,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/la1.png',name:'Maluma'},
      {id:1,img:'/la2.png',name:'Xavi'},
      {id:1,img:'/la3.png',name:'JBavlin'},
      {id:1,img:'/la4.png',name:'Bad Bunny'},
      {id:1,img:'/la5.png',name:'Raff'},
     ] },
     {id:5,name:'Hip-Hop',value:'hip-hop',playlists:[
      {id:1,img:'/h1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/h2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/h3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/h4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/h5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/h6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/h7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/h1.png',name:'Post Malone'},
      {id:1,img:'/h2.png',name:'Tommy'},
      {id:1,img:'/h3.png',name:'Hoizer'},
      {id:1,img:'/h4.png',name:'Teddy'},
      {id:1,img:'/h5.png',name:'Bunny'},
     ] },
     {id:6,name:'Indie',value:'indie',playlists:[
      {id:1,img:'/h1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/h2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/h3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/h4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/h5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/h6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/h7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/h1.png',name:'Post Malone'},
      {id:1,img:'/h2.png',name:'Tommy'},
      {id:1,img:'/h3.png',name:'Hoizer'},
      {id:1,img:'/h4.png',name:'Teddy'},
      {id:1,img:'/h5.png',name:'Bunny'},
     ] },
     {id:7,name:'Synth-Wave',value:'synth-wave',playlists:[
      {id:1,img:'/h1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/h2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/h3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/h4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/h5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/h6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/h7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/h1.png',name:'Post Malone'},
      {id:1,img:'/h2.png',name:'Tommy'},
      {id:1,img:'/h3.png',name:'Hoizer'},
      {id:1,img:'/h4.png',name:'Teddy'},
      {id:1,img:'/h5.png',name:'Bunny'},
     ] },,
     {id:8,name:'Old School',value:'oldschool',playlists:[
      {id:1,img:'/h1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/h2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/h3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/h4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/h5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/h6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/h7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/h1.png',name:'Post Malone'},
      {id:1,img:'/h2.png',name:'Tommy'},
      {id:1,img:'/h3.png',name:'Hoizer'},
      {id:1,img:'/h4.png',name:'Teddy'},
      {id:1,img:'/h5.png',name:'Bunny'},
     ] },,
     {id:9,name:'R&B',value:'r&b',playlists:[
      {id:1,img:'/h1.png',title:'Free Mood',playlistName:'Beat Playlist',description:'Pleasant beat ',tracks:10},
      {id:2,img:'/h2.png',title:'Food Style',playlistName:'Creator playlist',description:'Eat all day all night all time',tracks:8},
      {id:3,img:'/h3.png',title:'Take Me To You',playlistName:'Creator playlist',description:'Love is Ours',tracks:12},
      {id:4,img:'/h4.png',title:'Catch Me',playlistName:'Creator playlist',description:'Sexy mood',tracks:10},
      {id:5,img:'/h5.png',title:'Hunny Come Back',playlistName:'Creator playlist',description:'Wherever you go is this rythm',tracks:6},
      {id:6,img:'/h6.png',title:'Keep it up',playlistName:'Creator playlist',description:'Gray mode',tracks:8},
      {id:7,img:'/h7.png',title:'Gray',playlistName:'Creator playlist',description:'Lorem ipsum dolor sit',tracks:12},
    ],songs:[
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
        {
          id:1,
          img:'/h4.png',
          title:'Million Chances',
          artist:'Xoier',
          new:true,
          duration:'2:32',
          text1:'68 BPM',text2:'C Maj',
          genres:[{
            id: 6,
            name: "Indie",
            value: "indie"
            },
            {
            id: 7,
            name: "Synth-wave",
            value: "synth-wave"
            },
            {
              id: 9,
              name: "R&B",
              value: "r&b"
              }]

        },
    ] ,majorArtists:[
      {id:1,img:'/h1.png',name:'Post Malone'},
      {id:1,img:'/h2.png',name:'Tommy'},
      {id:1,img:'/h3.png',name:'Hoizer'},
      {id:1,img:'/h4.png',name:'Teddy'},
      {id:1,img:'/h5.png',name:'Bunny'},
     ] },,
  ]