import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Bilgiler } from '../models/IContent'

function ContentDetail() {

  const [item, setItem] = useState<Bilgiler>()  
  const { id } = useParams()
  useEffect(() => {
    if ( id ) {
        const url = 'https://jsonbulut.com/json/contentShow.php'
        const sendObj = {
            ref: '1fb75fa2eef1d2cc11c3e21b6fe18613',
            contentId: id,
            random: Math.random()
        }
        axios.get(url, {params: sendObj}).then(res=>{
            const dt = res.data
            if (dt) {
                const bilgiler = dt.contents[0].bilgiler as Bilgiler
                setItem(bilgiler)
            }
        })
    }
  }, [])
   

  return (
    <>
        <Helmet>
            <title>title</title>
            <meta name='description' content={'content'}></meta>
        </Helmet>
        <Header />
        <NavBar />
        { item &&
            <>
                <h2>{item.title}</h2>
                <p className='text-danger fs-6'>{item.date.toString()}</p>
                <p>{item.summary}</p>
                <p dangerouslySetInnerHTML={{ __html: item.details }}></p>
            </>
        }

    </>
  )
}

export default ContentDetail