import React, {useRef, useState} from "react";

import TermsInfo from "./TermsInfo";
import {useNavigate, Link} from 'react-router-dom';
import http from '../http';
import SideBar from "../new-components/SideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TopBar from "../new-components/TopBar";
import Signout from "../new-components/Signout";


function AllTerms() {
    const [numTerms, setNumTerms] = useState(8);

    const [selectedTerm, setSelectedTerm] = useState(null);

    const [showTermsListRight, setShowTermsListRight] = useState(true);

    const [fetched, setFetched] = useState(false);
    const terms = useRef([]);

    const role = localStorage.getItem("role");

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }


    const handleCloseTermsInfo = () => {
        setSelectedTerm(null);
        setShowTermsListRight(true);
    }

    if (!fetched) {
        http.get('terms').then(
            res => {
                return res.data.output
            }
        ).then(
            output => {
                terms.current = output
                setFetched(!fetched)
            }
        ).catch(
            e => console.log(e)
        );
    }
    const linkGetter = (role, term_id) => {
        switch (role) {
            case "professor": return `/terms/${term_id}/registrations_courses`
            case "student": return `/terms/terms_info/${term_id}`
        }
    }

    return (
        <div className='terms-container'>
            {selectedTerm ? (
                <TermsInfo selectedTerm={selectedTerm} onClose={handleCloseTermsInfo}/>
            ) : (
                <div className='left'>
                    <div className='bar'>
                        <Signout/>
                    </div>

                    <TopBar data={{
                        buttons: [],
                        barTitle: "لیست ترم‌ها"
                    }}/>

                    <div className='terms'>
                        {terms.current.slice(0, numTerms).map((term) => (
                            <Link to={linkGetter(role, term._id)}>
                                <div className="term-item">
                                    {term.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                    {numTerms < terms.current.length && (
                        <button onClick={see_more} className="see-more">مشاهده بیشتر</button>
                    )}
                </div>
            )}
            <SideBar data={{
                items: [
                    {
                        text: "مشاهده لیست ترم‌ها",
                        url: "/terms"
                    },
                ]
            }} />
        </div>
    )
}

export default AllTerms