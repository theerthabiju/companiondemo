import React from 'react'
import "../../assets/css/blog.css" ;
import blogimg1 from "../../assets/images/blogimg1.png";
import blogimg2 from "../../assets/images/blogimg2.png";
import blogimg3 from "../../assets/images/blogimg3.png";





const Blog = () => {
  return (
   <div className='container blogcontainer'>
  <div className=' mb-4'>
    <button className='btn btn-outline blogbtn'>BLOG</button>
    <h3 className='blogtext1 text-start mt-4'>News & Articles</h3>
  </div>

  <div className='row d-flex justify-content-center flex-wrap'>
    <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
      <div className="card blogcard">
        <img src={blogimg1} className="card-img-top" alt="blogeaslyimg" />
        <div className='blogcard-body'>
          <p className='blogdate'>Jul 10, 2024</p>
          <p className='blogtext'>Rapidiously myocardinate cross-platform intellectual capital model.</p>
 <button className='btn btn-outline blogreadmorebtn'><a href="#" >Read More   <i className="bi bi-arrow-right-short blogarrow"></i></a>
          </button> 
                  </div>
      </div>
    </div>
  <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
      <div className="card blogcard">
        <img src={blogimg2} className="card-img-top" alt="blogeaslyimg" />
        <div className='blogcard-body'>
          <p className='blogdate'>Jul 10, 2024</p>
          <p className='blogtext'>Rapidiously myocardinate cross-platform intellectual capital model.</p>
 <button className='btn btn-outline blogreadmorebtn'><a href="#" >Read More   <i className="bi bi-arrow-right-short blogarrow"></i></a>
          </button>        
           </div>
      </div>
    </div>
      <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
      <div className="card blogcard">
        <img src={blogimg3} className="card-img-top" alt="blogeaslyimg" />
        <div className='blogcard-body'>
          <p className='blogdate'>Jul 10, 2024</p>
          <p className='blogtext'>Rapidiously myocardinate cross-platform intellectual capital model.</p>
         <button className='btn btn-outline blogreadmorebtn'><a href="#" >Read More   <i className="bi bi-arrow-right-short blogarrow"></i></a>
          </button> 
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog
