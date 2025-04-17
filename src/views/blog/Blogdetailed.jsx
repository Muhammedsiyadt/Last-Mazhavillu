import React from "react";
import "../../assets/css/blogdetailed.css";
import blogbanner from "../../assets/images/blogbanner.png";
import organicfoodimg from "../../assets/images/organicfoodimg.webp";

const Blogdetailed = () => {
  return (
    <div>
      <div className="container-fluid blogdetailedcontainer position-relative d-flex justify-content-center">
        <img
          className="img-fluid blogdeatailedbanner"
          src={blogbanner}
          alt="blogbanner"
        />         
    
      </div>


<div className="container-fluid blogdetailedarea mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-12 mb-4">
      <img
        className="img-fluid organicfoodimg"
        src={organicfoodimg}
        alt="blogimages"
      />
      <h3 className="blogtitlehere mt-4"><b>Blog Title here</b></h3>

      <p className=" OrganicEatinghead"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person m-2" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>Theertha          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history m-2" viewBox="0 0 16 16">
        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
      </svg>16.April.2025    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat m-2" viewBox="0 0 16 16">
        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
      </svg>   Comments </p>
   
      <p className="blogparagraph">
            In a world where the environmental impact of our choices is
            increasingly under scrutiny, organic eating has emerged not just as
            a health-conscious decision but also as a sustainable lifestyle
            choice. More than a trend, choosing organic is a commitment to both
            personal well-being and the well-being of the planet we call home.
          </p>
          <h6 className="blogsubhead">
            <b>Understanding Organic Eating</b>
          </h6>
          <p className="blogparagraph">
            Organic eating involves consuming food produced through organic
            farming practices, which prioritize the use of natural fertilizers,
            crop rotation, and biological pest control. This method avoids the
            use of synthetic pesticides, genetically modified organisms (GMOs),
            and synthetic growth hormones. The result is food that is not only
            free from harmful chemicals but also produced in a manner that is
            gentle on the environment.
          </p>
          <h6 className="blogsubhead">
            <b>Environmental Benefits of Organic Farming</b>
          </h6>
          <p className="blogparagraph">
            Reduced Chemical Runoff: One of the significant environmental
            advantages of organic farming is the reduction in chemical runoff
            into water sources. Conventional agriculture often relies heavily on
            synthetic pesticides and fertilizers, which can contaminate nearby
            rivers and lakes. Organic farming methods, on the other hand,
            prioritize natural inputs, minimizing the risk of water
            pollution,Enhanced Soil Health: Organic farming focuses on building
            and maintaining healthy soil through practices like crop rotation
            and the use of compost. Healthy soil, rich in organic matter,
            retains water more effectively and promotes biodiversity. This
            contrasts with conventional farming, which can lead to soil
            degradation and erosion.
          </p>
          <h6 className="blogsubhead">
            <b>Incorporating Organic Eating Into Your Lifestyle
            </b>
          </h6>
          <p className="blogparagraph">
            Reduced Chemical Runoff: One of the significant environmental
            advantages of organic farming is the reduction in chemical runoff
            into water sources. Conventional agriculture often relies heavily on
            synthetic pesticides and fertilizers, which can contaminate nearby
            rivers and lakes. Organic farming methods, on the other hand,
            prioritize natural inputs, minimizing the risk of water
            pollution,Enhanced Soil Health: Organic farming focuses on building
            and maintaining healthy soil through practices like crop rotation
            and the use of compost. Healthy soil, rich in organic matter,
            retains water more effectively and promotes biodiversity. This
            contrasts with conventional farming, which can lead to soil
            degradation and erosion.
          </p>


    </div>

   
    <div className="col-lg-4 col-12">
      <h4 className="blogsubhead text-center">OTHER BLOGS</h4>
      <div className="blog-filters d-flex flex-wrap justify-content-center gap-2 mt-3">
       <div className="crad blogdetailedcard">
       <ul className="otherbloglist">
            <li><img className="blogimg1" src={organicfoodimg} alt="other blogs img" />Kothas Products <button className="btn otherblogbtn btn-outline">Read More....</button>
            </li>
            <li><img className="blogimg1" src={organicfoodimg} alt="other blogs img" />Kothas Products<button className="btn  otherblogbtn btn-outline">Read More....</button> </li>
            <li><img className="blogimg1" src={organicfoodimg} alt="other blogs img" />Kothas Products<button className="btn  otherblogbtn btn-outline">Read More....</button></li>
            <li><img className="blogimg1" src={organicfoodimg} alt="other blogs img" />Vegs/Non-vegs <button className="btn  otherblogbtn btn-outline">Read More....</button></li>

        </ul>
       </div>
       
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Blogdetailed;
