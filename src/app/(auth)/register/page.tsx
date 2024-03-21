'use client'

import styles from '@/styles/register.module.css'
import loaderStyles from '@/styles/loader.module.css'
import React, { useState } from 'react'
import useSWR from 'swr'
import Loading from '@/app/loading'
import Image from 'next/image'
import Link from 'next/link'
import { useFormState, useFormStatus } from 'react-dom'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const RegisterComponent = () => {


    const [company, setCompany] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        companyName: "",
        industryCode: "0",
        PrincipleCode: "222444",
        countryCode: "0",
        addressline1: "",
        contactNo: ""
    })

    const { data: countries, error: error1 } = useSWR('/api/country', fetcher, { revalidateOnFocus: true, fallbackData: '' });
    const { data: industries, error: error2 } = useSWR('/api/industry', fetcher, { fallbackData: '' });

    if (error1 || error2) {
        return <div>Error: {error1?.message || error2?.message}</div>;
    }

    if (!countries || !industries) {
        return (
            <div className={loaderStyles.preloader}>
                <div className={loaderStyles.box}></div>
            </div>
        );
    }

    const { pending } = useFormStatus();
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault()

        const response = await fetch('/api/register', {
            method: "POST",
            body: JSON.stringify(company),
            headers: {
                "content-type": "application/json"
            }
        })

        const data = await response.json()
        console.log(data);

    }
    return (
        <main className={styles.main__cont}>
            <div className={styles.curve__bg}></div>
            <div className='main__header'>
                <Link href="/">
                    <Image src="/wm.png" width={150} height={50} alt='logo' />
                </Link>
            </div>
            <div className={styles.inner__cont}>
                <form className={styles.register__form} onSubmit={onSubmit}>
                    <h1 className={styles.main__heading}>Register for Demo Access</h1>
                    <p className={styles.main__intro}>Explore an insightful walkthrough </p>
                    <div className="flex items-center px-4 py-2 mb-2 text-xs text-red-800 rounded-md bg-red-50">
                        <Image src='/info.svg' width={20} height={20} alt='info icon' />
                        <span className='ml-2'>Change a few things up and try submitting again.</span>
                    </div>
                    <div className={styles.input__cont}>
                        <div className={styles.input__bx}>
                            <label>First Name</label>
                            <input type="text" placeholder='Enter your first name' id="txtFirstName" name="firstName" required onChange={(event) => { setCompany({ ...company, firstName: event.target.value }) }} />
                        </div>
                        <div className={styles.input__bx}>
                            <label>Last Name</label>
                            <input type="text" placeholder='Enter your last name' id="txtLastName" name="lastName" required value={company.lastName} onChange={(event) => { setCompany({ ...company, lastName: event.target.value }) }} />
                        </div>
                        <div className={styles.input__bx}>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email' id="txtEmail" name="email" required onChange={(event) => { setCompany({ ...company, email: event.target.value }) }} />
                        </div>
                        <div className={styles.input__bx}>
                            <label>Password</label>
                            <input type="password" placeholder='Enter your password' id="txtPassword" name="password" required onChange={(event) => { setCompany({ ...company, password: event.target.value }) }} />
                        </div>
                        <h2 className={styles.sub__heading}>Company Information</h2>
                        <div className={styles.input__bx}>
                            <label>Company Name</label>
                            <input type="text" placeholder='Enter your company name' id="txtcompanyName" name="companyName" required onChange={(event) => { setCompany({ ...company, companyName: event.target.value }) }} />
                        </div>
                        <div className={styles.input__bx}>
                            <label>Industry</label>
                            <select className="custom-select" id="ddlIndustry" name="industryCode" required onChange={(event) => { setCompany({ ...company, industryCode: event.target.value }) }}>
                                {
                                    JSON.parse(industries).map((row: any) => (
                                        <option key={row.id} value={row.name} >{row.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={styles.input__bx}>
                            <label>Country</label>
                            <select className="custom-select" id="ddlCountryCode" name="countryCode" required onChange={(event) => { setCompany({ ...company, countryCode: event.target.value }) }}>
                                {
                                    JSON.parse(countries).map((row: any) => (
                                        <option key={row.id} value={row.name}>{row.name}</option>
                                    ))
                                }
                            </select>

                        </div>
                        <div className={styles.input__bx}>
                            <label>Address</label>
                            <input type="text" placeholder='Enter your address' id="txtAddressline1" name="addressline1" required onChange={(event) => { setCompany({ ...company, addressline1: event.target.value }) }} />
                        </div>
                        <div className={styles.input__bx}>
                            <label>Contact No</label>
                            <input type="tel" placeholder='Enter your contact no' id="txtContactNo" name="contactNo" required onChange={(event) => { setCompany({ ...company, contactNo: event.target.value }) }} />
                        </div>
                        <div className={styles.terms__bx}>
                            <input type="checkbox" name="" id="" />
                            <div className={styles.terms__info}>
                                <p>By clicking, you are confirming that you have read, understood and agree to our <Link href={'/'} className={styles.terms__link}>Terms & Conditions</Link> and our <Link href={'/'} className={styles.terms__link}>Privacy Policy</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.continue__btn__grid}>
                        <Link href={'/verification'} className={styles.continue__btn}>Continue</Link>
                    </div>
                </form>
            </div>
        </main>

    )
}

export default function Page() {
    return (
        <RegisterComponent />
    )
}
/*
export const getServerSideProps = (async () => {
    const staticDataDirPath = path.join(process.cwd(), "src", "data");
    const listOfIndustries = await fs.readFile(path.join(staticDataDirPath, "country.json"), 'utf8');
    const listOfCountries = await fs.readFile(path.join(staticDataDirPath, "country.json"), 'utf8');

    return {
        props: {
            industries: JSON.parse(listOfIndustries),
            countries: JSON.parse(listOfCountries)
        },
        revalidate: 86400
    }

}) satisfies GetServerSideProps*/