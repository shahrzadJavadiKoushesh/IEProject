import React, {useState} from "react";


function TermsInfo(){
  const [numTerms, setNumTerms] = useState(6);

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const goNextPage = () => {
      console.log("CLICKED");
    }

    const courses = [
      "مبانی برنامه‌نویسی",
      "برنامه‌نویسی پیشرفته",
      "ساختمان داده",
      "نظریه زبان‌ها و  ماشین‌ها",
      "مدارهای الکتریکی",
      " مدار منطقی",
      "مبانی برنامه‌نویسی",
      "برنامه‌نویسی پیشرفته",
      "ساختمان داده",
      "نظریه زبان‌ها و  ماشین‌ها",
      "مدارهای الکتریکی",
      " مدار منطقی",
    ];
    return (
        <div className='terms-container'> 
          <div className='left'>
            <div className='welcome-bar'>
              <h2>{}</h2>
            </div>
            <div className='terms'>
              {courses.slice(0, numTerms).map((course) =>(
                <div className="term-item" onClick={goNextPage}>
                  {course}
                </div>
              ))}
            </div>
            {numTerms < courses.length && (
                <button onClick={see_more} className="see-more">مشاهده بیشتر</button>
              )}
          </div>
          {
            <div className='terms-list-right'>
              مشاهده لیست ترم‌ها
            </div>
          }
        </div>
    )
}

export default TermsInfo