/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'
import SpotifyLogo from '../../img/spotify-white.png'

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    playlists: {
      home: null,
      favorites: null
    }
  })

  const playlists = Object.keys(state.playlists)
  return (
    <ul className="Sidebar" css={CSS}>
      <img src={SpotifyLogo} />
      <li className="library">Library</li>
      {playlists.map((list) => (
        <li
          key={list}
          className={list === state.currentPlaylist ? 'active' : ''}
          onClick={() => {
            setState({ ...state, currentPlaylist: list })
          }}
        >
          {list}
        </li>
      ))}
    </ul>
  )
}

const CSS = css`
  width: 200px;
  height: 100%;
  background: #000000;
  padding-top: 20px;

  img {
    height: 60px;
    padding-left: 20px;
    margin-bottom: 20px;
  }
  li {
    padding-left: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: bold;
  }
  li.active {
    border-left: 2px solid white;
    padding-left: 20px;
  }

  li.library {
    cursor: unset;
    color: #999;
    text-transform: uppercase;
    font-weight: normal;
  }
`

export default Sidebar
