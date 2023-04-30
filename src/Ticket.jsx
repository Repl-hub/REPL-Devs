import React, { useState } from 'react'
import StudInfo from './allstud'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ticket.css'

function Ticket () {
    const [StudentInfo, setStudInfo] = useState(null)
    const [email, setEmail] = useState("")

    const searchJson = () => {
        StudInfo.map((info, i) => {
            if (email === info.email) {
                console.log(info)
                setStudInfo(info)
            }
            else {
                setEmail("")
            }


            return <></>
        })
    }

    function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 65, 20);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }


    return (
        <div>
            <div class="center">
            <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' onClick={searchJson} > GENERATE</button>
            </div>
            {/* TICKET DEISGN */}
            {
                StudentInfo &&
                <div>
                    <div class="ticketContainer" id='divToPrint'>
                        <div class="ticket">
                            <div class="ticketTitle">Hackathon</div>
                            <hr />
                            <div class="ticketDetail">
                                <div>Participant:&ensp; <span>{StudentInfo.name.toUpperCase()}</span></div>
                                <div>Event:&ensp; CSS BATTLE</div>
                                <div>Avenue:&nbsp; Auditorium</div>
                                <div>Time:&emsp; <span>{StudentInfo.time.toUpperCase()}</span></div>
                            </div>
                            <div class="ticketRip">
                                <div class="circleLeft"></div>
                                <div class="ripLine"></div>
                                <div class="circleRight"></div>
                            </div>
                            <div class="ticketSubDetail">
                                <div class="date"> April 28<sup>th</sup> 2023</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="center">
                    <button onClick={printDocument}>Download</button>
                    </div>
                </div>

            }



        </div>
    )
}

export default Ticket