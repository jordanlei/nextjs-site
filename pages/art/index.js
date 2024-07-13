import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import Gallery from '../../components/gallery';

export default function Art(){
    var images =
    [
        [
          {
            file: "/images/art/cascais.jpeg",
            caption: "Cascais",
            subcaption: "Acrylic, 2024",
            width: 2078,
            height: 1512,
            tag: "traditional",
          },
          {
            file: "/images/art/johnsoanesmuseum.jpeg",
            caption: "Sir John Soane's Museum",
            subcaption: "Pen, 2023",
            width: 750,
            height: 1048,
            tag: "traditional",
          },
        ],
        [
          {
            file: "/images/art/niagarafalls.jpeg",
            caption: "Niagara Falls",
            subcaption: "Oil, 2023",
            width: 2048,
            height: 1536,
            tag: "traditional",
          },
          {
            file: "/images/art/oregoncoast.jpeg",
            caption: "Oregon Coast",
            subcaption: "Oil, 2023",
            width: 790,
            height: 995,
            tag: "traditional",
          },
        ],
        [
          {
            file: "/images/art/spacedout.jpeg",
            caption: "Spaced Out",
            subcaption: "Digital, 2023",
            width: 1920,
            height: 1280,
            tag: "traditional",
          },
          {
            file: "/images/art/birdsofny.jpeg",
            caption: "Birds of NY",
            subcaption: "Digital, 2023",
            width: 2016,
            height: 1558,
            tag: "traditional",
          },
        ],
        [
          {
            file: "/images/art/cerebellum.JPG",
            caption: "Purkinje Cell",
            subcaption: "Oil, 2022",
            width: 3024,
            height: 3830,
            tag: "neuro",
          },
          {
            file: "/images/art/hippocampus.JPG",
            caption: "Hippocampus",
            subcaption: "Oil, 2022",
            width: 3023,
            height: 2225,
            tag: "neuro",
          },
        ],
        [
          {
            file: "/images/art/pyramidalcell.JPG",
            caption: "Pyramidal Cell",
            subcaption: "Oil, 2022",
            width: 3366,
            height: 2421,
            tag: "neuro",
          },
          {
            file: "/images/art/spinalcord.JPG",
            caption: "Spinal Cord",
            subcaption: "Oil, 2022",
            width: 4032,
            height: 3024,
            tag: "neuro",
          },
          {
            file: "/images/art/ganglion.JPG",
            caption: "Retinal Ganglion",
            subcaption: "Oil, 2022",
            width: 3453,
            height: 2542,
            tag: "neuro",
          },
        ],
        [
          {
            file: "/images/art/new-york.jpg",
            caption: "Starry Night Over New York",
            subcaption: "Oil, 2013",
            width: 2552,
            height: 1567,
            tag: "traditional",
          },
          {
            file: "/images/art/chicago.jpg",
            caption: "Starry Night Over Chicago",
            subcaption: "Acrylic, 2013",
            width: 1825,
            height: 2190,
            tag: "traditional",
          },
          {
            file: "/images/art/portland2.jpg",
            caption: "Portland, Oregon",
            subcaption: "Mixed Media, 2017",
            width: 3766,
            height: 3024,
            tag: "traditional",
          },
        ],
        [
          {
            file: "/images/art/thwaites.jpg",
            caption: "Brenton Thwaites",
            subcaption: "Digital, 2017",
            width: 1802,
            height: 1109,
            tag: "realism",
          },
          {
            file: "/images/art/chrisevans.jpg",
            caption: "Chris Evans",
            subcaption: "Digital, 2017",
            width: 800,
            height: 1100,
            tag: "realism",
          },
          {
            file: "/images/art/noahcentineo.jpg",
            caption: "Noah Centineo",
            subcaption: "Digital, 2019",
            width: 1754,
            height: 2280,
            tag: "realism",
          },
        ],
    ]

    return(
        <>
            <Head>
                <title>Art Portfolio</title>
            </Head>
            <Gallery images = {images}/>
        </>
    );
}