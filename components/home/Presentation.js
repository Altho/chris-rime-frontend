import style from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Presentation(){
    return(
        <div className={style.presentationContainer}>
            <div className={style.paragraph}>
                <div className={style.icon}>
                    <Image
                        src={'/images/icons/music.svg'}
                        width={50}
                        height={50}
                    />
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum eget turpis nec feugiat. Aenean at ante mauris. Nam dictum eu nibh in cursus. Donec sollicitudin diam id turpis mollis, in rhoncus dui efficitur. Mauris non odio dolor. Donec at mi porta, blandit velit non, feugiat diam. Aliquam id arcu facilisis, accumsan massa vitae, sollicitudin dui.            </div>
            <div className={style.paragraph}>
                <div className={style.icon}>
                    <Image
                        src={'/images/icons/lightning.svg'}
                        width={50}
                        height={50}
                    />
                </div>
                Suspendisse venenatis tellus nec sem finibus cursus. Fusce vulputate erat in placerat luctus. Fusce non turpis nulla. Donec in ex sit amet libero tincidunt feugiat. Etiam aliquam mollis metus ac bibendum. Proin lacinia fermentum feugiat. Cras ac sem et diam molestie molestie. Fusce non tortor ac purus egestas elementum. Vivamus imperdiet maximus ligula at sodales. Duis id turpis non orci porta viverra. Nullam sollicitudin enim eget ex sagittis, ac egestas ligula eleifend. Morbi consequat malesuada placerat. Donec viverra ex quis sem posuere, non malesuada leo rutrum.            </div>
            <div className={style.paragraph}>
                <div className={style.icon}>
                    <Image
                        src={'/images/icons/teacher.svg'}
                        width={50}
                        height={50}
                    />
                </div>
                Pellentesque porta ex nec tortor sagittis, quis elementum felis dignissim. In hac habitasse platea dictumst. Nam libero nibh, aliquet quis lectus vel, tincidunt suscipit dolor. Morbi varius sollicitudin dolor, nec mollis lectus finibus eget. Aliquam vitae dapibus lacus. Phasellus in nisl quis nibh ultricies bibendum eleifend non diam. Sed dictum interdum odio ut sollicitudin. Proin a neque ullamcorper, gravida nunc sit amet, semper lacus. Nulla tincidunt augue sit amet quam hendrerit consectetur. Proin nisi orci, lobortis at quam porttitor, efficitur convallis nunc. Duis hendrerit molestie velit in molestie.            </div>

        </div>
    )
}