import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import TopMusic from '../components/TopMusic'
import PlayBack from '../components/PlayBack'
import { useAuth } from '../hooks/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../hooks/useEnv'
function Dashboard({code}) {
    const [title, setTitle] = useState("")
    const [play, setPlay] = useState([])
    const [playing, setPlaying={setPlaying}] = useState(false) 

    const accessToken = useAuth(code)
    const spotifyApi = new SpotifyWebApi({
        clientId: CLIENT_ID
    })

    useEffect(() => {
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
    },[accessToken])

  return (
    <>
    <div className='p-5'>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} className='w-[400px]' type="text" placeholder='Searching' size='large' />
    </div>
    <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={"Xamdam Sobirov Qo'shiqlari"} searchText={"Xamdam"}/>
    <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={"Sherali Jo'rayev Qo'shiqlari"} searchText={"Sherali Jo'rayev"}/>
    <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={"Ummon Qo'shiqlari"} searchText={"Ummon"}/>
    <TopMusic setPlaying={setPlaying} accessToken={accessToken} setPlay={setPlay} partTitle={"Jaloliddin Ahmadaliyev Qo'shiqlari"} searchText={"Jaloliddin Ahmadaliyev"}/>
    <PlayBack accessToken={accessToken} playing={playing} setPlaying={setPlaying} play={play}/>
    </>
  )
}

export default Dashboard