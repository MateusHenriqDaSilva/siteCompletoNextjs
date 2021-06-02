import React from 'react'
import Link from 'next/link'
import {
    Cards__item,
    Cards__item__link,
    Cards__item__pic_wrap,
    Cards__item__img,
    Cards__item__info,
    Cards__item__text

} from './CardsElements'

const Card = ({ id, imgIcone, categoria, cabecalho}) => {
    return (
        <>
            <Cards__item id={id}>
                <Link href={`/blog/postagem/${id}`} passRef>
                    <Cards__item__link>
                        <Cards__item__pic_wrap data-category={categoria}>
                            <Cards__item__img src={imgIcone} />
                        </Cards__item__pic_wrap>
                        <Cards__item__info>
                            <Cards__item__text>{cabecalho}</Cards__item__text>
                        </Cards__item__info>
                    </Cards__item__link>
                </Link>
            </Cards__item>
        </>
    )
}

export default Card
