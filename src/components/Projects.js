import React, { useState } from "react"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"


export const Projects = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const projects = [
        {
            title: "Buisness Startup",
            description: "Design & Developement",
            imageUrl: projImg1
        },
        {
            title: "Buisness Startup",
            description: "Design & Developement",
            imageUrl: projImg2
        }
        , {
            title: "Buisness Startup",
            description: "Design & Developement",
            imageUrl: projImg3
        },
        {
            title: "Buisness Startup",
            description: "Design & Developement",
            imageUrl: projImg3
        }, {
            title: "Buisness Startup",
            description: "Design & Developement",
            imageUrl: projImg1
        }, {
            title: "Buisness Startup",
            description: "Design & Developement",
            imageUrl: projImg2
        }
    ]

    const tabs = [
        {
            name: "tab1",
            content: projects.slice(0, 3),
            writing: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        },
        {
            name: "tab2",
            content: projects.slice(4, 6),
            writing: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        },
        {
            name: "tab3",
            content: projects.slice(0, 3),
            writing: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        },
    ]

    return (
        <>

            <section className="project">
                <div className="tabs">
                    <button className="tab1" onClick={()=>setTabIndex(0)}>Tab 1</button>
                    <button className="tab2" onClick={()=>setTabIndex(1)}>Tab 2</button>
                    <button className="tab3" onClick={()=>setTabIndex(2)}>Tab 3</button>

                </div>

                <div className="content">
                    {console.log("tabs[tabIndex] is ",tabs[tabIndex])}
                   
                         
                            <div className="project">
                                   <ul>
                              {  tabs[tabIndex].content.map((proj,index)=>{
                                    return(
                                        <li className="project-tile"><img src={proj.imageUrl}/></li>
                                    )
                                })}
                                </ul>
                            </div>
                        
               
                </div>
            </section>
        </>
    )
}