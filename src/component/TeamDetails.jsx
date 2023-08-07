import React from 'react'
import data from '../json/members.json'
import { useState } from 'react'
import { BiSolidUserCircle } from "react-icons/bi"

const TeamDetails = () => {
    const [role, setRole] = useState("EC")
    return (
        <div className='container mt-5 mb-2'>
            <div className="row justify-content-center">
                <div className="col-md-6 col-12">
                    <div className="section-title">

                        <h1 className="subtitle">Our Family</h1>
                    </div>
                </div>
            </div>

            {/* FOUNDER */}
            <div className='team-container section-title mb-5'>
                <h1 className="title mb-4">Founders</h1>
                <div className="card-container mb-5 d-flex border-4 rounded-3 flex-row flex-wrap justify-content-center align-items-center">

                    {
                        data.FOUNDERS.map((item, index) => {
                            return (
                                <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                    <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                        <h4 className="card-text"><b>{item.Name}</b></h4>
                                        <p className="card-text">{item.Post}</p>
                                        <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* ALUMINI */}
            <div className='team-container section-title mb-5'>
                <h1 className="title mb-4">Alumini</h1>
                <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                    {
                        data.ALUMINI.map((item, index) => {

                            return (
                                <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                    <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                        <h4 className="card-text"><b>{item.Name}</b></h4>
                                        <p className="card-text">{item.Post}</p>
                                        <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* CURRENT LEAD */}
            <div className='team-container section-title mb-5'>
                <h1 className="title mb-4">Current Lead</h1>
                <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                    {
                        data.CURRENT_LEAD.map((item, index) => {
                            return (
                                <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                    <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                        <h4 className="card-text"><b>{item.Name}</b></h4>
                                        <p className="card-text">{item.Post}</p>
                                        <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* SUB LEAD */}
            <div className='team-container section-title mb-5'>
                <h1 className="title mb-4">Sub Lead</h1>
                <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                    {
                        data.SUB_LEADS.map((item, index) => {
                            return (
                                <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                    <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                        <h4 className="card-text"><b>{item.Name}</b></h4>
                                        <p className="card-text">{item.Post}</p>
                                        <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* OTHERS */}
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                <div className='d-flex overflow-x-scroll overflow-auto flex-row justify-content-center align-items-center border-1 border rounded-3'>
                    <div className=' p-3 btn  focus pointer-event' onClick={() => setRole("EC")}>Event Co-ordinator</div>
                    <div className=' p-3 btn  focus pointer-event' onClick={() => setRole("D")}>Design</div>
                    <div className=' p-3 btn  focus pointer-event' onClick={() => setRole("PR")}>Public Relation</div>
                    <div className=' p-3 btn  focus pointer-event' onClick={() => setRole("CW")}>Content Writer</div>
                    <div className=' p-3 btn  focus pointer-event' onClick={() => setRole("SMC")}>Social Media Co-ordinator</div>
                    <div className=' p-3 btn  focus pointer-event' onClick={() => setRole("M")}>Marketing</div>
                </div>
                <div>
                    {
                        // EVENT_COORDINATOR
                        role === "EC" &&
                        <div className='team-container section-title my-5'>
                            <h1 className="title mb-4">Event Co-ordinator</h1>
                            <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                                {
                                    data.EVENT_COORDINATOR.map((item, index) => {

                                        return (
                                            <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                                <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                                    <h4 className="card-text"><b>{item.Name}</b></h4>
                                                    <p className="card-text">{item.Post}</p>
                                                    <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        // DESIGN
                        role === "D" &&
                        <div className='team-container section-title my-5'>
                            <h1 className="title mb-4">Design Team</h1>
                            <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                                {
                                    data.DESIGN_TEAM.map((item, index) => {

                                        return (
                                            <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                                <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                                    <h4 className="card-text"><b>{item.Name}</b></h4>
                                                    <p className="card-text">{item.Post}</p>
                                                    <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        // PUBLIC_RELATION
                        role === "PR" &&
                        <div className='team-container section-title my-5'>
                            <h1 className="title mb-4">PUBLIC_RELATION</h1>
                            <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                                {
                                    data.PUBLIC_RELATION.map((item, index) => {

                                        return (
                                            <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                                <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                                    <h4 className="card-text"><b>{item.Name}</b></h4>
                                                    <p className="card-text">{item.Post}</p>
                                                    <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        // CONTENT
                        role === "CW" &&
                        <div className='team-container section-title my-5'>
                            <h1 className="title mb-4">CONTENT creator</h1>
                            <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                                {
                                    data.CONTENT.map((item, index) => {

                                        return (
                                            <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                                <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                                    <h4 className="card-text"><b>{item.Name}</b></h4>
                                                    <p className="card-text">{item.Post}</p>
                                                    <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        // SOCIALMEDIA_CO_ORDINATOR
                        role === "SMC" &&
                        <div className='team-container section-title my-5'>
                            <h1 className="title mb-4">Social Media Co-ordinator</h1>
                            <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                                {
                                    data.SOCIALMEDIA_CO_ORDINATOR.map((item, index) => {

                                        return (
                                            <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                                <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                                    <h4 className="card-text"><b>{item.Name}</b></h4>
                                                    <p className="card-text">{item.Post}</p>
                                                    <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        // MARKETING_TEAM
                        role === "M" &&
                        <div className='team-container section-title my-5'>
                            <h1 className="title mb-4">Marketing Team</h1>
                            <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                                {
                                    data.MARKETING_TEAM.map((item, index) => {

                                        return (
                                            <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                                <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                                    <h4 className="card-text"><b>{item.Name}</b></h4>
                                                    <p className="card-text">{item.Post}</p>
                                                    <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>


            {/* DEV */}
            <div className='team-container section-title mb-5'>
                <h1 className="title mb-4">Tech Team</h1>
                <div className="card-container mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">

                    {
                        data.TECHNICAL_TEAM.map((item, index) => {
                            return (
                                <div className="card mx-4 my-4  border-dark  " style={{ minWidth: "250px", borderWidth: '3px', borderImageSource: 'linear-gradient(to bottom, red,white) 2', border: 'solid', borderRadius: '7px' }} key={index}>
                                    <img className="card-img-top" src={item.PictureLink} alt="Card image cap" style={{ width: "250px", height: "250px" }} />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded-bottom " style={{ background: 'rgb(0,0,0)', background: 'linear-gradient(180deg,rgba(129,129,129,1) 0%, #eeeeee 100%)' }}>
                                        <h4 className="card-text"><b>{item.Name}</b></h4>
                                        <p className="card-text">{item.Post}</p>
                                        <a className="card-text btn btn-dark border-2 p-1 w-5 h3 d-flex justify-content-center align-items-center  rounded-5 " href={item.PortfolioLink} ><BiSolidUserCircle /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default TeamDetails