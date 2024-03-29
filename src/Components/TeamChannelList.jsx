import React from 'react'

import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error =  false, loading, type }) => {

    if(error){
        return type === 'team' ? (
          <div className='team-channel-list'>
            <p className='team-channel-list___message'>
              Connection error, please wait a moment and try again.
            </p>
          </div>
        ) : null 
    }

    if(loading){
      return (
        <div className='team-channel-list'>
            <p className='team-channel-list___message loading'>
              {type === 'team' ? 'channels' : 'Messages'} loading...
            </p>
        </div>
      )
    }

  return (
    <div className='team-channel-list'>
      <div className='team--channel-list__header'>
        <p className='team-channel-list__header__title'>
        {type === 'team' ? 'channels' : 'Direct Messages'} 
        </p>
        {/* Button - add channel */}
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList