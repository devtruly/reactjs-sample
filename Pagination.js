import React, { Component } from 'react';
import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from "react-icons/md";
import datatype from "prop-types";

/**
 * @author Dev-Truly
 * @param currentPage       현재 페이지 번호
 * @param postsPerPage      페이지 리스팅 수
 * @param totalPosts        게시글 총 갯수
 * @param paginate          부모 상태 조정 함수
 * @returns {JSX.Element}
 */
class Pagination extends Component {
    GetBlockInfo = () => {
        let lastPage = Math.ceil(this.props.totalPosts / this.props.postsPerPage); // 최종 페이지 번호

        let block = Math.ceil(this.props.currentPage / this.props.pageLimit); // 현재 페이징 블럭 계산
        let start = ((block - 1) * this.props.pageLimit) + 1;         // 현재 페이징 블럭
        let end = Math.min(lastPage, (start + this.props.pageLimit) - 1);

        return {lastPage, start, end}
    }

    GetPagination({...blockInfo}) {

        //console.log();
        let components = [];
        if (blockInfo.start > 1)
            components.push(
                <li
                    className="page-first"
                    onClick={e=>this.props.paginate(1)}>
                    <MdFirstPage size={20} />
                </li>
            );

        if (1 < this.props.currentPage)
            components.push(
                <li
                    className="page-previous"
                    onClick={e=>this.props.paginate(this.props.currentPage - 1)}
                >
                    <MdChevronLeft size={20} />
                </li>
            );

        for (let i = blockInfo.start; i <= blockInfo.end; i++) {
            let currentPageClass = "";
            if (this.props.currentPage === i) currentPageClass = "current-page";
            components.push(
                <li
                    className={`page-number ${currentPageClass}` }
                    onClick={
                        (currentPageClass === "") ?
                        (e) => this.props.paginate(i) : () => null
                    }
                >
                    {i}
                </li>
            );
        }

        if (this.props.currentPage < blockInfo.lastPage)
            components.push(
                <li
                    className="page-next"
                    onClick={e=>this.props.paginate(this.props.currentPage + 1)
                }>
                    <MdChevronRight size={20} />
                </li>
            );

        if (blockInfo.end < blockInfo.lastPage)
            components.push(
                <li
                    className="page-last"
                    onClick={e=>this.props.paginate(blockInfo.lastPage)}
                >
                    <MdLastPage size={20} />
                </li>
            );

        return (
            <ul className="page-list-group">
                {components}
            </ul>
        );
    }

    render() {
        let {
            currentPage,
            postsPerPage,
            pageLimit,
            totalPosts,
            paginate
        } = this.props;

        return (
            <>
                {this.GetPagination(this.GetBlockInfo())}
            </>

        );
    }
}

Pagination.propTypes = {
    currentPage: datatype.number,
    postsPerPage: datatype.number,
    totalPosts: datatype.number,
    paginate: datatype.func,
}



export default Pagination;