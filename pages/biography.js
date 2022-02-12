import Layout from "../components/layout";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import style from '../styles/biography.module.css'
import { FaGraduationCap } from 'react-icons/fa';


export default function Biography(){
    return(
        <>
            <Layout>
                <div className={style.bioHeader}>
                    <div className={style.biobg}>

                    </div>

                    <div className={style.biotext}>
                        <p>Chris Rime, entouré par une famille de musiciens, commence la musique à 10 ans. Au collège, il joue de la batterie et surtout de la guitare et anime déja de nombreuses soirées privées. A 16 ans, il reçoit sa première commande pour illustrer un court métrage puis rencontre Nguyen Lê avec qui il forme un duo qui se produit  de manière régulière dans les clubs de jazz parisiens. La majorité à peine acquise, il traverse l'atlantique pour s'inscrire au mythique Berklee College of Music.</p>
                        <p>De retour en France, parallèlement à une carrière de sideman aux cotés d'artistes de variété, iljoue sur le premier disque d'Ultramarine "Programme Jungle" et tente une expérience de "Fusionlyrique" en montant le groupe : "Soap Op". Dominique Di Piazza, Nguyen Lê et StéphaneHuchard apporteront aussi leurs talents à cette aventure.</p>
                        <p>En 1995, son premier album "RIME" enregistré en compagnie de Mokhtar Samba, Michel Aliboet Pierre Olivier Govin reçoit d'excellentes critiques. Ses mélodies deviennent les génériques deplusieurs émissions de radio (FIP, France info).</p>
                        <p>Les années suivantes, Chris compose, arrange, produit et joue sur de nombreux projets(albums, musiques pour la télé, pour les pubs, pour les jeux vidéo).</p>
                    </div>

                </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(89, 131, 146)', color: '#fff', boxShadow:'none' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red' }}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(89, 131, 146)', color: '#fff', boxShadow:'none' }}

                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaGraduationCap/>}
                />
            </VerticalTimeline>
            </Layout>
        </>
    )
}