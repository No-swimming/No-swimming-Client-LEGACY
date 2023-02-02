import { Heart24Filled, Heart24Regular } from '@fluentui/react-icons';
import axios from 'axios';
import * as _ from '../styles/BookCard';

type cardType = {
    isbn: string;
    hearted?: boolean;
}

function CardLarge({isbn, hearted}:cardType){
    const axiosConf = {
        method: 'get',
        url: `https://openapi.naver.com/v1/search/book_adv.json?d_isbn=?{isbn}`,
        headers: { 
            'X-Naver-Client-Id': 'key', 
            'X-Naver-Client-Secret': 'secret'
        }
        };
        
    axios(axiosConf)
        .then(function (response) {
        console.log(response.data);
    })
        .catch(function (error) {
        console.log(error);
    });

    return(
        <_.CardBg>
            <img src='https://shopping-phinf.pstatic.net/main_3429447/34294472620.20230119071329.jpg?type=w300'/>
            <div>
                <_.CardTitle>아버지의 해방일지</_.CardTitle>
                <_.CardTitle className='trans'>정지아 | 2022</_.CardTitle>
                <_.CardBody>새삼스럽게 경탄스럽다! 압도적인 몰입감, 가슴 먹먹한 감동 정지아의 손끝에서 펼쳐지는 시대의 온기 미스터리 같은 한 남...</_.CardBody>
                <div>
                    <_.ButtonBlack className='icon'>
                        {hearted ? <Heart24Filled primaryFill='#ff0000'/> : <Heart24Regular primaryFill='#ffffff'/>}
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