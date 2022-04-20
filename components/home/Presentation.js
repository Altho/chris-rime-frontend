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
                Chris Rime est plus connu pour les disques sortis sous son nom ou ses
                ouvrages pédagogiques, néanmoins, il a, tout au long de sa carrière,
                travaillé en tant que sideman ou arrangeur/producteur avec des
                musiciens et musiciennes de renom dans des styles aussi différents que
                le Jazz, la World Music, la Fusion, le Gospel ou la Pop. En voici une
                liste non exhaustive : Raul Paz, Clementine, Paco Sery, Linley Marthe,
                Laurent De Wilde, Etienne M’Bappé, Stéphane Belmondo, Roger Biwandu,
                Marcus Miller, Mario Canonge, Georges Seba, Djeli Moussa Diawara,
                Audren, Nguyen Lê, Le Choeur Gospel de Paris, Maggie Blanchard, Nicole
                Croisille, Tairo, Axel Tony, Bijou ...          </div>
            <div className={style.paragraph}>
                <div className={style.icon}>
                    <Image
                        src={'/images/icons/acc.svg'}
                        width={50}
                        height={50}
                    />
                </div>
                Chris Rime a écrit plusieurs méthodes autour de la guitare ou de la
                MAO, mais avant cela il avait enseigné de nombreuses années dans des
                conservatoires ou des écoles de musiques actuelles. Ses méthodes sont
                maintenant devenues des références dans le milieu de la guitare en
                France et à l’étranger où elles ont été traduites. Il a également été
                directeur du Centre des Musiques Actuelles à Valenciennes de 2003 à
                2007 où il a pu mettre en pratique certaines de ses idées novatrices
                en matière de pédagogie. Il a croisé sur sa route plus de 3000 élèves
                (cours particuliers ou Master classes) dont une grande partie
                travaille maintenant dans les métiers de la musique. Depuis 2007,
                Chris Rime parcoure la France pour animer stages et Master Classes.



                 </div>
            <div className={style.paragraph}>
                <div className={style.icon}>
                    <Image
                        src={'/images/icons/teacher.svg'}
                        width={50}
                        height={50}
                    />
                </div>
                Chris Rime a multiplié les projets personnels depuis ses plus jeunes
                années. Sa volonté artistique prendra forme avec son premier disque «
                Rime », qui sortira en 1995. Ce disque, véritable succès, lui vaudra
                le titre de nouveau virtuose de la guitare et lui permettra
                d&aposenchainer 5 autres albums toujours accompagné de rythmiques
                prestigieuses (Michel Alibo/Mokthar Samba ; Linley Marthe/Paco Sery ;
                Etienne MBappé/Roger Biwandu ; Marcus Miller/Roger Biwandu ; Hadrien
                Feraud/Tilo Bertholo). Sa musique se vend dans les quatre coins du
                monde, elle est axée autour de la guitare et balance entre le Jazz, le
                Jazz-Fusion et Blues. Il a joué dans de nombreux clubs de Jazz et
                festivals et continue encore de le faire avec son nouveau projet « At
                the Bar With Mr Punk ».
                Depuis 1997, Chris a composé et produit de nombreuses musiques pour la
                Télé, les jeux vidéo et le cinema.       </div>

        </div>
    )
}