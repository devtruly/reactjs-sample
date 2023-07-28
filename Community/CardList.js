import React, { Component, useEffect } from 'react';
import "../../css/Sub.css";

import { CardListFrom } from "../BoardForm/ListForm";
import SearchArea from "../BoardForm/SearchArea";
import Pagination from "../BoardForm/Pagination";
import "../../css/Pagination.css";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
            currentPage: 1,
            postsPerPage: 10,
            pageLimit: 5,
        }
    }

    setCurrentPage = (page) => {
        this.setState({currentPage: page});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.currentPage !== this.state.currentPage) {
            window.scrollTo(0, 0);
            return true;
        }
    }

    render() {
        let {
            OneDepth, TwoDepth
        } = this.props;

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div className="container">
                <div className="hearder">
                    <span>{this.props.OneDepth}</span>
                    <span>{this.props.TwoDepth}</span>
                </div>
                <div className="contents">
                    <SearchArea />
                    <CardListFrom
                        Title="제목 부분 입니다."
                        Content="기버의 목적은 나눔이라는 본질로 전세계에 영향력을 만드는것입니다.

                                요즘 코로나로 인한 부분도 포함한 갈수록 이웃들간에 정이라는 것이 많이 사라지는듯합니다 그전에도 그랬지만 코로나 터진 후 더욱 멀어지기도 했습니다

                                너무 보여지는것만으로 현혹된 세상에서
                                기버는 그런 고객들(이웃.사람)의 마음이 잊혀지지....."
                        Writer="홍길동"
                        ReadCnt={10}
                        WriteDate="2022.04.22"
                    />
                    <CardListFrom
                        Title="제목 부분 입니다."
                        Content="기버의 목적은 나눔이라는 본질로 전세계에 영향력을 만드는것입니다.

                                요즘 코로나로 인한 부분도 포함한 갈수록 이웃들간에 정이라는 것이 많이 사라지는듯합니다 그전에도 그랬지만 코로나 터진 후 더욱 멀어지기도 했습니다

                                너무 보여지는것만으로 현혹된 세상에서
                                기버는 그런 고객들(이웃.사람)의 마음이 잊혀지지....."
                        Writer="홍길동"
                        ReadCnt={10}
                        WriteDate="2022.04.22"
                    />
                    <CardListFrom
                        Title="제목 부분 입니다."
                        Content="기버의 목적은 나눔이라는 본질로 전세계에 영향력을 만드는것입니다.

                                요즘 코로나로 인한 부분도 포함한 갈수록 이웃들간에 정이라는 것이 많이 사라지는듯합니다 그전에도 그랬지만 코로나 터진 후 더욱 멀어지기도 했습니다

                                너무 보여지는것만으로 현혹된 세상에서
                                기버는 그런 고객들(이웃.사람)의 마음이 잊혀지지....."
                        Writer="홍길동"
                        ReadCnt={10}
                        WriteDate="2022.04.22"
                    />
                    <CardListFrom
                        Title="제목 부분 입니다."
                        Content="기버의 목적은 나눔이라는 본질로 전세계에 영향력을 만드는것입니다.

                                요즘 코로나로 인한 부분도 포함한 갈수록 이웃들간에 정이라는 것이 많이 사라지는듯합니다 그전에도 그랬지만 코로나 터진 후 더욱 멀어지기도 했습니다

                                너무 보여지는것만으로 현혹된 세상에서
                                기버는 그런 고객들(이웃.사람)의 마음이 잊혀지지....."
                        Writer="홍길동"
                        ReadCnt={10}
                        WriteDate="2022.04.22"
                    />
                    <div className="pagination-area">
                        <Pagination
                            currentPage={this.state.currentPage}
                            postsPerPage={this.state.postsPerPage}
                            pageLimit={this.state.pageLimit}
                            totalPosts={367}
                            paginate={this.setCurrentPage}
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default CardList;