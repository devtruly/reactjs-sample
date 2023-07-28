import React, { Component } from 'react';
import { RiArrowUpDownFill } from "react-icons/ri";
import { Input, Label } from "reactstrap";
import { BiSearch } from "react-icons/bi";

function SearchArea () {
    return (
        <div className="search_area">
            <div className="add_search_group">
                <RiArrowUpDownFill size={20} />
                <a style={{position:"relative", top:"-35px", right:"-25px"}}>최신순</a>
            </div>
            <div className="search_input_group">
                <Input type="text" placeholder="제목 + 본문 검색" name="search" id="search_input" className="search_input"  />
                <a><Label for="search_input" ><BiSearch size={25} className="search_icon"/></Label></a>
            </div>
        </div>
    );
}

export default SearchArea;