import React, {useState} from "react";

function TermsInfo(props){
  const [numTerms, setNumTerms] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const {selectedTerm, onClose} = props;

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
    "آمار و احتمال",
    "معماری کامپیوتر",
    "شبکه‌های کامپیوتری",
    "سیستم عامل",
    "گرافیک کامپیوتری",
    "هوش مصنوعی",
  ];

  const filteredCourses = courses.filter((course) =>
    course.includes(searchQuery)
  );

  return (
    <div className='terms-container'> 
      <div className='left'>
        <div className='term-bar'>
          <h2>مشاهده اطلاعات ترم</h2>
          <h2>دروس {selectedTerm}</h2>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="جستجوی دوره‌ها"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='terms'>
          {filteredCourses.slice(0, numTerms).map((course) => (
            <div className="term-item" onClick={goNextPage}>
              {course}
            </div>
          ))}
        </div>
        {numTerms < filteredCourses.length && (
          <button onClick={see_more} className="see-more">
            مشاهده بیشتر
          </button>
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