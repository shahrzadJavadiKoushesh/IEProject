import React, {useState} from "react";

function CourseInfo(props){
  const [numTerms, setNumTerms] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const {selectedCourse, onClose} = props;

  const see_more = () => {
    console.log("see more");
    setNumTerms(numTerms + 4)
  }

  const students = [
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
    "حسن امیدی",
  ];

  const filteredCourses = students.filter((student) =>
    student.includes(searchQuery)
  );

  return (
    <div className='terms-container'> 
      <div className='left'>
        <div className='term-bar'>
          <h2>تعداد کل ثبت‌نامی‌ها: {students.length} نفر</h2>
          <h2>درس {selectedCourse}</h2>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="جستجوی نام دانشجو"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='terms'>
          {filteredCourses.slice(0, numTerms).map((student) => (
            <div
              className="term-item"
            >
              {student}
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

export default CourseInfo