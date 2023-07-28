import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import { HighlightLogo, Logo } from "./Logo";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false,
            highlight_class : ""
        };
    }

    GNBHighlight = (flag) => {
        let highlight = (flag) ? "gn_2_highlight" : "";

        this.setState(
            {
                highlight_class : highlight
            }
        );
        this.LogoHighlight(flag);
    }

    LogoHighlight = (flag) => {
        this.setState(
            {
                highlight: flag,
            }
        );
    }

    render() {
        return (
            <header className="gnb_box">
                <div className="h_nav ct1 af">
                    <div className="logo"  onMouseOver={e => this.LogoHighlight(true, e)} onMouseOut={e => this.LogoHighlight(false, e)}>
                        <Link to={"/"}>
                            {!this.state.highlight ?
                                <Logo /> :
                                <HighlightLogo />
                            }
                            {/**/}
                        </Link>
                    </div>
                    <nav className="gnb gnb_admin" >
                        <ul className="af" onMouseOver={e => this.GNBHighlight(true, e)} onMouseOut={e => this.GNBHighlight(false, e)}>
                            <li className="menulist">
                                <a href='/Company'>회사소개</a>
                                <ul className={`gn_2 ${this.state.highlight_class}`} >
                                    <li><a>회사소개</a></li>
                                    <li><a>비전</a></li>
                                </ul>
                            </li>
                            <li className="menulist">
                                <a href="/Business">사업소개</a>
                                {/*<ul className={`gn_2 ${this.state.highlight_class}`}>*/}
                                {/*    <li><a>서브메뉴1</a></li>*/}
                                {/*    <li><a>서브메뉴2</a></li>*/}
                                {/*    <li><a>서브메뉴3</a></li>*/}
                                {/*</ul>*/}
                            </li>
                            <li className="menulist"><a href="/Notice">커뮤니티</a>
                                <ul className={`gn_2 ${this.state.highlight_class}`}>
                                    <li><a href="/Notice">공지사항</a></li>
                                    <li><a href="/News">보도자료</a></li>
                                    <li><a href="/Investment">투자문의</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
