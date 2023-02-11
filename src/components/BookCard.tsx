import { Heart24Filled, Heart24Regular } from '@fluentui/react-icons';
import axios from 'axios';
import { average } from 'color.js';
import { useState } from 'react';
import * as _ from '../styles/BookCard';

type cardType = {
    isbn: string;
    hearted?: boolean;
}

type cardHeartType = {
    onClick: any;
    hearted?: boolean;
}

function CardHeart({onClick, hearted}:cardHeartType){
    return(
        <_.ButtonIcon onClick={onClick}>
            {hearted ? <Heart24Filled primaryFill="#ff0000" /> : <Heart24Regular primaryFill="#ffffff" />}
        </_.ButtonIcon>
    );
};

function CardLarge({isbn, hearted}:cardType){
    let naverBookResponse;
    const [bgcolor,setBgcolor] = useState("#000000");
    const axiosConf = {
        method: 'get',
        url: `http://monotype.iptime.org:10888/https://openapi.naver.com/v1/search/book_adv.json`,
        headers: { 
            'X-Naver-Client-Id': '8Fn1UoNIKdYVQyT9GXDJ', 
            'X-Naver-Client-Secret': 'JPi8NyIrxY',
        },
        params: {
            'd_isbn' : isbn
        }
    };
    axios(axiosConf)
        .then(function (response) {
        naverBookResponse = response.data.items[0];
        console.log(naverBookResponse)
    })
        .catch(function (error) {
        console.log(error);
    });

    function getAverage(){
        average(`http://monotype.iptime.org:10888/${naverBookResponse.image}`,
            {format:"hex"}
        )
        .then(color => setBgcolor(color as string));
    };

    return(
        <_.CardBg backgroud={bgcolor}>
            <img src={naverBookResponse.image} onLoad={getAverage} />
            <div>
                <_.CardTitle>{naverBookResponse.title}</_.CardTitle>
                <_.CardTitle className='trans'>{naverBookResponse.author} | {naverBookResponse.pubdate.substr(0,4)}</_.CardTitle>
                <_.CardBody>새삼스럽게 경탄스럽다! 압도적인 몰입감, 가슴 먹먹한 감동 정지아의 손끝에서 펼쳐지는 시대의 온기 미스터리 같은 한 남...</_.CardBody>
                <div>
                    <_.ButtonBlack className='icon'>
                        <CardHeart onClick="afsd"/>
                    </_.ButtonBlack>
                    <_.ButtonBlack>
                        읽은 책에 추가
                    </_.ButtonBlack>
                    <_.ButtonBlack>
                        독서록 작성
                    </_.ButtonBlack>
                </div>
            </div>
        </_.CardBg>
    )
}

export default CardLarge;