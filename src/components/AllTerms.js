import React, {useState} from "react";

function AllTerms(){
  const [numTerms, setNumTerms] = useState(8);

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const terms = [
      "ترم 1",
      "ترم 2",
      "ترم 3",
      "ترم 4",
      "ترم 5",
      "ترم 6",
      "ترم 7",
      "ترم 8",
      "ترم 9",
      "ترم 10",
      "ترم 11",
      "ترم 12",
      "ترم 13",
      "ترم 14",
      "ترم 15",
      "ترم 16",
      "ترم 17",
      "ترم 18",
      "ترم 19",
      "ترم 20",
    ];
    return (
        <div className='terms-container'> 
          <div className='left'>
            <div className='welcome-bar'>
              <h2>Welcome</h2>
            </div>
            <div className='terms'>
              {terms.slice(0, numTerms).map((term) =>(
                <div className="term-item">{term}</div>
              ))}
            </div>
            {numTerms < terms.length && (
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

export default AllTerms