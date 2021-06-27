import React, { useEffect, useState } from "react";
import { GrLinkBottom } from 'react-icons/gr';
import { IoIosLink } from 'react-icons/io';


const URL = 'https://www.plugco.in/public/take_home_sample_feed'

function Main() {

  const [campaigns, setCampaigns] = useState([])

  const titleStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '375px',
    height: '101px',
    left: '420px',
    top: '71px',
    background: '#FFFFFF',
    boxShadow: '0px 1px 0px #E0EEF2'
  }

  const campaignLogoStyle = {
    margin: '10px',
    width: '65px',
    height: '65px',
    left: '438px',
    top: '89px',
    borderRadius: '18px'
  }

  const titleBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  const campaignTitleStyle = {
    height: '0px',
    left: '0%',
    fontFamily: 'SFProText',
    fontSize: '19px',
    fontWeight: 'bold',
    color: '#000000'
  }

  const campaignPpiStle = {
    height: '0px',
    left: '0%',
    fontFamily: 'SFProText',
    fontSize: '16px',
    color: '#009330'
  }

  const mediaDivStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    height: '264px',
    width: '374px',
    top: '0px',
    background: '#F7FBFC',
    border: '1px solid #E0EEF2',
    overflowX: 'scroll'
  }
    
  const divContStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px'
  }

  const mediaPhotoStyle = {
    position: 'relative',
    width: '101px',
    height: '179px',
    borderRadius: '6px',
    webkitFilter: 'brightness(50%)',
    filter: 'brightness(50%)'
  }

  const buttonStyle = {
    width: '49px',
    height: '47px',
    border: '1px solid #E0EEF2',
    borderRadius: '6px',
    background: '#ffffff',
    padding: '0'
  }

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      setCampaigns(data.campaigns)
    })
    .catch((err) => console.error(err))
  }, [])

  console.log(campaigns[0])
  return(
    <div style={{
      width: '100vw',
      height: '50vh'
    }} >
      {campaigns.map((campaign, campaignIdx) => (
        <div key={campaignIdx}>
          <div style={titleStyle}>
            <img src={campaign.campaign_icon_url} alt={`${campaign.campaign_name} logo`} style={campaignLogoStyle} />
            <div style={titleBoxStyle} >
              <p style={campaignTitleStyle} >{campaign.campaign_name}</p>
              <p style={campaignPpiStle} ><strong>{campaign.pay_per_install}</strong> per install</p>
            </div>
          </div>
          <div>
            <div style={mediaDivStyle}>
              {campaign.medias.map((media, mediaIdx) => (
                <div style={divContStyle} key={mediaIdx} >
                  <div>
                    <img src={media.cover_photo_url} style={mediaPhotoStyle} />
                  </div>
                  <div>
                    <button style={buttonStyle}>
                      <IoIosLink size={20} style={{transform: [{ rotate: '180deg' }]}}/>
                    </button>
                    <button style={buttonStyle}>
                      <GrLinkBottom size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main;