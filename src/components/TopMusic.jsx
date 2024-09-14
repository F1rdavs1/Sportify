import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../hooks/useEnv'

function TopMusic({searchText, partTitle, setPlay, accessToken, setPlaying}) {
    const spotifyApi = new SpotifyWebApi({
        clientId: CLIENT_ID
    })

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        if (!accessToken || !searchText) return;
        spotifyApi.setAccessToken(accessToken) 

        spotifyApi.searchTracks(searchText).then(res => {
            setTracks(res.body.tracks.items.map((item) => {
                const data = {
                    img: item.album.images[0].url,
                    artistName: item.artists[0].name,
                    trackName: item.name,
                    uri:item.uri,
                };
                return data
            }))
        }).catch((err) => console.error('Xatolik: ', err)) 
    }, [accessToken, searchText])

    function handleClickMusic(item) {
        setPlay(item.uri)
        setPlaying(true)
    }

    return (
        <div className='p-5 mb-[50px]'>
            <h2 className="font-bold text-white mb-[26px] text-[25px]">{partTitle}</h2>
            <div className="flex gap-5 overflow-x-auto">
                {tracks.map((item, index) => (
                    <div onClick={() => handleClickMusic(item)} className='min-w-[224px] cursor-pointer card-bg p-5 rounded-[8px]' key={index}>
                        <img className='mb-[25px] rounded-[8px]' src={item.img} alt="top music img" width={182} height={182} />
                        <div className="flex flex-col">
                            <h2 className='text-white font-bold text-[20px] line-clamp-1 mb-2'>{item.trackName}</h2>
                            <strong className='text-white'>{item.artistName}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopMusic
