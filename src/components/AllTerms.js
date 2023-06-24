import React from "react";
function AllTerms(){

    const see_more = () => {
        console.log("see more");
    }
    return (
        <div className='terms-container'> 
          <div className='left'>
            <div className='welcome-bar'>
              <h2>Welcome <span></span></h2>
            </div>
            
            <div className='terms'>
              <div className='term-item'>ترم 1</div>
              <div className='term-item'>ترم 2</div>
              <div className='term-item'>ترم 3</div>
              <div className='term-item'>ترم 4</div>
              <div className='term-item'>ترم 5</div>
              <div className='term-item'>ترم 6</div>
              <div className='term-item'>ترم 7</div>
              <div className='term-item'>ترم 8</div>
            </div>
          <button onClick={see_more} className='see-more'>مشاهده بیشتر</button>
          </div>
          <div className='terms-list-right'>
            مشاهده لیست ترم‌ها
          </div>
        </div>
    )
}

export default AllTerms