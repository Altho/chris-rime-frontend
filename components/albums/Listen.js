import style from '../../styles/[slug].module.css'
import Image from 'next/image';
import Link from 'next/link'

export default function Listen({spotify,apple,deezer}){

        return (
            <div className={style.listen}>
                <div className={style.items}>
                    {spotify && (<Link href={spotify} target="_blank">
                        <a target="_blank">
                            <Image
                                src='/images/listen/spotify.svg'
                                width={'100%'}
                                height={'100%'}

                            />
                        </a>
                    </Link>)}

                    {apple && (
                        <Link href={apple} target="_blank">
                            <a target="_blank">
                                <Image
                                    src='/images/listen/apple.svg'
                                    width={'100%'}
                                    height={'100%'}

                                />
                            </a>
                        </Link>
                    )}

                    {deezer && (
                        <Link href={deezer} >
                            <a target="_blank">
                                <Image
                                    src='/images/listen/deezer.svg'
                                    width={'100%'}
                                    height={'100%'}

                                />
                            </a>
                        </Link>
                    )}

                </div>
            </div>
        )


}