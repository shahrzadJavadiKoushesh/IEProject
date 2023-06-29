import React, {useState} from "react";

import TermsInfo from "./TermsInfo";
import {useNavigate, Link} from 'react-router-dom';

function SeeAllTErmsStudent(){
  const [numTerms, setNumTerms] = useState(8);

  const navigate = useNavigate();

  const [selectedTerm, setSelectedTerm] = useState(null);

  const [showTermsListRight, setShowTermsListRight] = useState(true);

  const see_more = () => {
    console.log("see more");
    setNumTerms(numTerms + 4)
  }

  const handleTermClick = (term) => {
    console.log("Term clicked:", term);
    setSelectedTerm(term);
    navigate('/')
    setShowTermsListRight(false);
  }

  const handleCloseTermsInfo = () => {
    setSelectedTerm(null);
    setShowTermsListRight(true);
  }

  const terms = [
    {name: "ترم پاییز 1399", id:1},
    {name: "ترم بهار 1400", id:2},
    {name: "ترم پاییز 1400", id:3},
    {name: "ترم بهار 1401", id:4},
    {name: "ترم پاییز 1401", id:5},
    {name: "ترم بهار 1402", id:6},
    {name: "ترم پاییز 1402", id:7},
    {name: "ترم بهار 1403", id:8},
    {name: "ترم 9", id:9},
    {name: "ترم 10", id:10},
    {name: "ترم 11", id:11},
    {name: "ترم 12", id:12},
    {name: "ترم 13", id:13},
    {name: "ترم 14", id:14},
    {name: "ترم 15", id:15},
    {name: "ترم 16", id:16},
    {name: "ترم 17", id:17},
    {name: "ترم 18", id:18},
    {name: "ترم 19", id:19},
    {name: "ترم 20", id:20},
  ];

  return (
    <div className='terms-container'>
      {selectedTerm ? (
        <TermsInfo selectedTerm={selectedTerm} onClose={handleCloseTermsInfo} />
      ) : (
        <div className='left'>
          <div className='term-bar'>
          <h2> خروج </h2>
          <h2>علیرضا کریمی</h2>
        </div>
          <div className='terms'>
            {terms.slice(0, numTerms).map((term) =>(
                <Link to={`/terms/${term.id}`}>
              <div className="term-item">
                {term.name}
              </div>
                </Link>
            ))}
          </div>
          {numTerms < terms.length && (
            <button onClick={see_more} className="see-more">مشاهده بیشتر</button>
          )}
        </div>
      )}
      {
        showTermsListRight && (
          <div className='terms-list-right'>
            مشاهده لیست ترم‌ها
          </div>
        )
      }
    </div>
  )
}

export default SeeAllTErmsStudent