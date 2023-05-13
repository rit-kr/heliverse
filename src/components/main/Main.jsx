import { useEffect, useState } from "react"
import User from "../user/Users"
import Aside from "../aside/Aside";
import { Pagination } from 'antd';



export default function Main(props) {

    const [data, setData] = useState(props.data);
    const [input, setInput] = useState("");
    const [domain, setDomain] = useState([]);
    const [gender, setGender] = useState([]);
    const [filteredDomain, setFilteredDomain] = useState([]);
    const [filteredGender, setFilteredGender] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);

    const handleDomain = () => {
        const allDomain = data.map(item => item.domain)
            .filter((value, index, self) => self.indexOf(value) === index);
        setDomain(allDomain);
    }

    const handlegender = () => {
        const allgender = data.map(item => item.gender)
            .filter((value, index, self) => self.indexOf(value) === index);
        setGender(allgender);
    };

    const handleFilter = (elem, string) => {

        if (string === "domain") {
            let filteredDomainArray = [];
            filteredDomain.includes(elem) ?
                filteredDomainArray = filteredDomain.filter(item => item !== elem) :
                filteredDomainArray = [...filteredDomain, elem];
            setFilteredDomain(filteredDomainArray);
        }
        if (string === "gender") {
            let filteredGenderArray = [];
            filteredGender.includes(elem) ?
                filteredGenderArray = filteredGender.filter(item => item !== elem) :
                filteredGenderArray = [...filteredGender, elem];
            setFilteredGender(filteredGenderArray);
        }
    };

    useEffect(() => {
        filteredDomain.length &&
            handleFilteredData("domain");
    }, [filteredDomain]);

    useEffect(() => {
        filteredGender &&
            handleFilteredData("gender");
    }, [filteredGender]);

    useEffect(() => {
        const filterData = data.filter((p) => p.first_name.toLowerCase().includes(input.toLowerCase())
            || p.last_name.toLowerCase().includes(input.toLowerCase()));
        setFilteredData(filterData);
        handleDomain();
        handlegender();
        
    }, [input]);

    const handleFilteredData = (string) => {
        let genderDataFiltered = [];
        let domainDataFiltered = [];

        if (filteredGender.length) {
            genderDataFiltered = data.filter(user => filteredGender.includes(user.gender));
        };

        if (filteredDomain.length) {
            domainDataFiltered = data.filter(user => filteredDomain.includes(user.domain));
        };

        if (string === "domain") {
            let newFilteredData = [];
            if (filteredGender.length) {
                if (filteredDomain.length) {
                    newFilteredData = genderDataFiltered.filter(user =>
                        filteredDomain.includes(user.domain));
                }
            } else if (filteredDomain.length) {
                newFilteredData = data.filter(user =>
                    filteredDomain.includes(user.domain));
            } else {
                newFilteredData = data;
            };

            setFilteredData(newFilteredData);
        };

        if (string === "gender") {
            let newFilteredData = [];
            if (filteredDomain.length) {
                if (filteredGender.length) {
                    newFilteredData = domainDataFiltered.filter(user =>
                        filteredGender.includes(user.gender));
                }
            } else if (filteredGender.length) {
                newFilteredData = data.filter(user => filteredGender.includes(user.gender));

            } else {
                newFilteredData = data;
            };
            setFilteredData(newFilteredData);
        };
    };

    useEffect(() => {
        if (filteredData.length < 0) {
            currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
        } else {
            currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
        }
    }, [filteredData])

    const handleAvailable = () => {
        let availableFilter = data.filter(user => user.available)
        setFilteredData(availableFilter);
    }

    let indexOfLastPost = currentPage * postPerPage;
    let indexOfFirstPost = indexOfLastPost - postPerPage;
    let currentPosts = (filteredData || data).slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="m-6 bg-">
                <div className="flex">
                    <div className=" p-2 ">
                        <input className="border-2" type="text" onChange={e => setInput(e.target.value)} />
                        <Aside data={data}
                            gender={gender}
                            domain={domain}
                            handleFilter={handleFilter}
                            handleAvailable={handleAvailable}
                        />
                    </div>
                    <div className="mx-6">
                        <User data={currentPosts} />
                        {
                            currentPosts.length ?
                            <Pagination onChange={paginate}
                                total={filteredData.length || data.length}
                                defaultPageSize={postPerPage}
                                hideOnSinglePage
                                simple
                            /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}