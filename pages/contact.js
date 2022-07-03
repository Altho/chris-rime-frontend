import {useState} from "react";
import styles from '../styles/contact.module.css'
import {TextInput} from '@mantine/core';
import {Button, LoadingOverlay} from '@mantine/core';
import {Router, useRouter} from 'next/router';
import { showNotification } from '@mantine/notifications';
import { Check} from 'tabler-icons-react';
import Layout from "../components/layout";
import { Textarea } from '@mantine/core';


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isBeingSent, setIsBeingSent] = useState(false)
    const locale = useRouter().locale;

    const displayName = () => {
        if (locale === 'en') {
            return 'Name :'
        }
        return 'Nom :'
    }

    const checkMark = () => {
        return (
            <>
                <Check size={18} />
            </>
        )
    }

    const notifTitle = () => {
        if (locale === 'en') {
            return 'Message sent !'
        }
        return 'Message envoyé !'
    }

    const notifMessage= () => {
        if (locale === 'en') {
            return 'Your message was successfully sent.'
        }
        return 'Votre message a été envoyé avec succès'
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setIsBeingSent(true)
        const data = {
            name,
            email,
            message
        }
        try{
            await fetch('/api/contactserver', {
                method: 'post',
                body: JSON.stringify(data),
            })

            setIsBeingSent(false)
            setMessage('')
            setName('')
            setEmail('')
            showNotification({
                icon: checkMark(),
                title: `${notifTitle()}`,
                message: `${notifMessage()}`,
            })

        }
        catch(err){
        }





    }

    return (
        <Layout>
        <div style={{height:'100vh'}}>
            <form onSubmit={handleSubmit}
                  className={styles.container}
            >
                <LoadingOverlay visible={isBeingSent} />
                <h1 className={styles.title}>Contact</h1>
                <TextInput
                    placeholder={locale === 'en' ? ('Your name') : ('Votre nom')}
                    className={styles.input}
                    label={displayName()}
                    value={name}
                    required
                    size={'md'}
                    onChange={e => setName(e.target.value)}
                />
                <TextInput
                    placeholder={locale === 'en' ? ('Your email address') : ('Votre adresse email ')}
                    className={styles.input}
                    value={email}
                    label={'Email'}
                    required
                    onChange={e => setEmail(e.target.value)}

                    size={'md'}
                />
                <Textarea
                    placeholder={locale === 'en' ? ('Your message') : ('Votre message ')}
                    label="Your comment"
                    value={message}
                    required
                    autosize
                    minRows={4}
                    maxRows={8}
                    onChange={e => setMessage(e.target.value)}

                />
                <Button className={styles.btn} onClick={handleSubmit} loading={isBeingSent}
                >{locale === 'en' ? ('Send') : ('Envoyer ')}</Button>

            </form>
        </div>
        </Layout>
    )


}
