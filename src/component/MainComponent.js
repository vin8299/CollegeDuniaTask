import React from 'react'

export const Main = (props) =>{
    console.log(props.colleges)
        const college = props.colleges.map((college) => {
            
            return(
                    <div className="col-6">
                        <div className="card">
                            <div className="container">
                                <img src="assets/college_02.jpg" alt="College" style={{width:"100%",opacity:0.3,height:"100%"}} />
                                <div class="rating">
                                    <h4 style={{display:"inline"}}>{college.rating}</h4>
                                    <p style={{fontSize:"12px",margin:"6px",padding:"0px"}}>{college.rating_remarks}</p>
                                </div>
                                <div class="clg-desc">
                                    <div class="first_clg" style={{"margin-right":"8px"}}>
                                        <p style={{fontSize:"12px", margin:"10px"}}>{college.tags[0]}</p>
                                    </div>  
                                        <div class="first_clg">
                                        <p style={{fontSize:"12px",margin:"10px"}}>{college.tags[1]}</p>
                                    </div>
                                </div>
                                <div class="clg-desc-text">
                                    <p style={{fontSize:"16px", margin:"10px", color:"white"}}>#{college.ranking}</p>
                                </div>
                            </div>
                            <div className="container1">
                                <div class="contain1">
                                    <h4 style={{display:"inline-block",marginBottom:"1px",marginTop:"5px",color:"black",marginLeft:"10px","font-size":"12px"}}>{college.college_name}</h4> <h5 style={{display:"inline", textAlign:"center",color:"grey"}}>★★★★☆</h5>
                                    <br />
                                        <p style={{display:"inline-block",marginTop:"0px", fontSize:"9px",color:"black",marginBottom:"0px",marginLeft:"10px"}}>{college.nearest_place[0]}</p>
                                    <p style={{display:"inline-block",color:"grey",fontSize:"9px",marginBottom:"0px",marginTop:"0px"}}> | {college.nearest_place[1]}</p>
                                        <br />
                                        <p style={{display:"inline-block",marginTop:"0px", fontSize:"10px",fontWeight:"bold",marginBottom:"0px",marginLeft:"10px",marginTop:"0px"}}>93% Match :</p>
                                        <p style={{display:"inline-block",color:"grey",fontSize:"10px",color:"black",fontWeight:"bold",marginTop:"0px"}}>{college.famous_nearest_places}</p>
                                        <br/>
                                        <div class="bottom-login" style={{display:"inline-block",backgroundColor:"skyblue", borderRadius:"0 20px 20px 0",padding:"10px"}}>
                                            <p style={{display:"inline",marginTop:"0px", fontSize:"12px",marginBottom:"0px",color:"black"}}>{college.offertext}</p>
                                        </div>
                                </div>
                                <div class="contain2" style={{"text-align":"right","margin-right":"10px"}}>
                                    <h5 style={{display:"inline-block","margin-bottom":"1px","margin-top":"5px",color:"grey","margin-right":"10px","text-decoration":"line-through"}}>{college.original_fees}</h5> <div class="discount-label red"> <span>{college.discount}</span></div>
                                    <br/>
                                        <p style={{display:"inline-block","margin-top":"1px", "font-size":"24px",color:"red","font-weight":"bold","margin-bottom":"0px","margin-left":"10px"}}>{college.discounted_fees}</p>
                                        <br/>
                                        <p style={{display:"inline-block","margin-top":"0px", "font-size":"10px","font-weight":"bold","margin-bottom":"0px","margin-left":"10px","margin-top":"0px",color:"grey"}}>{college.fees_cycle}</p>
                                        <br/>
                                        <p style={{display:"inline-block","margin-top":"10px","font-size":"16px","font-weight":"bold","margin-bottom":"0px","margin-left":"10px",color:"skyblue"}}>{college.amenties[0]} ● {college.amenties[1]}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
            );
        })
        
        return(
            <div className="container-main">
                <div className="row">
                    <div className="col-12">
                        <h3>Colleges in North India</h3>
                    </div>
                </div>
                <div className="row">
                    {college}
                </div>
            </div>
        );
}