import React, { Component } from 'react';

import '../css/App.css';
import Header from "./Inc/Header/Header";
import Footer from "./Inc/Footer/Footer";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Route, Routes } from "react-router";
import Main from "./Main";
import CardList from "./Community/CardList";
import Investment from "./Community/Investment";
import BusinessList from "./Business/BusinessList";
import Slide from "./Business/Slide";
import Company from "./Company/Company";


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(1);
    }

    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Routes>
                        <Route exact path='/' element={<Main />} />
                        <Route exact path='/Company' element={
                            <Company />
                        } />
                        <Route exact path='/Business' element={
                            <BusinessList
                                OneDepth="사업소개"
                                TwoDepth="사업소개"
                            />
                        } />
                        <Route exact path='/Notice' element={
                            <CardList
                                OneDepth="커뮤니티"
                                TwoDepth="공지사항"
                            />
                        } />
                        <Route exact path='/News' element={
                            <CardList
                                OneDepth="커뮤니티"
                                TwoDepth="보도자료"
                            />
                        } />

                        <Route exact path='/Investment' element={
                            <Investment
                                OneDepth="커뮤니티"
                                TwoDepth="투자문의"
                            />
                        } />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;