import {useState} from "react";
import styles from '../styles/contact.module.css'
import {TextInput} from '@mantine/core';
import {Button} from '@mantine/core';
import {Router, useRouter} from 'next/router';
import Layout from "../components/layout";
import { Textarea } from '@mantine/core';


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const locale = useRouter().locale;

    const displayName = () => {
        if (locale === 'en') {
            return 'Name :'
        }
        return 'Nom :'
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            message
        }
        fetch('/api/contactserver', {
            method: 'post',
            body: JSON.stringify(data),
        })



    }

    return (
        <Layout>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}
                  className={styles.container}
            >
                <TextInput
                    placeholder={locale === 'en' ? ('Your name') : ('Votre nom')}
                    className={styles.input}
                    label={displayName()}
                    required
                    size={'md'}
                    onChange={e => setName(e.target.value)}
                />
                <TextInput
                    placeholder={locale === 'en' ? ('Your email address') : ('Votre adresse email ')}
                    className={styles.input}
                    label={'Email'}
                    required
                    onChange={e => setEmail(e.target.value)}

                    size={'md'}
                />
                <Textarea
                    placeholder={locale === 'en' ? ('Your message') : ('Votre message ')}
                    label="Your comment"
                    required
                    onChange={e => setMessage(e.target.value)}

                />
                <Button onClick={handleSubmit}
                >{locale === 'en' ? ('Your message') : ('Votre message ')}</Button>
            </form>
        </Layout>
    )


}
