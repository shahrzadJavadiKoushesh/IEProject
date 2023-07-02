import React, {useRef, useState} from 'react'
import {
    FormControl, Input,
    TextField,
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import http from "../http";
import {useNavigate} from "react-router-dom";
import SideBar from "../new-components/SideBar";
import TopBar from "../new-components/TopBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Form from "../new-components/Form"
import Signout from "../new-components/Signout";

function ITManagerSeeSUbmitChangesForStudents({Login, error}) {

    const navigate = useNavigate();
    const [fetched, setFetched] = useState(false);
    const colleges = useRef(["کامپیوتر", "برق"]);
    const semesters = useRef(["سخت افزار", "نرم افزار"]);

    if (!fetched) {
        http.get('admin/colleges').then((res) => {
            return res.data.output
        }).then((allCols) => {
            colleges.current = allCols

            http.get('admin/semesters').then((res) => {
                return res.data.output
            }).then((allSems) => {
                semesters.current = allSems
                setFetched(!fetched);
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })


    }


    const addStudent = (e) => {
        e.preventDefault();

        const form = e.target
        const requestData = {}
        for (const element of form.elements) {
            if ("name" in element) {
                requestData[element.name] = element.value
            }
        }
        requestData['fullname'] = requestData['firstname'] + " " + requestData['lastname']

        http.post('admin/manager', requestData).then(
            () => {
                navigate(-1)
            }).catch(err => {
            console.log(err)
        })
    }

    const formFields = [
        {
            title: "نام",
            type: "text",
            name: "firstname",
            component: Input,
        },
        {
            title: "نام خانوادگی",
            type: "text",
            name: "lastname",
            component: Input,
        },
        {
            title: "شماره دانشجویی",
            type: "text",
            name: "usercode",
            component: Input,
        },
        {
            title: "کدملی",
            type: "text",
            name: "password",
            component: Input,
        },
        {
            title: "دانشکده",
            type: "text",
            name: "college",
            component: Autocomplete,
            args: {
                options: colleges.current,
                getOptionLabel: (option) => option.name,
                renderInput: (params) => <TextField {...params} label="" variant="outlined"/>
            }
        },
        {
            title: "رشته",
            type: "text",
            name: "semester",
            component: Autocomplete,
            args: {
                getOptionLabel: (option) => option.name,
                options: semesters.current,
                renderInput: (params) => <TextField {...params} label="" variant="outlined"/>
            }
        }
    ]

    const buttonData = {
        text: "ذخیره"
    }

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <Signout/>
                </div>
                <TopBar data={{
                    buttons: [{
                        text: "بازگشت",
                        onClickHandler: () => {
                            navigate(-1)
                        },
                        icon: ArrowBackIcon,
                    }],
                    barTitle: "ثبت/تغییر اطلاعات معاون آموزشی"
                }}/>
                <div className='it-container'>
                    <div className={"form-wrapper"}>

                        <Form data={{
                            buttonData: buttonData,
                            fields: formFields,
                            submitHandler: addStudent,
                        }}/>
                    </div>
                </div>


            </div>
            <SideBar data={{
                items: [
                    {
                        text: "مشاهده لیست دانشجویان",
                        url: "/students"
                    },
                    {
                        text: "مشاهده لیست معاونان",
                        url: "/managers"
                    },
                    {
                        text: "مشاهده لیست اساتید",
                        url: "/professors"
                    }
                ]
            }}/>
        </div>
    )
}

export default ITManagerSeeSUbmitChangesForStudents