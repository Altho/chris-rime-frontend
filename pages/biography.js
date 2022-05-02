import Layout from "../components/layout";
import {Image} from '@mantine/core'
import {useRouter} from "next/router";
import style from '../styles/biography.module.css'
import { FaGraduationCap } from 'react-icons/fa';


export default function Biography(){
    const locale = useRouter().locale;

    const frenchhBio = () => {
        return(
            <div>
                <h1>Biographie</h1>
                <p>
                Chris Rime, entouré par une famille de musiciens, commence la musique à 10 ans. Au collège, il
                joue de la batterie et de la guitare. A 16 ans, il forme un duo avec Nguyen lê qui se produit de
                manière régulière dans les clubs de jazz parisiens. La majorité à peine acquise, il traverse
                l&#39;atlantique pour s&#39;inscrire au mythique Berklee College of Music.
                </p>
                <p>
                De retour en France, il multiplie les projets, en tant que sideman mais aussi en tant que leader dans
                le jazz et la fusion avec son groupe &quot;Soap Op&quot;.
                En 1995, Chris sort son premier album &quot;RIME&quot; enregistré en compagnie de Mokhtar Samba et
                Michel Alibo. Ses mélodies sont jouées régulièrement sur les ondes (TSF, FIP, France info).
                </p>
                <p>
                Les années suivantes, Chris enchaîne plusieurs disques, dont un live, ainsi que d&#39;innombrables
                concerts en tant que leader. La liste d&#39;invités est longue : Paco Sery, Linley Marthe, Laurent De
                Wilde, Etienne M’Bappé, Stéphane Belmondo, Roger Biwandu, Marcus Miller, Mario Canonge et
                bien d&#39;autres. Il joue aussi du Jazz, de la World Music, du Gospel, de la Pop aux cotés de Georges
                Seba, Djeli Moussa Diawara, Audren, Nguyen Lê, …
                </p>
                <p>
                En 2021, At the Bar With Mr Punk, sixième disque de Chris, voit le jour, avec lui aussi une longue
                liste d&#39;invités (Hadrien Feraud, Federico Malaman, Dominique Di Piazza, Stephane Castry, …). Le
                disque après avoir été rodé en concerts en compagnie de Rody Cereyon et Tilo Bertholo, dégage
                une atmosphère sombre et envoutante.
                </p>
                <p>
                Depuis 1997, Chris a composé et produit de nombreuses musiques pour la Télé, les jeux vidéo et le
                cinema. Il est également pédagogue et a écrit plusieurs ouvrages sur la guitare et la MAO. Il donne
                des master classes et anime des stages partout en France.
                Chris Rime est endorsé depuis 2015 par les guitares Framus
                </p>
            </div>
        )
    }

    const englishBio = () =>{
        return(
        <div>
            <h1>Biography</h1>

            <p><strong>
                Chris Rime, surrounded by a family of musicians, began music at the age of 10. In college, he
                played drums and guitar. At the age of 16, he formed a duo with Nguyen lê. They performed
                regularly in Parisian jazz clubs. The majority barely acquired, he crossed the Atlantic to enroll in
                the mythical Berklee College of Music.

            </strong></p>
            <p>
            Back in France, he got involved in many projects, as a sideman but also as a leader in jazz and
            fusion with his group &quot;Soap Op&quot;.
            In 1995, Chris released his first album &quot;RIME&quot; recorded with Mokhtar Samba and Michel Alibo.
            His melodies are played regularly on radios (TSF, FIP, France info).
            </p>
            <p>
            In the following years, Chris recorded several records, including a live one, as well as countless
            concerts as a leader. The guest list is long: Paco Sery, Linley Marthe, Laurent De Wilde, Etienne
            M&#39;Bappé, Stéphane Belmondo, Roger Biwandu, Marcus Miller, Mario Canonge and many others.
            He also plays Jazz, World Music, Gospel, Pop alongside Georges Seba, Djeli Moussa Diawara,
            Audren, Nguyen Lê, ...
            </p>
            <p>
            In 2021, At the Bar With Mr Punk, Chris&#39; sixth album, is born, with him also a long list of guests
            (Hadrien Feraud, Federico Malaman, Dominique Di Piazza, Stephane Castry,...). The record after
            being honed in concerts with Rody Cereyon and Tilo Bertholo, exudes a dark and captivating
            atmosphere.
            </p>
            <p>
            Since 1997, Chris has composed and produced a lot of music for TV, video games and cinema. He
            is also a pedagogue and has written several books on guitar and MAO. He gives master classes and
            leads courses all over France. Chris Rime has been endorsed by Framus guitars since 2015
            </p>
        </div>
        )
    }

    return(
        <>
            <Layout>
                <div style={{minHeight:'100vh'}}>
              <section className={style.bioHeader}>
                <Image
                    className={style.mainImage}
                    src={'/images/rime1.jpg'}
                />
                  <div className={style.bioText}>
                      {locale === 'en' ? (englishBio()) : (frenchhBio())}
                  </div>


              </section>
                </div>
            </Layout>
        </>
    )
}